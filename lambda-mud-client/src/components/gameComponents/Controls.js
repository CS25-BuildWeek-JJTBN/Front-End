import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';

// import ControlsMiddle from './ControlsMiddle';
// import ControlsButtons from './ControlsButtons';

export default function Controls() {
	const {
		data: { chatOpen },
		dispatch,
	} = useDataContext();

	const handleMove = direction => {
		dispatch({ type: 'MOVE_START' });

		axiosWithAuth()
			.post('/adv/move/', { direction })
			.then(res => {
				// console.log(res.data.room_items);
				if (!res.data.error_msg) {
					dispatch({
						type: 'UPDATE_DATA_BY_FIELD',
						payload: { key: 'visited_rooms', value: res.data.rooms },
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
						room_items: res.data.room_items,
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
			switch (keyCode) {
				case 37:
					handleMove('w');
					break;
				case 38:
					handleMove('n');
					break;
				case 39:
					handleMove('e');
					break;
				case 40:
					handleMove('s');
					break;
				default:
					break;
			}

			if (!chatOpen) {
				switch (key) {
					case 'n':
						handleMove('n');
						break;
					case 's':
						handleMove('s');
						break;
					case 'e':
						handleMove('e');
						break;
					case 'w':
						handleMove('w');
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
				<button id='button_n' onClick={() => handleMove('n')}>
					N
				</button>
				<div className='nav-buttons-row'>
					<button id='button_w' onClick={() => handleMove('w')}>
						W
					</button>
					<button className='button-cover'></button>
					<button id='button_e' onClick={() => handleMove('e')}>
						E
					</button>
				</div>
				<button id='button_s' onClick={() => handleMove('s')}>
					S
				</button>
			</ControlsNav>
			{/* <ControlsMiddle /> */}
			{/* <ControlsButtons /> */}
		</ControlsWrapper>
	);
}

const ControlsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	// width: 30rem;
	width: 12rem;
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
