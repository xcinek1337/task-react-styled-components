import React from 'react';

const Form2 = ({ onClick }) => {
	const handlePrev = onClick.handlePrev;
	const handleNext = onClick.handleNext;
	
	return (
		<>
			<div>
				<input type='checkbox' />
				<label htmlFor=''>lalal</label>
			</div>
			<div>
				<button onClick={handlePrev}> {'<'}</button>
				<button onClick={handleNext}> {'>'}</button>
			</div>
		</>
	);
};

export default Form2;
