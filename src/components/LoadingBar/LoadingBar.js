import React from 'react';

import { ProgressBar } from './LoadingBar.styled';

const LoadingBar = ({ progress }) => {
	const loadingBarStyle = {
		width: `${progress}%`,
	};
	return <ProgressBar style={loadingBarStyle}></ProgressBar>;
};

export default LoadingBar;
