import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function Controls() {
	const { dispatch } = useDataContext();

	const handleSend = direction => {
		dispatch({ type: 'MOVE_START' });

		axiosWithAuth()
			.post('/adv/move/', { direction })
			.then(res => {
				// console.log(res.data);
				dispatch({
					type: 'MOVE_SUCCESS',
					payload: {
						name: res.data.name,
						title: res.data.title,
						description: res.data.description,
						players: res.data.players,
						error_msg: res.data.error_msg,
					},
				});
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'MOVE_FAILURE' });
			});
	};

	useEffect(() => {
		const handleKeyUp = ({ key }) => {
			switch (key) {
				case 'n':
					handleSend('n');
					break;
				case 's':
					handleSend('s');
					break;
				case 'e':
					handleSend('e');
					break;
				case 'w':
					handleSend('w');
					break;
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => window.removeEventListener('keyup', handleKeyUp);
	}, []);

	return (
		<ControlsWrapper>
			<ControlsNav>
				<button id='button_n' onClick={() => handleSend('n')}>
					N
				</button>
				<div className='nav-buttons-row'>
					<button id='button_w' onClick={() => handleSend('w')}>
						W
					</button>
					<button className='button-cover'></button>
					<button id='button_e' onClick={() => handleSend('e')}>
						E
					</button>
				</div>
				<button id='button_s' onClick={() => handleSend('s')}>
					S
				</button>
			</ControlsNav>
			<ControlsMiddle>
				<FlatButton>SELECT</FlatButton>
				<FlatButton>START</FlatButton>
			</ControlsMiddle>
			<ControlsButtons>
				<RoundButtonXY>X</RoundButtonXY>
				<div className='round-buttons-row'>
					<RoundButtonXY>Y</RoundButtonXY>
					<RoundButtonAB>A</RoundButtonAB>
				</div>
				<RoundButtonAB>B</RoundButtonAB>
			</ControlsButtons>
		</ControlsWrapper>
	);
}

const ControlsWrapper = styled.div`
	position: relative;
	left: 50%;
	transform: translate(-50%);
	bottom: 10.6rem;

	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 30rem;
`;

const ControlsNav = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.nav-buttons-row {
		display: flex;
		align-items: center;
	}

	button {
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		background-color: gray;
		color: silver;
		padding: 0;
		outline: none;
		cursor: pointer;
		letter-spacing: 0;

		&:hover {
			color: white;
			box-shadow: 0 0 1rem white;
		}
	}

	#button_n {
		border-radius: 0.4rem 0.4rem 0 0;
	}

	#button_e {
		border-radius: 0 0.4rem 0.4rem 0;
	}

	#button_s {
		border-radius: 0 0 0.4rem 0.4rem;
	}

	#button_w {
		border-radius: 0.4rem 0 0 0.4rem;
	}

	.button-cover {
		z-index: 999;
		&:hover {
			box-shadow: none;
		}
	}
`;

const ControlsMiddle = styled.div`
	display: flex;
	align-items: center;
`;

const FlatButton = styled.button`
	background-color: gray;
	color: silver;
	border: none;
	font-size: 0.5rem;
	height: 1.25rem;
	width: 4.5rem;
	border-radius: 0.6rem;
	transform: rotate(-35deg);
	letter-spacing: 0;
	cursor: pointer;

	&:hover {
		color: white;
		box-shadow: 0 0 1rem white;
	}
`;

const ControlsButtons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 9rem;

	.round-buttons-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`;

const RoundButtonXY = styled.button`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 1.6rem;
	border: none;
	letter-spacing: 0;
	text-align: center;
	cursor: pointer;

	background-color: #baa9cb;
	color: #7d35d5;

	&:hover {
		box-shadow: 0 0 1rem white;
		color: white;
	}
`;

const RoundButtonAB = styled(RoundButtonXY)`
	background-color: #7d35d5;
	color: #baa9cb;
`;
