import React, { useState } from 'react';

import { FormHandling } from '../../FormApp';

import Dropdown from '../Dropdown/Dropdown';
import { BtnLabel, BtnOption } from '../Dropdown/Dropdown.styled';

import Checkbox from '../Checkbox/Checkbox';
import { Button, ButtonsDiv, DivRowFlex, LabelStyled, StyledParagraph } from './Form2.styled';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { useContext } from 'react';

const Form2 = () => {
	const { handleNext, handlePrev, fields, inputHandler } = useContext(FormHandling);

	const alert = fields.alert;

	const [select, setSelect] = useState('Select');
	const [click, setClick] = useState(false);
	const [toggle, setToggle] = useState(false);

	const setSelectText = textContent => {
		setSelect(textContent);
		inputHandler('select', textContent);
	};

	const validation = () => {
		if (fields.canGoFoward) {
			handleNext;
		}
	};

	return (
		<>
			{!alert && <StyledParagraph>Follow the instructions ツ</StyledParagraph>}
			<DivRowFlex className={'first'}>
				<LabelStyled>Choose me:</LabelStyled>
				<Dropdown
					trigger={<BtnLabel>{select}</BtnLabel>}
					menu={[<BtnOption>not me.. </BtnOption>, <BtnOption>not me..</BtnOption>, <BtnOption>me!!</BtnOption>]}
					setTxt={setSelectText}
				/>
			</DivRowFlex>

			<DivRowFlex className={'second'}>
				<LabelStyled>pick me:</LabelStyled>
				<Checkbox
					click={() => {
						const newClick = !click;
						setClick(newClick);
						inputHandler('click', newClick);
					}}
				/>
			</DivRowFlex>

			<DivRowFlex className={'third'}>
				<LabelStyled>Toggle me:</LabelStyled>
				<ToggleSwitch
					toggle={() => {
						const newToggle = !toggle;
						setToggle(newToggle);
						inputHandler('toggle', newToggle);
					}}
				/>
			</DivRowFlex>

			<ButtonsDiv>
				<Button onClick={handlePrev}> {'<'}</Button>
				<Button onClick={validation}> {'>'}</Button>
			</ButtonsDiv>
		</>
	);
};

export default Form2;
