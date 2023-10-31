const customInputsValidate = (formValues, currentStage, SelectOption) => {
	const currentFields = formValues[currentStage - 1]?.fields || [];

	const dropdownField = currentFields.find(field => field.name === 'dropdown');
	const isDropdownValid = dropdownField ? dropdownField.value === SelectOption : true;

	const areOtherFieldsValid = currentFields
		.filter(field => field.name !== 'dropdown')
		.every(field => field.value === true);

	return isDropdownValid && areOtherFieldsValid;
};
export default customInputsValidate;
