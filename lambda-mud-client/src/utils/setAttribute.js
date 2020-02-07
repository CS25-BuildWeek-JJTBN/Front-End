import { axiosWithAuth } from './axiosWithAuth';

export default function setAttribute(attribute, value, dispatch) {
	dispatch({ type: 'SET_ATTRIBUTE', payload: { attribute, value } });

	axiosWithAuth()
		.post('/adv/player-update', { [attribute]: value })
		.then(res => {
			// console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
}
