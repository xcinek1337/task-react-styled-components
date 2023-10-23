import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 100px;
	height: 100px;
	background-color: grey;
`;
const StyledImg = styled.img.attrs(() => ({
	src: './check.svg',
}))`
	width: 100px;
`;

export { StyledDiv, StyledImg };
