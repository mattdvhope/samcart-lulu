import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const getPrintJobById = async (id) => {

  const { apiBaseURL, myHeaders } = await getApiConfig();

  try {
    const response = await axios.get(
      `${apiBaseURL}print-jobs/${id}/`,
      { headers: myHeaders }
    );

    console.log(response.data);
    
  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }
  
};

export default getPrintJobById;