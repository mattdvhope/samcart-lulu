import axios from 'axios';
import getAccessToken from './getAccessToken'; // Import the new function

const calculatePrintCost = async () => {
  const access_token = await getAccessToken();

  const myHeaders = {
    'Authorization': `Bearer ${access_token}`,
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  };

  const requestBody = {
    "line_items": [
      {
        "page_count": 32,
        "pod_package_id": "0600X0900BWSTDPB060UW444MXX",
        "quantity": 20
      },
      {
        "page_count": 324,
        "pod_package_id": "0425X0687BWSTDPB060UW444GXX",
        "quantity": 200
      }
    ],
    "shipping_address": {
      "city": "Washington",
      "country_code": "US",
      "postcode": "20540",
      "state_code": "DC",
      "street1": "101 Independence Ave SE",
      "phone_number": "+1 206 555 0100"
    },
    "shipping_option": "EXPRESS"
  };
  
  try {
    const response = await axios.post(
      "/api/print-job-cost-calculations/",
      requestBody,
      { headers: myHeaders }
    );

    console.log(response.data);
    
  } catch (error) {
    console.error('Error:', error);
  }
};

export default calculatePrintCost;
