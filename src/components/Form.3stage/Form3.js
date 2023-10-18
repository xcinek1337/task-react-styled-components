import React from 'react';

const Form3 = () => {
	const clearStorage = () => {
		localStorage.clear();
		location.reload();
	};
	return (
		<>
			<div>
				<img
					style={{ width: '50px' }}
					src='https://as2.ftcdn.net/v2/jpg/01/38/68/39/1000_F_138683961_ncOVcRh8Md9wLk3T4mSjffNxiUdi6T7k.jpg'
					alt=''
				/>
			</div>
			<button onClick={clearStorage}>DONE</button>
		</>
	);
};

export default Form3;
