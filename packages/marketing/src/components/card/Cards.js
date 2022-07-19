import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from 'styled-components';


import CardNew from './CardNew'

const StyledGrid = styled(Grid)`
  width: 100%;
  grid-auto-flow: row;
  
  grid-template-areas: -area -area -area;
  grid-template-rows: auto auto;
  justify-content: space-between;
  align-items: center;

  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
`

export default function Cards() {
  const cards = ['Integrate with Company Systems',
    'Aggregate Current & Trend Data',
    'Centralize Company Materials',
    'End Export-Format-Email Cycles',
    'Modernize Data Collaboration'];

  return (
    <React.Fragment>
      <Container>
        <StyledGrid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item key={index} sm={6} md={2} lg={2}>
              <CardNew key={index}>
                {card}
              </CardNew>
            </Grid>
          ))}
        </StyledGrid>
      </Container>
    </React.Fragment>
  );
};