const initialState = {
	fetching: false,
	data: [],
	error: null,
};

export default function (state = initialState, action = {}) {
	switch (action.type) {
		case "FETCH_FRUITS_ANALYTICS_PROGRESS":
			return {
				...state,
				fetching: true,
				error: null,
			};
		case "FETCH_FRUITS_ANALYTICS_SUCCESS":
			return {
				...state,
				fetching: false,
				data: action.payload,
				error: null,
			};
		case "FETCH_FRUITS_ANALYTICS_FAILED":
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		default:
			return {
				...state,
			};
	}
}