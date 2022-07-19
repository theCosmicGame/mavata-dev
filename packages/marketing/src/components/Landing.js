import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Footer from './footer/Footer';
import ContentSection from './LandingPages/ContentSection';
import Cards from './card/Cards';
import CardsStyled from './card/CardsStyled';
import Buttons from './buttons/SideBySideButtons';
import HeroContent from './LandingPages/HeroContent';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    min-height: 100vh;

    -webkit-text-size-adjust: 100%;
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    font-family: 'Playfair Display';
    text-decoration: none;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: always;
  }
`

export default function Landing() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <ContentSection>
        <HeroContent />
        <CardsStyled />
        <Buttons />
      </ContentSection>
      <Footer />
    </React.Fragment>
  );
}
