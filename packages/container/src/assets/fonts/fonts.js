import PlayfairDisplay from './Playfair_Display/static/PlayfairDisplay-Regular.ttf';
import Barlow from './Barlow/Barlow-Regular.ttf'

const myGlobalCSS = `
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${PlayfairDisplay}) format('ttf');
  }

  @font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Barlow}) format('ttf');
  }

  body {
    font-family: 'Barlow', sans-serif;
  }
`