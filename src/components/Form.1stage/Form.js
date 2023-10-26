import React, { useContext, useEffect } from 'react';
import { FormHandling } from '../../FormApp';

import FormHandler from './FormHandler';

const Form = () => {
	const { handleNext, fields } = useContext(FormHandling);

	useEffect(() => () => console.log('unmount'), []);
	return <FormHandler onSubmit={handleNext} fieldsList={fields} />;
};

export default Form;
