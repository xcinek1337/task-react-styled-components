import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

`;

const StyledImg = styled.img.attrs(() => ({
	src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png',
}))`
	width: 200px;
	margin-top: 50px;
`;

const StyledH2 = styled.h2`
	text-align: center;
	color: #8bc6e5;
`
export { StyledDiv, StyledImg, StyledH2 };
