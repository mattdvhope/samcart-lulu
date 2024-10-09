// utils/listPrintJobs.js
import axios from 'axios';
import { getApiConfig } from './apiConfig'; // Import the new configuration function

const listPrintJobs = async () => {
  try {
    // Destructure apiBaseURL, and myHeaders from getApiConfig
    const { apiBaseURL, myHeaders } = await getApiConfig();

    const response = await axios.get(
      `${apiBaseURL}print-jobs/`, // This will hit the proxy during development
      { headers: myHeaders } // Use myHeaders directly
    );

    console.log(response.data);
    
  } catch (error) {
    console.error('Error:', error);
  }
};

export default listPrintJobs;
