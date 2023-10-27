import styled from 'styled-components';

// --main-color: #8bc6e5;
//               vvvv
//     color: inherit;

const BtnLabel = styled.button`
	position: relative;
	min-width: 190px;

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
	&:active {
		box-shadow: rgb(190, 190, 190) -5px 4px 7px, rgb(255, 255, 255) 2px -2px 21px;
	}
	&:hover {
		background-color: lightyellow;
	}
`;

const BtnOption = styled.button`
	position: relative;
	height: 100%;
	min-width: 190px;

	padding: 10px 20px;

	text-align: left;
	font-size: 16px;
	color: #8bc6e5;
	background-color: #e0e0e0;
	box-shadow: rgb(190, 190, 190) -5px 4px 7px, rgb(255, 255, 255) 2px -2px 21px;
	border-radius: 15px;
	border: transparent;
	cursor: pointer;
	z-index: 2002;

	&:hover {
		background-color: lightyellow;
	}
`;

// dropdown styles
const StyleDropdown = styled.div`
	position: relative;
`;
const StyleUlList = styled.ul`
	position: absolute;

	background-color: none;
	list-style-type: none;
	width: 115px;
`;

const StyleLiItem = styled.li``;

export { BtnLabel, BtnOption, StyleDropdown, StyleUlList, StyleLiItem };
