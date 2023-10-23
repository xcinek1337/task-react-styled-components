import React, { useState } from 'react';
import { CheckboxInput, CheckboxLabel } from './ToggleSwitch.styled';

const ToggleSwitch = ({ toggle }) => {
	const [isChecked, setIsChecked] = React.useState(false);

	const handleToggle = () => {
		setIsChecked(!isChecked);
		toggle();
	};
	return (
		<div>
			<CheckboxInput onChange={handleToggle} checked={isChecked} type='checkbox' id='switch' />
			<CheckboxLabel checked={isChecked} htmlFor='switch' />
		</div>
	);
};

export default ToggleSwitch;
