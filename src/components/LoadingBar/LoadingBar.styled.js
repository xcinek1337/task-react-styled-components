import styled from 'styled-components';

const ProgressBar = styled.div`
	position: absolute;
	left: 10%;
	top: 4%;
	height: 13px;
	background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
	border-radius: 12px;
	width: 10%;
	transition: width 0.7s ease;
`;
export { ProgressBar };
