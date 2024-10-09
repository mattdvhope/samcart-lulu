import axios from 'axios';
import getAccessToken from './getAccessToken';
import showLuluErrors from './showLuluErrors';

const updateWebhook = async (id) => {
  const access_token = await getAccessToken();

  const myHeaders = {
    "Authorization": `Bearer ${access_token}`,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  };

  const requestBody = {
    "url": process.env.URL_THANKYOU
  };

  try {
    const response = await axios.patch(
      `/api/webhooks/${id}`,
      requestBody,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

};

export default updateWebhook;