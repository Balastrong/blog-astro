const { Redis } = require('@upstash/redis');
const crypto = require('crypto');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

exports.handler = async (event) => {
  try {
    // Check if request is from a bot
    const userAgent = event.headers['user-agent'] || '';
    const isUserBot = isBot(userAgent);

    if (isUserBot) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, count: 0 }),
      };
    }

    // Get user's IP (very basic, works behind Netlify)
    const ip = event.headers['x-forwarded-for']?.split(',')[0] || event.headers['client-ip'] || 'unknown';

    // Hash the IP address for privacy
    const anonymizedIp = crypto
      .createHash('sha256')
      .update(ip + process.env.IP_SALT || '')
      .digest('hex')
      .substring(0, 16);

    if (anonymizedIp !== 'unknown') {
      await redis.set(`online:${anonymizedIp}`, event.headers, { ex: 60 * 30 }); // Set key with 30 minutes expiration
    }

    // Count online users by counting keys
    const keys = await redis.keys('online:*');
    const count = keys.length;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, count }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Server error' }),
    };
  }
};

// Function to check if the request is from a bot
function isBot(userAgent) {
  if (!userAgent) return true;

  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /googlebot/i,
    /bingbot/i,
    /yahoo/i,
    /yandex/i,
    /baidu/i,
    /slurp/i,
    /facebook/i,
    /crawl/i,
    /scrape/i,
    /archive\.org/i,
    /ahrefs/i,
    /semrush/i,
    /rogerbot/i,
    /mj12bot/i,
    /lighthouse/i,
    /pingdom/i,
    /headless/i,
    /chrome-lighthouse/i,
    /dataminr/i,
    /screaming frog/i,
    /sitebulb/i,
  ];

  return botPatterns.some((pattern) => pattern.test(userAgent));
}
