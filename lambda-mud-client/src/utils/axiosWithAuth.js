import axios from 'axios';
import { baseURL } from './baseURL';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL,
		headers: {
			Authorization: `Token ${token}`,
		},
	});
};
