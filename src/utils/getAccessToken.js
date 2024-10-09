// src/utils/getAccessToken.js

import axios from 'axios'; // Import axios
import { requestAccessToken } from './requestAccessToken'; // Import the shared function

const getAccessToken = async () => {
  try {
    let access_token;

    // Check if running in production
    if (process.env.NODE_ENV === 'production') {
      // Call the Netlify function in production
      const response = await axios.post('/.netlify/functions/getAccessToken');
      access_token = response.data.access_token;
    } else {
      // Use the shared function directly in development
      access_token = await requestAccessToken();
    }

    return access_token; // Return the access token for use
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error; // Rethrow the error for handling in the caller
  }
};

export default getAccessToken;
