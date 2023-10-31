import React, { useState } from 'react';
import { CheckboxInput, CheckboxLabel } from './ToggleSwitch.styled';

const ToggleSwitch = ({ name, isChecked, inputHandler }) => {
	const [status, setStatus] = useState(true);
	function handleToggle() {
		inputHandler(name, status);
	}

	return (
		<div>
			<CheckboxInput
				onClick={() => setStatus(!status)}
				onChange={handleToggle}
				checked={isChecked}
				type='checkbox'
				id='switch'
			/>
			<CheckboxLabel checked={isChecked} htmlFor='switch' />
		</div>
	);
};

export default ToggleSwitch;