import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const createPrintJob = async () => {
  
  const { apiBaseURL, myHeaders } = await getApiConfig();

  const requestBody = {
    "contact_email": "test@test.com",
    "external_id": "demo-time",
    "line_items": [
      {
        "external_id": "item-reference-1",
        "printable_normalization": {
          "cover": {
            "source_url": "https://www.dropbox.com/s/7bv6mg2tj0h3l0r/lulu_trade_perfect_template.pdf?dl=1&raw=1"
          },
          "interior": {
            "source_url": "https://www.dropbox.com/s/r20orb8umqjzav9/lulu_trade_interior_template-32.pdf?dl=1&raw=1"
          },
          "pod_package_id": "0600X0900BWSTDPB060UW444MXX"
        },
        "quantity": 30,
        "title": "My Book"
      }
    ],
    "production_delay": 120,
    "shipping_address": {
      // "city": "Pensacola",
      // "country_code": "US",
      // "name": "Hans Dampf",
      // "phone_number": "844-212-0689",
      // "postcode": "32503",
      // "state_code": "FL",
      // "street1": "103 Oleander Dr"

      "city": "Lübeck",
      "country_code": "GB",
      "name": "Hans Dampf",
      "phone_number": "844-212-0689",
      "postcode": "PO1 3AX",
      "state_code": "",
      "street1": "Holstenstr. 48"
    },
    "shipping_level": "MAIL"
  }; // requestBody

  try {
    const response = await axios.post(
      `${apiBaseURL}print-jobs/`,
      requestBody,
      { headers: myHeaders }
    );
    
    console.log(response.data);

  } catch (errorData) {
    console.error(showLuluErrors(errorData));
  }
};

export default createPrintJob;
