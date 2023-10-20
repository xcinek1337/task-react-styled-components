import styled from 'styled-components';

// --main-color: #8bc6e5;
//               vvvv
//     color: inherit;

const BtnLabel = styled.button`
	position: relative;

	padding: 10px 40px 10px 25px;
	font-size: 18px;
	color: #8bc6e5;
	background-color: #e0e0e0;
	border: transparent;
	border-radius: 15px;
	box-shadow: rgb(190, 190, 190) -5px 4px 7px, rgb(255, 255, 255) 2px -2px 21px;
	cursor: pointer;

	&::after {
		content: ' > ';
		position: absolute;
		margin-left: 10px;
		transform: rotate(90deg);
		transition: transform 0.3s;
	}
	&:focus {
		box-shadow: rgb(190, 190, 190) -5px 4px 7px inset, rgb(255, 255, 255) 2px -2px 21px inset;

		&::after {
			transform: rotate(180deg);
		}
	}
`;

const BtnOption = styled.button`
	/* STYLIZACJA */
	background-color: red;
`;

// dropdown styles
const StyleDropdown = styled.div`
	position: relative;
`;
const StyleUlList = styled.ul`
	position: absolute;

	list-style-type: none;
	margin: 5px 0;
	padding: 0;

	border: 1px solid grey;
	width: 150px;
`;

export { BtnLabel, BtnOption, StyleDropdown, StyleUlList };
