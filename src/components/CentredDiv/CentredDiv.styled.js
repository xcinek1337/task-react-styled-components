import styled from 'styled-components';

const StyledBody = styled.body`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #e0e0e0;
`;
const StyledCentredDiv = styled.div`
	width: 500px;
	height: 600px;

	border-radius: 50px;
	background-color: #e0e0e0;
	box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export { StyledBody, StyledCentredDiv };
