import React, { useState } from 'react';

import ResetStyle from '../assets/img/resetCss/ResetStyle';
import { CentredDiv as FormArea } from './components/CentredDiv/CentredDiv';

import Form from './components/Form.1stage/Form';

const FormApp = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNext = () => {
		console.log(`hi`);
		setCurrentStep(currentStep + 1);
	};

	const handlePrev = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<>
			<ResetStyle />
			<FormArea>
				{currentStep === 1 && <Form onClick={handleNext} />}
				{currentStep === 2 && (
					<div>
						<p>second stage</p>
						<div>
							<button onClick={handlePrev}>Previous</button>
							<button onClick={handleNext}>Next</button>
						</div>
					</div>
				)}
			</FormArea>
		</>
	);
};

export default FormApp;
