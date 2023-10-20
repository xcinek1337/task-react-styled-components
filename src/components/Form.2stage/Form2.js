import React from 'react';

import Dropdown from '../Dropdown/Dropdown';
import { BtnLabel, BtnOption } from '../Dropdown/Dropdown.styled';
import './css.css';

const Form2 = ({ onClick }) => {
	const handlePrev = onClick.handlePrev;
	const handleNext = onClick.handleNext;

	const handleMenuOne = () => {
		console.log('clicked one');
	};

	const handleMenuTwo = () => {
		console.log('clicked two');
	};

	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<label htmlFor=''>Choose me:</label>
				<Dropdown
					trigger={<BtnLabel>Select </BtnLabel>}
					menu={[
						<BtnOption onClick={handleMenuOne}>Select 1</BtnOption>,
						<BtnOption onClick={handleMenuOne}>Select 2</BtnOption>,
						<BtnOption onClick={handleMenuTwo}>Select 3</BtnOption>,
					]}
				/>
			</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<label htmlFor=''>Pick me:</label>
				{/* <Dropdown
					trigger={<BtnLabel>Select </BtnLabel>}
					menu={[
						<button onClick={handleMenuOne}>Select 1</button>,
						<button onClick={handleMenuOne}>Select 2</button>,
						<button onClick={handleMenuTwo}>Select 3</button>,
					]}
				/> */}
			</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<label htmlFor=''>Toggle me:</label>
				{/* <Dropdown
					trigger={<BtnLabel>Select </BtnLabel>}
					menu={[
						<button onClick={handleMenuOne}>Select 1</button>,
						<button onClick={handleMenuOne}>Select 2</button>,
						<button onClick={handleMenuTwo}>Select 3</button>,
					]}
				/> */}
			</div>

			<div>
				<button onClick={handlePrev}> {'<'}</button>
				<button onClick={handleNext}> {'>'}</button>
			</div>
		</>
	);
};

export default Form2;
