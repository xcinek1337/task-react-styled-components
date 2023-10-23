import styled from 'styled-components';

const CheckboxLabel = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin-bottom: 15px;

`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	visibility: hidden;
`;

const CustomCheckbox = styled.div`
	position: relative;
	height: 45px;
	width: 45px;
	background: #e0e0e0;
	border-radius: 50%;
	box-shadow: rgb(190, 190, 190) -5px 4px 7px, rgb(255, 255, 255) 2px -2px 21px;
	cursor: pointer;

	${HiddenCheckbox}:checked + & {
		box-shadow: rgb(190, 190, 190) -5px 4px 7px inset, rgb(255, 255, 255) 2px -2px 1px inset;
		background: #e0e0e0;
	}

	&::after {
		content: '';
		position: absolute;
		display: block;
		width: 15px;
		height: 15px;
		border: 2px solid #8bc6e5;
		background: #e0e0e0;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	${HiddenCheckbox}:checked + &::after {
		background: #549ec5;
		border: none;
	}
`;
export { CheckboxLabel, CustomCheckbox, HiddenCheckbox };
