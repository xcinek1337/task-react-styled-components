import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import { BtnLabel, BtnOption } from '../Dropdown/Dropdown.styled';

import Checkbox from '../Checkbox/Checkbox';
import { Button, ButtonsDiv, DivRowFlex, LabelStyled, StyledParagraph } from './Form2.styled';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Form2 = ({ onClick }) => {
	const [alert, setAlert] = useState(false);
	const [select, setSelect] = useState('Select');
	const [click, setClick] = useState(false);
	const [toggle, setToggle] = useState(false);

	const handlePrev = onClick.handlePrev;
	const handleNext = onClick.handleNext;

	const setSelectText = textContent => {
		setSelect(textContent);
	};
	const validation = () => {
		if (select === 'me!!' && click === true && toggle === true) {
			handleNext();
		} else {
			setAlert(true);
		}
	};

	return (
		<>
			{alert && <StyledParagraph>Follow the instructions ツ</StyledParagraph>}
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
				<Checkbox click={() => setClick(!click)} />
			</DivRowFlex>

			<DivRowFlex className={'third'}>
				<LabelStyled>Toggle me:</LabelStyled>
				<ToggleSwitch toggle={() => setToggle(!toggle)} />
			</DivRowFlex>

			<ButtonsDiv>
				<Button onClick={handlePrev}> {'<'}</Button>
				<Button onClick={validation}> {'>'}</Button>
			</ButtonsDiv>
		</>
	);
};

export default Form2;
