import styled from 'styled-components';

const DivRowFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;

	&.first {
		position: absolute;
		top: 20%;
	}

	&.second {
		position: absolute;
		top: 40%;
	}

	&.third {
		position: absolute;
		top: 60%;
	}
`;

const LabelStyled = styled.label`
	font-size: 1.25rem;
	font-weight: 700;
	color: #8bc6e4;
`;

const ButtonsDiv = styled.div`
	position: absolute;
	bottom: 12%;
	width: 100%;

	display: flex;
	justify-content: space-around;
`;
const Button = styled.button`
	font-size: 18px;
	color: #8bc6e5;
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

const StyledParagraph = styled.p`
	position: absolute;
	font-size: 20px;
	top: 10%;
	color: tomato;
`;
export { Button, ButtonsDiv, DivRowFlex, LabelStyled, StyledParagraph };
