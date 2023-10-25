import React, { useState } from 'react';

import ResetStyle from '../assets/img/resetCss/ResetStyle';
import { CentredDiv as FormArea } from './components/CentredDiv/CentredDiv';

import Form from './components/Form.1stage/Form';
import Form2 from './components/Form.2stage/Form2';
import Form3 from './components/Form.3stage/Form3';
import LoadingBar from './components/LoadingBar/LoadingBar';

const formStates = [Form, Form2, Form3];
export const FormHandling = React.createContext();

const FormApp = () => {
	const [currentStage, setCurrentStage] = useState(1);
	const Form = formStates[currentStage - 1];

	const handleNext = (txt) => {
		setCurrentStage(currentStage + 1);	
		console.log(txt);
	};

	const handlePrev = () => {
		setCurrentStage(currentStage - 1);
	};

	return (
		<>
			<FormHandling.Provider value={{ handlePrev, handleNext, currentStage }}>
				<ResetStyle />
				<FormArea>
					<LoadingBar />
					<Form />
				</FormArea>
			</FormHandling.Provider>
		</>
	);
};

export default FormApp;