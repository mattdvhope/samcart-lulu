import axios from 'axios';
import { getApiConfig } from './apiConfig';
import showLuluErrors from './showLuluErrors';

const getPrintJobCosts = async (id) => {

  const { apiBaseURL, myHeaders } = await getApiConfig();

	try {
		const response = await axios.get(
      `${apiBaseURL}print-jobs/${id}/costs/`,
      { headers: myHeaders }
		);

    console.log(response.data);

	} catch (errorData) {
		console.log(showLuluErrors(errorData));
	}
};

export default getPrintJobCosts;