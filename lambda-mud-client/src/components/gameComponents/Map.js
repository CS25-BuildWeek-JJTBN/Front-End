import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

import Loading from '../Loading';
import MapRow from './MapRow';

export default function Map() {
	const [mapData, setMapData] = useState();

	const {
		data: { isLoading, error_msg },
	} = useDataContext();

	useEffect(() => {
		axiosWithAuth()
			.get('/adv/map/')
			.then(res => {
				// console.log(res.data.map);
				setMapData(res.data.map);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<MapWrapper>
			{isLoading && <Loading />}
			{mapData && mapData.map((row, index) => <MapRow row={row} key={index} />)}
			<div>{error_msg}</div>
		</MapWrapper>
	);
}

const MapWrapper = styled.div`
	background-color: lightblue;
	max-height: 100%;

	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
