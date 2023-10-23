import React, { useState } from 'react';

import ResetStyle from '../assets/img/resetCss/ResetStyle';
import { CentredDiv as FormArea } from './components/CentredDiv/CentredDiv';

import Form from './components/Form.1stage/Form';
import Form2 from './components/Form.2stage/Form2';
import Form3 from './components/Form.3stage/Form3';
import LoadingBar from './components/LoadingBar/LoadingBar';

const FormApp = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNext = () => {
		setCurrentStep(currentStep + 1);
	};

	const handlePrev = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<>
			<ResetStyle />
			<FormArea>
			<LoadingBar progress={currentStep === 1 ? '10' : currentStep === 2 ? '44' : currentStep === 3 ? '78' : '0'} />
				{currentStep === 1 && <Form onClick={handleNext} />}
				{currentStep === 2 && <Form2 onClick={{ handlePrev, handleNext }} />}
				{currentStep === 3 && <Form3 />}
			</FormArea>
		</>
	);
};

export default FormApp;
