import React from 'react';

import { ProgressBar } from './LoadingBar.styled';

const LoadingBar = ({ currentStage }) => {
	let loadingBarStyle = {};
	if (currentStage === 1) {
		loadingBarStyle = {
			width: '10%',
		};
	} else if (currentStage === 2) {
		loadingBarStyle = { width: '44%' };
	} else if (currentStage === 3) {
		loadingBarStyle = { width: '77%' };
	}

	return <ProgressBar style={loadingBarStyle}></ProgressBar>;
};

export default LoadingBar;
