import axios from 'axios';
import getAccessToken from './getAccessToken'; // Import the new function

const listPrintJobs = async () => {
  try {
    const access_token = await getAccessToken();

    // Use the access token for the API request
    const myHeaders = {
      'Authorization': `Bearer ${access_token}`,
      'Cache-Control': 'no-cache'
    };

    const response = await axios.get(
      "/api/print-jobs/",
      { headers: myHeaders }
    );

    console.log(response.data);
    
  } catch (error) {
    console.error('Error:', error);
  }
};

export default listPrintJobs;
