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
	const [click, setClick] = useState(false);
	const [toggle, setToggle] = useState(false);

	const setSelectText = textContent => {
		setSelect(textContent);
		inputHandler('value', textContent);
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
				<DivRowFlex  key={index}>
					{field.type === 'Dropdown' && (
						<>
							<LabelStyled>{field.label}:</LabelStyled>
							<Dropdown
								trigger={<BtnLabel>{select}</BtnLabel>}
								menu={field.options.map(option => (
									<BtnOption key={option}>{option}</BtnOption>
								))}
								setTxt={setSelectText}
							/>
						</>
					)}
					{field.type === 'Checkbox' && (
						<>
							<LabelStyled>{field.label}:</LabelStyled>
							<Checkbox
								click={() => {
									const newClick = !click;
									setClick(newClick);
									inputHandler('marked', newClick);
								}}
							/>
						</>
					)}
					{field.type === 'ToggleSwitch' && (
						<>
							<LabelStyled>{field.label}:</LabelStyled>
							<ToggleSwitch
								toggle={() => {
									const newToggle = !toggle;
									setToggle(newToggle);
									inputHandler('toggled', newToggle);
								}}
							/>
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
