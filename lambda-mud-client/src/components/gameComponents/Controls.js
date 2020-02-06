import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

import { visitedRoomsObjToArray } from '../../utils/visitedRoomsFunctions';

export default function Controls() {
	const {
		data: { chatOpen },
		dispatch,
	} = useDataContext();

	const handleSend = direction => {
		dispatch({ type: 'MOVE_START' });

		axiosWithAuth()
			.post('/adv/move/', { direction })
			.then(res => {
				console.log(res.data.room_items);
				if (!res.data.error_msg) {
					dispatch({
						type: 'UPDATE_VISITED_ROOMS',
						payload: {
							visitedRooms: visitedRoomsObjToArray(res.data.rooms),
						},
					});
				}

				dispatch({
					type: 'MOVE_SUCCESS',
					payload: {
						name: res.data.name,
						title: res.data.title,
						description: res.data.description,
						players: res.data.players,
						room: res.data.id,
						roomItems: res.data.room_items,
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
		const handleKeyDown = ({ key, keyCode }) => {
			if (!chatOpen) {
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
					default:
						break;
				}

				switch (keyCode) {
					case 37:
						handleSend('w');
						break;
					case 38:
						handleSend('n');
						break;
					case 39:
						handleSend('e');
						break;
					case 40:
						handleSend('s');
						break;
					default:
						return;
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [chatOpen]);

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
			{/* <ControlsMiddle>
				<FlatButton>SELECT</FlatButton>
				<FlatButton>START</FlatButton>
			</ControlsMiddle> */}
			<ControlsButtons>
				{/* <RoundButtonXY>X</RoundButtonXY> */}
				<div className='round-buttons-row'>
					{/* <RoundButtonXY>Y</RoundButtonXY> */}
					<RoundButtonAB>A</RoundButtonAB>
				</div>
				<RoundButtonAB>B</RoundButtonAB>
			</ControlsButtons>
		</ControlsWrapper>
	);
}

const ControlsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 30rem;
	height: 12rem;

	position: relative;
	top: 3rem;

	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 6rem;

	box-shadow: 0.3rem 0.2rem rgba(0, 0, 0, 0.25),
		inset 0.3rem 0.2rem rgba(255, 255, 255, 0.25);
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
		box-shadow: 0 0 1rem black, inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
			inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);

		&:hover {
			color: white;
			box-shadow: 0 0 1rem yellow,
				inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
				inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);
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
		box-shadow: none;
		z-index: 999;

		&:hover {
			box-shadow: none;
		}
	}
`;

// const ControlsMiddle = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

// const FlatButton = styled.button`
// 	background-color: gray;
// 	color: silver;
// 	border: none;
// 	font-size: 0.5rem;
// 	height: 1.25rem;
// 	width: 4.5rem;
// 	border-radius: 0.6rem;
// 	transform: rotate(-35deg);
// 	letter-spacing: 0;
// 	cursor: pointer;
// 	box-shadow: 0 0 1rem black, inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
// 		inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);

// 	&:hover {
// 		color: white;
// 		box-shadow: 0 0 1rem yellow,
// 			inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
// 			inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);
// 	}
// `;

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
	cursor: default;

	background-color: #baa9cb;
	color: #7d35d5;
	box-shadow: 0 0 1rem black, inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
		inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);

	&:hover {
		box-shadow: 0 0 1rem yellow,
			inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
			inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);
		color: white;
	}
`;

const RoundButtonAB = styled(RoundButtonXY)`
	background-color: #7d35d5;
	color: #baa9cb;
	cursor: pointer;
`;
