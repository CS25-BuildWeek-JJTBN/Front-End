import styled from 'styled-components';

export const StyledForm = styled.div`
	display: flex-wrap;
	width: 40%;
	margin: auto;
	margin-top: 10rem;

	h2 {
		text-align: center;
		padding: 5rem;
		color: #bb1333;
		font-size: 3rem;
	}

	form {
		background-color: #f0f4f7;
		border: solid 4px #2f2b4a;
		margin: 1.5rem;
		padding: 1rem;
		label {
			color: #bb1333;
		}
		input {
			margin: 1.2rem;
			border: none;
			background-color: #f0f4f7;
		}
	}

	button {
		border: solid 4px #2f2b4a;
		width: 20rem;
	}
`;

export const DashboardPanel = styled.div`
	max-width: 30rem;
	color: white;

	.span-normal {
		font-weight: normal;
	}

	div {
		background-color: white;
		color: black;

		margin-top: 1rem;
		border-radius: 1rem;
		padding: 1rem;
	}
`;
