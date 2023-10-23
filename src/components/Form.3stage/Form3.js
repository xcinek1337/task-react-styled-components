import React from 'react';

import { StyledDiv, StyledImg } from './Form3.styled';

const Form3 = () => {
	const clearStorage = () => {
		localStorage.clear();
		location.reload();
	};
	return (
		<>
			<StyledDiv>
				<StyledImg></StyledImg>
			</StyledDiv>

			<button onClick={clearStorage}>DONE</button>
		</>
	);
};

export default Form3;
