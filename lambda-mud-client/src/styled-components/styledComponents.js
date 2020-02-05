import styled from 'styled-components';

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 90%;
	max-width: 30rem;
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
`;

export const DashboardPanel = styled.div`
	width: 30%;
	min-width: 30rem;
	color: white;

	.span-normal {
		font-weight: normal;
	}

	.text-box{
		background-color: white;
		color: black;

		margin-top: 1rem;
		border-radius: 1rem;
		padding: 1rem;

		overflow-wrap: break-word;

		box-shadow: inset 0.3rem 0.2rem darkred;
	}
`;
