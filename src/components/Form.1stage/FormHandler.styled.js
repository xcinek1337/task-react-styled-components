import styled from 'styled-components';

const FormContainer = styled.div`
	--main-color: #8bc6e5;
`;
const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 1.25rem;
	color: var(--main-color);
	font-weight: 700;
	position: relative;
	top: 0.5rem;
	margin: 0 0 20px 7px;
	padding: 0 3px;
	width: fit-content;
`;

const FormInput = styled.input`
	color: rgb(75, 75, 75);
	padding: 10px 20px;
	border-radius: 15px;
	border: none;
	margin-top: 20px;
	background: transparent;
	box-shadow: inset -4px 2px 1px #bebebe, inset 3px -1px 2px #ffffff;

	&:focus {
		outline: none;
	}

	&.form__input--error {
		outline: 1px solid tomato;
	}
`;
const FormSubmit = styled.button.attrs(props => ({
	type: props.type || 'submit',
}))`
	font-size: 18px;
	color: #8bc6e5;
	position: absolute;
	bottom: 12%;
	right: 19%;
	padding: 12px 24px;
	border: none;
	background: transparent;
	border-radius: 50px;
	box-shadow: -5px 4px 7px #bebebe, 2px -2px 21px #ffffff;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: lightgray;
	}
	&:active {
		box-shadow: inset -5px 4px 7px #bebebe, inset 2px -2px 21px #ffffff;
	}
`;

export { FormContainer, FormLabel, FormInput, FormSubmit };
