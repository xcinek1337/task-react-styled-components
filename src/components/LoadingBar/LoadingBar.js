import React, {useContext} from 'react';
import { FormHandling } from '../../FormApp';
import { ProgressBar } from './LoadingBar.styled';

const LoadingBar = () => {
	const { currentStage} = useContext(FormHandling)
	const widthes = ['10%', '44%', '77%'];
	const loadingBarStyle = {
		width: widthes[currentStage - 1],
	};
	
	return <ProgressBar style={loadingBarStyle}></ProgressBar>;
};

export default LoadingBar;
