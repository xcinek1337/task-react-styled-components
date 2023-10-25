import React from 'react';

import { ProgressBar } from './LoadingBar.styled';

const LoadingBar = ({ currentStage }) => {
	const widthes = ['10%', '44%', '77%'];
	const loadingBarStyle = {
		width: widthes[currentStage - 1],
	};
	
	return <ProgressBar style={loadingBarStyle}></ProgressBar>;
};

export default LoadingBar;
