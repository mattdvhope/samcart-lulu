// src/utils/getAccessToken.js

import axios from 'axios';

const getAccessToken = async () => {
  try {
    // Step 1: Get the access token through the proxy
    const tokenResponse = await axios.post(`/api/${process.env.GATSBY_LULU_AUTH}`, new URLSearchParams({
      'grant_type': process.env.GATSBY_GRANT_TYPE
    }), {
      headers: {
        'Content-Type': process.env.GATSBY_CONTENT_TYPE,
        'Authorization': `Basic ${process.env.GATSBY_ENCODED}`
      }
    });

    const { access_token } = tokenResponse.data;
    return access_token; // Return the access token for use
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error; // Rethrow the error for handling in the caller
  }
};

export default getAccessToken;
