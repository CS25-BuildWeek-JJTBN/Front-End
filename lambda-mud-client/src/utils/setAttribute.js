import { axiosWithAuth } from './axiosWithAuth';

export default function setAttribute(key, value, dispatch) {
	dispatch({ type: 'UPDATE_DATA_BY_FIELD', payload: { key, value } });

	axiosWithAuth()
		.post('/adv/player-update', { [key]: value })
		.then(res => {
			// console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
}
