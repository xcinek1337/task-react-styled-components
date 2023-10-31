import React, { useState } from 'react';

import { CheckboxLabel, CustomCheckbox, HiddenCheckbox } from './Checkbox.styled';

const Checkbox = ({ name, isChecked, inputHandler }) => {
	const [status, setStatus] = useState(false);

	function handleToggle() {
		inputHandler(name, status);
	}
	return (
		<>
			<CheckboxLabel>
				<HiddenCheckbox onChange={handleToggle} checked={isChecked}></HiddenCheckbox>
				<CustomCheckbox onClick={() => setStatus(!status)}></CustomCheckbox>
			</CheckboxLabel>
		</>
	);
};

export default Checkbox;
