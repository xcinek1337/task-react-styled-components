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
	{
		fields: [
			{
				type: 'Dropdown',
				label: 'pick me',
				default: 'Select',
				options: ['not me...', 'not me...', 'me!!'],
				value: '',
			},
			{ type: 'Checkbox', label: 'click me', marked: false },
			{ type: 'ToggleSwitch', label: 'toggle me', toggled: false },
		],
	},
	{},
];

const FormApp = () => {
	const [formValues, setFormValues] = useState(init);
	const [currentStage, setCurrentStage] = useState(2);
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
		const updatedFormValues = { ...formValues };

		const isSelected = updatedFormValues[1].fields.some(field => field.value === 'me!!');
		const isMarked = updatedFormValues[1].fields.some(field => field.marked === true);
		const isToggled = updatedFormValues[1].fields.some(field => field.toggled === true);

		console.log('isSelected:', isSelected); // true
		console.log('isMarked:', isMarked); // true
		console.log('isToggled:', isToggled); // false
		console.log(`==================`);

		if (currentStage === 2) {
			const fieldsI1 = updatedFormValues[1].fields;

			for (const field of fieldsI1) {
				if (inputName in field) {
					field[inputName] = inputStatus;
					break;
				}
			}
		}

		if (isMarked && isToggled && isSelected) {
			setAlert(false);
			setCanGoFoward(!canGoFoward);
		} else {
			setAlert(true);
		}
		setFormValues(updatedFormValues);
	};

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