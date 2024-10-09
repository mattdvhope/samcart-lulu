// netlify/functions/getAccessToken.js

const { requestAccessToken } = require('../../src/utils/requestAccessToken'); // Import shared function

exports.handler = async (event, context) => {
  try {
    const access_token = await requestAccessToken();

    return {
      statusCode: 200,
      body: JSON.stringify({ access_token }),
    };
  } catch (error) {
    console.error('Error getting access token:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to get access token' }),
    };
  }
};
