import styled from 'styled-components';

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 90%;
	// max-width: 30rem;
	margin: auto;
	margin-top: 10rem;

	h2 {
		text-align: center;
		// padding: 3rem;
		color: #bb1333;
		font-size: 3rem;
		padding-left: 1.5rem;
	}

	form {
		background-color: #f0f4f7;
		border: solid 4px #2f2b4a;
		margin: 1.5rem;
        padding: 1rem;

		label {
			color: #bb1333;
			font-size: 1rem;
		}

		input {
			margin: 1.2rem;
			border: none;
			background-color: #f0f4f7;
			outline: none;
			line-height: inherit;
		}

		display: flex;
		flex-direction: column;
	}

	button {
		border: solid 4px #2f2b4a;
		width: 20rem;
		height: 3rem;
		margin: 0 auto;
	}

	.error {
		color: white;
		background-color: red;
		text-align: center;
		margin: 1rem 0;
	}
`;

export const DashboardPanel = styled.div`
	width: 23%;
	min-width: 30rem;
	max-width: 65h;
	color: white;
	margin-bottom: 1rem;

	@media screen and (max-width: 620px) {
		width: 90%;
	}

	.span-normal {
		font-weight: normal;
	}

	.text-box {
		// background-color: white;
		background-color: #0d0208;
		// color: black;
		color: #00ff41;

		margin-top: 1rem;
		border-radius: 1rem;
		padding: 1rem;

		overflow-wrap: break-word;

		box-shadow: inset 0.3rem 0.2rem darkred;
	}
`;

export const ProfilePanelWrapper = styled.div`
	display: flex;
	flex-direction: column;

	// width: 30%;
	min-width: 30rem;
	margin: 2rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;

	// background-color: rgba(255, 255, 255, 0.5);
	// box-shadow: 0.3rem 0.2rem rgba(0, 0, 0, 0.25);
	// border-radius: 1rem;

	background-color: white;
	border: 0.5rem solid black;

	h3 {
		margin-bottom: 2rem;
		text-transform: uppercase;
	}

	@media screen and (max-width: 700px) {
		width: 90%;
	}

	.avatar-background {
		// background-color: lightblue;
		// border-radius: 1rem;
		// box-shadow: 0.3rem 0.2rem lightblue;
	}

	.color-row {
		margin: 0.5rem 0;

		// border: 1px solid blue;

		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;

		h4 {
			margin: 1rem 0 0 0;
			// margin-bottom: 0;
		}

		.colors {
			display: flex;
			margin-top: 1rem;
		}
	}

	.color-row-first {
		margin-top: 2rem;
	}

	.check-boxes {
		// border: 1px solid red;
		align-self: flex-end;
		margin-top: 1rem;

		display: flex;
		align-items: center;
	}
`;

export const Checkbox = styled.span`
	display: inline-block;
	background-color: ${props => props.trueValue && 'silver'};
	width: 2rem;
	height: 2rem;
	border-radius: 0.3rem;
	margin: 0 1rem;
	cursor: pointer;
	border: 2px solid silver;
`;

// export const LetterSelect = styled.div`
//         border: solid 4px #2f2b4a;
//         background-color: #F0F4F7;
//         height: 28rem;
//         width: 55rem;
//         display: flex;
//         flex-wrap: wrap;

//         h2{
//             display: flex;
//             padding: 1rem;
//             color: #bb1333;
//             cursor: pointer;
//             &:hover {
//                 background-color: #9d96ca;
//                 color: white;
//                 border-radius: 20%;
//             }
//         }
// `;
export const Item = styled.div`
	cursor: pointer;
	&:hover {
		background-color: #00ff41;
		color: #0d0208;
	}
`;
