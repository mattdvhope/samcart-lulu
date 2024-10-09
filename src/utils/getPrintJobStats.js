import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const getPrintJobStats = async () => {

  const { apiBaseURL, myHeaders } = await getApiConfig();

  try {

    const response = await axios.get(
      `${apiBaseURL}print-jobs/statistics/`,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }
};

export default getPrintJobStats;
