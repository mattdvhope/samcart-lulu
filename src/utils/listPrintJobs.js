// utils/listPrintJobs.js
import axios from 'axios';
import getAccessToken from './getAccessToken'; // Import the new function

const listPrintJobs = async () => {
  const access_token = await getAccessToken();

  const myHeaders = {
    'Authorization': `Bearer ${access_token}`,
    // 'Cache-Control': 'no-cache'
  };

  try {

    let response;

    // Determine the correct API endpoint based on the environment
    if (process.env.NODE_ENV === 'production') {
      // Production API endpoint
      response = await axios.get(
        "https://api.sandbox.lulu.com/print-jobs/", // Replace with your actual production URL
        { headers: myHeaders }
      );
    } else {
      // Development API endpoint using the proxy
      response = await axios.get(
        "/api/print-jobs/", // This will hit the proxy during development
        { headers: myHeaders }
      );
    }

    console.log(response.data);
    
  } catch (error) {
    console.error('Error:', error);
  }
};

export default listPrintJobs;
