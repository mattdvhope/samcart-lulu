import axios from 'axios';
import getAccessToken from './getAccessToken';
import showLuluErrors from './showLuluErrors';

const getListOfWebhooks = async () => {
  const access_token = await getAccessToken();

  const myHeaders = {
    "Authorization": `Bearer ${access_token}`,
    "Cache-Control": "no-cache",
  };

  try {
    const response = await axios.get(
      `/api/webhooks/`,
      { headers: myHeaders }
    );

    console.log(response.data);
    
  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

};

export default getListOfWebhooks;