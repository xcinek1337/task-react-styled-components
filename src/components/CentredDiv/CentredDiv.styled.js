import styled from 'styled-components';

const StyledBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #e1e1e1;
`;
const StyledCentredDiv = styled.div`
	width: 500px;
	height: 600px;
	border-radius: 50px;
	background: #e0e0e0;
	box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;

	/* form inside */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export { StyledBody, StyledCentredDiv };
