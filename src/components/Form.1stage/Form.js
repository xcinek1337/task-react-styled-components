import React, { useContext } from 'react';
import { FormHandling } from '../../FormApp';

import FormHandler from './FormHandler';

const Form = () => {
	const { handleNext, fields } = useContext(FormHandling);
	

	return <FormHandler onSubmit={handleNext} fieldsList={fields} />;
};

export default Form;
