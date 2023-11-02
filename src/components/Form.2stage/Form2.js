import React, { useState } from 'react';

import { FormHandling } from '../../FormApp';

import Dropdown from '../Dropdown/Dropdown';
import { BtnLabel, BtnOption } from '../Dropdown/Dropdown.styled';

import Checkbox from '../Checkbox/Checkbox';
import { Button, ButtonsDiv, DivRowFlex, LabelStyled, StyledParagraph } from './Form2.styled';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { useContext } from 'react';

const Form2 = () => {
	const { handleNext, handlePrev, fields, inputHandler, alert, canGoFoward } = useContext(FormHandling);

	// hardcoded index state default name select component state
	const [select, setSelect] = useState(fields[0].default);

	const setSelectText = (fieldName, textContent) => {
		setSelect(textContent);
		inputHandler(fieldName, textContent);
	};

	const validation = () => {
		if (canGoFoward) {
			handleNext();
		}
	};

	return (
		<>
			{alert && <StyledParagraph>Follow the instructions ツ</StyledParagraph>}
			{fields.map((field, index) => (
				<DivRowFlex key={index}>
					<LabelStyled>{field.label}:</LabelStyled>
					{field.type === 'Dropdown' && (
						<>
							<Dropdown
								name={field.name}
								trigger={<BtnLabel>{field.value || 'Select'}</BtnLabel>}
								menu={field.options.map(option => (
									<BtnOption key={option}>{option}</BtnOption>
								))}
								setTxt={setSelectText}
							/>
						</>
					)}
					{field.type === 'Checkbox' && (
						<>
							<Checkbox name={field.name} isChecked={field.value} inputHandler={inputHandler} />
						</>
					)}
					{field.type === 'ToggleSwitch' && (
						<>
							<ToggleSwitch name={field.name} isChecked={field.value} inputHandler={inputHandler} />
						</>
					)}
				</DivRowFlex>
			))}

			<ButtonsDiv>
				<Button onClick={handlePrev}> {'<'}</Button>
				<Button onClick={validation}> {'>'}</Button>
			</ButtonsDiv>
		</>
	);
};

export default Form2;
