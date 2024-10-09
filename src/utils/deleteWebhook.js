import axios from 'axios';
import getAccessToken from './getAccessToken';
import showLuluErrors from './showLuluErrors';

const deleteWebhook = async (id) => {
  const access_token = await getAccessToken();

  const myHeaders = {
    "Authorization": `Bearer ${access_token}`,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  };

  try {
    const response = await axios.delete(
      `/api/webhooks/${id}`,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

};

export default deleteWebhook;