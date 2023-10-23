import styled from 'styled-components';

const CheckboxLabel = styled.label`
	cursor: pointer;
	text-indent: -9999px;
	width: 100px;
	height: 40px;
	background: #e0e0e0;
	display: block;
	border-radius: 100px;
	position: relative;
	transition: 0.3s;
	box-shadow: rgb(190, 190, 190) -8px 6px 8px, rgb(255, 255, 255) 9px -9px 32px;

	&::after {
		content: '';
		position: absolute;
		top: 5px;
		left: 5px;
		width: 30px;
		height: 30px;
		background-color: ${props => (props.checked ? '#e0e0e0' : '#8bc6e4')};
		border-radius: 90px;
		transition: 0.3s;
		z-index: 56;
	}
`;

const CheckboxInput = styled.input`
	display: none;

	&:checked + ${CheckboxLabel} {
		background: #8bc6e4;

		&::after {
			left: calc(100% - 5px);
			transform: translateX(-100%);
		}
	}
`;
export { CheckboxInput, CheckboxLabel };
