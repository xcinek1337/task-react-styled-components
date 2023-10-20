import { createGlobalStyle } from 'styled-components';
const ResetStyle = createGlobalStyle`
* {
    margin :0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Roboto', sans-serif;
    
    @font-face {
        font-family: 'Roboto';
        src: url('./roboto/Roboto-Regular.ttf') format('truetype');
    }


}

`;

export default ResetStyle;
