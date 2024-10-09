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
    "url": "https://55b6-2600-8807-8802-6000-7dc4-f9cf-ad77-6c1f.ngrok-free.app"
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