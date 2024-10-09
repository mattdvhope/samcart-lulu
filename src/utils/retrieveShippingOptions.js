import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const retrieveShippingOptions = async () => {

  const { apiBaseURL, myHeaders } = await getApiConfig();

  const requestBody = {
    "currency": "USD",
    "line_items": [
      {
        "page_count": 32,
        "pod_package_id": "0600X0900BWSTDPB060UW444MXX",
        "quantity": 1
      },
      {
        "page_count": 324,
        "pod_package_id": "0850X1100FCSTDPB060UW444MXX",
        "quantity": 2
      }
    ],
    "shipping_address": {
      "city": "Washington",
      "country": "US",
      "postcode": "20540",
      "state_code": "DC",
      "street1": "101 Independence Ave SE"
    }
  }; // requestBody

  try {
    const response = await axios.post(
      `${apiBaseURL}shipping-options/`,
      requestBody,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }

};

export default retrieveShippingOptions;
