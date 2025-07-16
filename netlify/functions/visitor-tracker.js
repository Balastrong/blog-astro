const { Redis } = require('@upstash/redis');
const crypto = require('crypto');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

exports.handler = async (event) => {
  try {
    // Get user's IP (very basic, works behind Netlify)
    const ip = event.headers['x-forwarded-for']?.split(',')[0] || event.headers['client-ip'] || 'unknown';

    // Hash the IP address for privacy
    const anonymizedIp = crypto
      .createHash('sha256')
      .update(ip + process.env.IP_SALT || '')
      .digest('hex')
      .substring(0, 16);

    if (anonymizedIp !== 'unknown') {
      await redis.set(`online:${anonymizedIp}`, event.headers.referer, { ex: 60 * 30 }); // Set key with 30 minutes expiration
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
