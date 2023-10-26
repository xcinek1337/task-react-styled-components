import React, { useContext } from 'react';
import { FormHandling } from '../../FormApp';

import FormHandler from './FormHandler';

const Form = () => {
	const { handleNext } = useContext(FormHandling);
	const fieldsList = [
		{ name: 'name:', type: 'text', defaultValue: '', validation: { isReq: true } },
		{
			name: 'phone:',
			type: 'text',
			defaultValue: '',
			validation: { isReq: true, regex: /^\d{9}$/ },
		},
		{ name: '2+2=?', type: 'text', defaultValue: '', validation: { regex: /^4$/, isReq: true } },
	];

	return <FormHandler onSubmit={handleNext} fieldsList={fieldsList} />;
};

export default Form;
