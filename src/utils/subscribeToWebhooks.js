import axios from 'axios';
import getAccessToken from './getAccessToken';
import showLuluErrors from './showLuluErrors';

const subscribeToWebhooks = async () => {
  const access_token = await getAccessToken();

  const myHeaders = {
    "Authorization": `Bearer ${access_token}`,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  };

  const requestBody = {
    "topics": [
      "PRINT_JOB_STATUS_CHANGED"
    ],
    "url": process.env.URL_THANKYOU
  };

  try {
    const response = await axios.post(
      "/api/webhooks/",
      requestBody,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

};

export default subscribeToWebhooks;
