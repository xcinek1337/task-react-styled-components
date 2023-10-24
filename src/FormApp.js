import React, { useState } from 'react';

import ResetStyle from '../assets/img/resetCss/ResetStyle';
import { CentredDiv as FormArea } from './components/CentredDiv/CentredDiv';

import Form from './components/Form.1stage/Form';
import Form2 from './components/Form.2stage/Form2';
import Form3 from './components/Form.3stage/Form3';
const formStates = [Form, Form2, Form3];
import LoadingBar from './components/LoadingBar/LoadingBar';

const FormApp = () => {
	const [currentStage, setCurrentStage] = useState(1);
	const Form = formStates[currentStage - 1];

	const handleNext = () => {
		setCurrentStage(currentStage + 1);
	};

	const handlePrev = () => {
		setCurrentStage(currentStage - 1);
	};

	return (
		<>
			<ResetStyle />
			<FormArea>
				<LoadingBar currentStage={currentStage} />
				<Form prevStage={handlePrev} nextStage={handleNext} />
			</FormArea>
		</>
	);
};

export default FormApp;