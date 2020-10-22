import axios from "axios";
import config from "~/config";


export const fetchFruitsAnalytics = () => async (dispatch) => {
	dispatch({
		type: "FETCH_FRUITS_ANALYTICS_PROGRESS",
	});
	try {
		const response = await axios({
			url: `${config.apiBaseV1}/analytics/fruits`,
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const responseBody = await response.data;
		dispatch({
			type: "FETCH_FRUITS_ANALYTICS_SUCCESS",
			payload: responseBody,
		});
	} catch (error) {
		dispatch({
			type: "FETCH_FRUITS_ANALYTICS_FAILED",
			payload: error.response.data || "An unknown error has occured.",
		});
	}
};