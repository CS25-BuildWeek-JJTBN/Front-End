import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function MapCell({ cell }) {
	const {
		data: { currentRoom },
	} = useDataContext();

	const isCurrentRoom = currentRoom === cell.id ? true : false;

	return (
		<StyledWrapper>
			{cell.id && (
				<StyledCell
					n={cell.n_to}
					s={cell.s_to}
					e={cell.e_to}
					w={cell.w_to}
					isCurrentRoom={isCurrentRoom}>
					{/* {cell.id} */}
					<div className='pc-link pc-n'></div>
					<div className='pc-middle'>
						<div className='pc-link pc-w'></div>
						<div className='pc'>
							<div className='pc-top'>
								<div className='pc-screen'>{cell.id}</div>
							</div>
							<div className='pc-bottom'>
								<div className='pc-keyboard'>
									<div className='pc-key-row'>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
									</div>
									<div className='pc-key-row'>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
									</div>
									<div className='pc-key-row'>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
										<div className='pc-key'></div>
									</div>
								</div>
							</div>
						</div>
						<div className='pc-link pc-e'></div>
					</div>
					<div className='pc-link pc-s'></div>
				</StyledCell>
			)}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	width: 100%;
`;

const StyledCell = styled.div`
	width: 100%;
	height: 5.5rem;

	// background-color: ${props => (props.isCurrentRoom ? 'yellow' : 'none')};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	// border-top: 2px ${props => (props.n ? 'none' : 'solid')} black;
	// border-right: 2px ${props => (props.e ? 'none' : 'solid')} black;
	// border-bottom: 2px ${props => (props.s ? 'none' : 'solid')} black;
	// border-left: 2px ${props => (props.w ? 'none' : 'solid')} black;

	.pc-link {
		width: 0.5rem;
		height: 0.5rem;
		flex-grow: 1;
	}

	.pc-n {
		background-color: ${props => (props.n ? 'black' : 'none')};
	}

	.pc-s {
		background-color: ${props => (props.s ? 'black' : 'none')};
	}

	.pc-e {
		background-color: ${props => (props.e ? 'black' : 'none')};
	}

	.pc-w {
		background-color: ${props => (props.w ? 'black' : 'none')};
	}

	.pc-middle {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.pc {
		display: flex;
		flex-direction: column;
		
		.pc-top, .pc-bottom {
			background-color: silver;
			width: 5.8rem;
			height: 2rem;

			box-shadow: 0 0 ${props => (props.isCurrentRoom ? '3' : '1')}rem ${props =>
	props.isCurrentRoom ? 'yellow' : 'black'};

			display: flex;
			justify-content: center;
			align-items: center;
			justify-content: center;
			align-items: center;
		}
		
		.pc-top {
			border-radius: 0.5rem 0.5rem 0 0;
			border-bottom: 1px solid gray;
			
			.pc-screen {
				background-color: black;
				width: 5.2rem;
				height: 1.4rem;
				color: #00ff41;
				font-size: 0.5rem;
				
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.pc-bottom {
			border-radius: 0 0 0.5rem 0.5rem;
			border-top: 1px solid gray;

			.pc-keyboard {
				display: flex;
				flex-direction: column;

				.pc-key-row {
					display: flex;
					
					.pc-key {
						width: 0.5rem;
						height: 0.5rem;
						border: 1px solid gray;
					}
				}
			}
		}
	}
`;
