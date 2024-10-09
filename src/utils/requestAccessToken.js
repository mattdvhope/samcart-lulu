// src/utils/requestAccessToken.js

import axios from 'axios'; // Directly import axios

// Function to construct the request and return the access token
export const requestAccessToken = async () => {
  const apiBaseURL = process.env.NODE_ENV === 'development' ? '/api/' : process.env.GATSBY_SANDBOX_PRINT_JOBS;
  const url = `${apiBaseURL}${process.env.GATSBY_LULU_AUTH}`; // Use relative URL for dev

  const data = new URLSearchParams({
    'grant_type': process.env.GATSBY_GRANT_TYPE,
  });

  const headers = {
    'Content-Type': process.env.GATSBY_CONTENT_TYPE,
    'Authorization': `Basic ${process.env.GATSBY_ENCODED}`,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Failed to retrieve access token');
  }
};
