// utils/listPrintJobs.js
import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const listPrintJobs = async () => {
  
  const { apiBaseURL, myHeaders } = await getApiConfig();
  
  try {

    const response = await axios.get(
      `${apiBaseURL}print-jobs/`, // This will hit the proxy during development
      { headers: myHeaders } // Use myHeaders directly
    );

    console.log(response.data);
    
  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

}; // listPrintJobs

export default listPrintJobs;
