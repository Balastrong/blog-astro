import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    let data;
    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';

    if (contentType.includes('application/json')) {
      data = JSON.parse(event.body || '{}');
    } else {
      const params = new URLSearchParams(event.body || '');
      data = Object.fromEntries(params);
    }

    const { name, email, message, service } = data;

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
          color: 5793266, // A nice blue color
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

    if (contentType.includes('application/json')) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Notification sent successfully' }),
      };
    } else {
      return {
        statusCode: 303,
        headers: {
          Location: '/contact?success=true',
        },
      };
    }
  } catch (error) {
    console.error('Error processing submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
