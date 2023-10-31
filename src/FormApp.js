import React, { useState, useEffect } from 'react';

import ResetStyle from '../assets/img/resetCss/ResetStyle';
import { CentredDiv as FormArea } from './components/CentredDiv/CentredDiv';

import Form from './components/Form.1stage/Form';
import Form2 from './components/Form.2stage/Form2';
import Form3 from './components/Form.3stage/Form3';
import LoadingBar from './components/LoadingBar/LoadingBar';
import customInputsValidate from './components/smallValidate';

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
	{
		fields: [
			{
				name: 'dropdown',
				type: 'Dropdown',
				label: 'pick me',
				default: 'Select',
				options: ['not me...', 'not me...', 'me!!'],
				value: '',
			},
			{ name: 'checkbox', type: 'Checkbox', label: 'click me', value: false },
			{ name: 'toggle', type: 'ToggleSwitch', label: 'toggle me', value: false },
		],
	},
	{},
];

const FormApp = () => {
	const [formValues, setFormValues] = useState(init);
	const [currentStage, setCurrentStage] = useState(1);
	const Form = formStates[currentStage - 1];
	const [alert, setAlert] = useState(true);
	const [canGoFoward, setCanGoFoward] = useState(false);

	const handleNext = () => {
		setCurrentStage(currentStage + 1);
	};

	const handlePrev = () => {
		setCurrentStage(currentStage - 1);
	};

	const inputHandler = (inputName, inputStatus) => {
		const updatedFormValues = [...formValues];

		const { fields } = updatedFormValues[currentStage - 1];
		const fieldIndex = fields.findIndex(item => item.name === inputName);

		if (fieldIndex !== -1) {
			const field = fields[fieldIndex];

			fields[fieldIndex] = { ...field, value: inputStatus };

			updatedFormValues[currentStage - 1] = { ...updatedFormValues[currentStage - 1], fields };

			setFormValues(updatedFormValues);
		}
	};

	useEffect(() => {
		const isValidateOk = customInputsValidate(formValues, currentStage, 'me!!');
		setCanGoFoward(isValidateOk);
		setAlert(!isValidateOk);
	}, [formValues]);

	return (
		<FormHandling.Provider
			value={{
				handlePrev,
				handleNext,
				currentStage,
				fields: formValues[currentStage - 1].fields,
				inputHandler,
				alert,
				canGoFoward,
			}}
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
