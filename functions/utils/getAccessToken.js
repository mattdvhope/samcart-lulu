import axios from 'axios'; // Directly import axios

const getAccessToken = async () => {
  const apiBaseURL =
    process.env.NODE_ENV === 'development'
      ? '/api/' // Use proxy for development
      : 'https://api.sandbox.lulu.com/'; // Direct URL for production

  const url = `${apiBaseURL}${process.env.GATSBY_LULU_AUTH}`; // Use the correct path

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
}; // Missing closing brace added here

export default getAccessToken;
