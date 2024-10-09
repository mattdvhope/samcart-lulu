// utils/listPrintJobs.js
import axios from 'axios';
import getAccessToken from './getAccessToken'; // Import the new function

const listPrintJobs = async () => {
  const access_token = await getAccessToken();

  const apiBaseURL =
    process.env.NODE_ENV === 'development'
      ? '/api/' // Use proxy for development
      : 'https://api.sandbox.lulu.com/'; // Direct URL for production

  try {

    const response = await axios.get(
      `${apiBaseURL}/print-jobs/`, // This will hit the proxy during development
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    );

    console.log(response.data);
    
  } catch (error) {
    console.error('Error:', error);
  }
};

export default listPrintJobs;
