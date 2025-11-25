import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  // Only run on POST requests (though submission-created is always POST)
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { payload } = JSON.parse(event.body || '{}');

    // Netlify form data is inside payload.data
    const { name, email, message, service } = payload.data;

    if (!process.env.DISCORD_WEBHOOK_URL) {
      console.error('Missing DISCORD_WEBHOOK_URL environment variable');
      return { statusCode: 500, body: 'Server Configuration Error' };
    }

    // Construct Discord Embed
    const discordPayload = {
      content: '<@198770770669731840>',
      embeds: [
        {
          title: '📬 New Contact Form Submission',
          color: 5793266,
          fields: [
            {
              name: 'Name',
              value: name || 'N/A',
              inline: true,
            },
            {
              name: 'Email',
              value: email || 'N/A',
              inline: true,
            },
            {
              name: 'Service Interest',
              value: service || 'General Inquiry',
              inline: false,
            },
            {
              name: 'Message',
              value: message ? (message.length > 1024 ? message.substring(0, 1021) + '...' : message) : 'No message',
            },
          ],
          footer: {
            text: 'Sent from Blog Contact Form',
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Send to Discord
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      throw new Error(`Discord API responded with ${response.status}: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notification sent successfully' }),
    };
  } catch (error) {
    console.error('Error processing submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
