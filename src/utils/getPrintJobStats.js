import axios from 'axios';
import getAccessToken from './getAccessToken';

const getPrintJobStats = async () => {
  const access_token = await getAccessToken();

  const myHeaders = {
    "Authorization": `Bearer ${access_token}`,
    "Cache-Control": "no-cache",
  };

  try {

    const response = await axios.get(
      "/api/print-jobs/statistics/",
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (error) {
    console.error('Error:', error);
  }
};

export default getPrintJobStats;
