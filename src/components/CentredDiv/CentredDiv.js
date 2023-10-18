import React from 'react';
import { StyledCentredDiv, StyledBody } from './CentredDiv.styled';

const CentredDiv = props => {
	return (
		<StyledBody>
			<StyledCentredDiv>{props.children}</StyledCentredDiv>
		</StyledBody>
	);
};
export { CentredDiv };
