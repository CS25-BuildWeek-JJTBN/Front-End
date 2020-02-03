import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function Controls() {
	const { dispatch } = useDataContext();

	const handleClick = direction => {
		// console.log(direction);
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

	return (
		<ControlsWrapper>
			<ControlsNav>
				<button id='button_n' onClick={() => handleClick('n')}>
					N
				</button>
				<ControlsNavRow>
					<button id='button_w' onClick={() => handleClick('w')}>
						W
					</button>
					<button></button>
					<button id='button_e' onClick={() => handleClick('e')}>
						E
					</button>
				</ControlsNavRow>
				<button id='button_s' onClick={() => handleClick('s')}>
					S
				</button>
			</ControlsNav>
			<ControlsMiddle>
				<FlatButton>BLAH</FlatButton>
				<FlatButton>BLAH</FlatButton>
			</ControlsMiddle>
			<ControlsButtons>BLEH</ControlsButtons>
		</ControlsWrapper>
	);
}

const ControlsWrapper = styled.div`
	align-self: center;
	display: flex;
	justify-content: space-around;
	width: 30rem;
`;

const ControlsNav = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

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
`;

const ControlsNavRow = styled.div`
	display: flex;
	align-items: center;
`;

const ControlsMiddle = styled.div`
	display: flex;
	align-items: center;
`;

const ControlsButtons = styled.div`
	border: 2px solid orange;
`;

const FlatButton = styled.button`
	background-color: gray;
	color: silver;
	border: none;
	font-size: 0.5rem;
	height: 1.25rem;
	width: 3.75rem;
	border-radius: 0.6rem;
	transform: rotate(-35deg);
	letter-spacing: 0;
`;

const RoundButton = styled.button`
	background-color: pink;
`;
