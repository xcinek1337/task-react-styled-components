import React, { useState } from 'react';

import ResetStyle from '../assets/img/resetCss/ResetStyle';
import { CentredDiv as FormArea } from './components/CentredDiv/CentredDiv';

import Form from './components/Form.1stage/Form';
import Form2 from './components/Form.2stage/Form2';
import Form3 from './components/Form.3stage/Form3';
import LoadingBar from './components/LoadingBar/LoadingBar';

const formStates = [Form, Form2, Form3];
export const FormHandling = React.createContext();

const init = [
	{
		fields: [
			{ name: 'name:', type: 'text', defaultValue: '', validation: { isReq: true } },
			{
				name: 'phone:',
				type: 'text',
				defaultValue: '',
				validation: { isReq: true, regex: /^\d{9}$/ },
			},
			{ name: '2+2=?', type: 'text', defaultValue: '', validation: { regex: /^4$/, isReq: true } },
		],
	},
	{ fields: { alert: false, select: '', click: false, toggle: false } },
	{},
];

const FormApp = () => {
	const [formValues, setFormValues] = useState(init);
	const [currentStage, setCurrentStage] = useState(1);
	const Form = formStates[currentStage - 1];

	const handleNext = () => {
		setCurrentStage(currentStage + 1);
	};

	const handlePrev = () => {
		setCurrentStage(currentStage - 1);
	};

	const inputHandler = (inputName, inputStatus) => {
		const fieldsI1 = formValues[1].fields;

		if (currentStage === 2) {
			const updatedFormValues = { ...formValues };
			updatedFormValues[1].fields[inputName] = inputStatus;
			setFormValues(updatedFormValues);
		}
		if (fieldsI1.click && fieldsI1.toggle && fieldsI1.select === 'me!!') {
			fieldsI1.alert = true;
			fieldsI1.canGoForward = true;
		} else {
			fieldsI1.alert = false;
			fieldsI1.canGoForward = false;
		}
	};

	return (
		<FormHandling.Provider
			value={{ handlePrev, handleNext, currentStage, fields: formValues[currentStage - 1].fields, inputHandler }}
		>
			<ResetStyle />
			<FormArea>
				<LoadingBar />
				<Form />
			</FormArea>
		</FormHandling.Provider>
	);
};

export default FormApp;