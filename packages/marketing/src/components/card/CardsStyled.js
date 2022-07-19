import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';

import CardStyled from './CardStyled';

const GridContainer = styled(Container)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`

const GridStyled = styled.div`
  /* w-layout-grid */
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  /*
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  */

  /* _3-col-grid */
  width: 100%;
  grid-auto-flow: row;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  grid-template-areas: "Area Area Area";
  -ms-grid-columns: 1fr 20px 1fr 20px 1fr 20px 1fr 20px 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  @media screen and (max-width: 767px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`

const cards = ['Integrate with Company Systems', 
                'Aggregate Current & Trend Data', 
                'Centralize Company Materials', 
                'End Export-Format-Email Cycles', 
                'Modernize Data Collaboration'];

export default function CardsStyled() {

  return (
    <React.Fragment>
      <GridContainer maxWidth={false} >
        <GridStyled>
          {cards.map((card, index) => (
              <CardStyled key={index}>
                {card}
              </CardStyled>
          ))}
        </GridStyled>
      </GridContainer>
    </React.Fragment>
  );
};