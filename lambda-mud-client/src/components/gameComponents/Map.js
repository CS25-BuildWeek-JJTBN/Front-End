import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

import Loading from '../Loading';

export default function Map() {
	const {
		data: { isLoading, error_msg },
	} = useDataContext();

	useEffect(() => {
		axiosWithAuth()
			.get('/adv/rooms/')
			.then(res => {
				console.log(JSON.parse(res.data.rooms));
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<MapWrapper>
			<h3>Map</h3>
			{isLoading && <Loading />}
			<div>{error_msg}</div>
		</MapWrapper>
	);
}

const MapWrapper = styled.div`
	background-color: lightblue;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
