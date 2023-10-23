import React from 'react';

import { CheckboxLabel, CustomCheckbox, HiddenCheckbox } from './Checkbox.styled';

const Checkbox = ({ click }) => {
	return (
		<>
			<CheckboxLabel>
				<HiddenCheckbox></HiddenCheckbox>
				<CustomCheckbox onClick={click}></CustomCheckbox>
			</CheckboxLabel>
		</>
	);
};

export default Checkbox;
