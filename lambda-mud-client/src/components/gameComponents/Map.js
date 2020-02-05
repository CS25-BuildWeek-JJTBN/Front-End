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
			{mapData && mapData.map((row, index) => <MapRow row={row} key={index} />)}
			{isLoading && <Loading />}
			<div className='error-msg'>{error_msg}</div>
		</MapWrapper>
	);
}

const MapWrapper = styled.div`
	padding: 5.5rem 1rem 1rem;

	// overflow: hidden;

	// &::-webkit-scrollbar {
	// 	display: none;
	// }

	// -ms-overflow-style: none;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.error-msg {
		color: #bb1333;
	}
`;
