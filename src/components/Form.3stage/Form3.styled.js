import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 100px;
	height: 100px;
	background-color: transparent;
`;

const StyledImg = styled.img.attrs(() => ({
	src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png',
}))`
	width: 200px;
	transform: translate(-24%,-37%);
	margin: auto;
`;

export { StyledDiv, StyledImg };
