import crypto from 'crypto';
import { getStore } from '@netlify/blobs';
import { type Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  try {
    // Initialize Netlify Blob store
    const store = getStore({
      name: 'visitors',
      siteID: process.env.N_SITE_ID,
      token: process.env.N_BLOB_TOKEN,
    });

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

    // Get current visitors object or create a new one
    let visitorsObj = {};
    try {
      visitorsObj = (await store.get('online-visitors', { type: 'json' })) || {};
    } catch (error) {
      // If the blob doesn't exist yet, we'll create it
      visitorsObj = {};
    }

    // Current timestamp
    const now = Date.now();
    const expirationTime = 30 * 60 * 1000; // 30 minutes in milliseconds

    // Add or update the current visitor
    if (anonymizedIp !== 'unknown') {
      // Filter out expired visitors
      for (const id in visitorsObj) {
        if (now - visitorsObj[id] > expirationTime) {
          delete visitorsObj[id];
        }
      }

      // Add or update current visitor
      visitorsObj[anonymizedIp] = now;

      // Save updated object
      await store.set('online-visitors', JSON.stringify(visitorsObj));
    }

    // Count online users
    const count = Object.keys(visitorsObj).length;

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
function isBot(userAgent: string) {
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
