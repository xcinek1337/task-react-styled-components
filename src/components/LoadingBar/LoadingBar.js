import React from 'react';

import './LoadingBar.css';
const LoadingBar = ({ progress }) => {
	const loadingBarStyle = {
		width: `${progress}%`,
	};
	return <div style={loadingBarStyle} className='loading-bar'></div>;
};

export default LoadingBar;
