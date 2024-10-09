import axios from 'axios';
import getAccessToken from './getAccessToken';
import showLuluErrors from './showLuluErrors';

const getPrintJobCosts = async (id) => {
	const access_token = await getAccessToken();

	const myHeaders = {
		"Authorization": `Bearer ${access_token}`,
		"Cache-Control": "no-cache",
	};

	try {
		const response = await axios.get(
      `/api/print-jobs/${id}/costs/`,
      { headers: myHeaders }
		);

    console.log(response.data);

	} catch (errorData) {
		console.log(showLuluErrors(errorData));
	}
};

export default getPrintJobCosts;