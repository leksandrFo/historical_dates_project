import { createGlobalStyle } from 'styled-components'
import PTSansRegular from '../assets/fonts/PTSans-Regular.ttf';
import PTSansBold from '../assets/fonts/PTSans-Bold.ttf';
import BebasNeueRegular from '../assets/fonts/BebasNeue-Regular.ttf';


export default createGlobalStyle`
  @font-face {
    font-family: 'PTSans-Regular';
    src: url(${PTSansRegular}) format('truetype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'PTSans-Bold';
    src: url(${PTSansBold}) format('truetype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'BebasNeue-Regular';
    src: url(${BebasNeueRegular}) format('truetype');
    font-display: fallback;
  }

  body {
    margin: 0;
    padding: 0;
    background: #F4F5F9;
    font-family:'PTSans-Regular', sans-serif;
    font-size: 14px;
    color: #42567A;
  }
`


