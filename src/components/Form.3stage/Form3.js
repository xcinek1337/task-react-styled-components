import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';

import { Button } from '../Form.2stage/Form2.styled';

import { StyledDiv, StyledImg } from './Form3.styled';

const Form3 = () => {
	const config = {
		angle: 90,
		spread: 360,
		startVelocity: 40,
		elementCount: 70,
		decay: 0.95,
	};

	const [activState, setActivState] = useState(false);

	setTimeout(() => {
		setActivState(true);
	}, 200);

	const clearStorage = () => {
		localStorage.clear();
		location.reload();
	};



	return (
		<>
			<Confetti active={activState} config={config} />
			<StyledDiv>
				<StyledImg></StyledImg>
			</StyledDiv>

			<Button style={{position:'absolute',top:'70%'}} onClick={clearStorage}>DONE</Button>
		</>
	);
};

export default Form3;
