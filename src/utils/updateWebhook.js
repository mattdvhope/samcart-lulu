import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const updateWebhook = async (id) => {
  
  const { apiBaseURL, myHeaders } = await getApiConfig();

  const requestBody = {
    "url": process.env.GATSBY_URL_THANKYOU
  };

  try {
    const response = await axios.patch(
      `${apiBaseURL}webhooks/${id}`,
      requestBody,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

};

export default updateWebhook;