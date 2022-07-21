import React from 'react';
import styled from 'styled-components';

import DescriptionDetails from '../DescriptionDetails';
import DescriptionInput from '../DescriptionInput';

const ContainerBoxFlex = styled.div`
  padding: 0px 10px;
  margin: 0;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: stretch;

  width: 100%;
  
  @media screen and (max-width: 850px) {
    flex-direction: column;
  };

  @media screen and (max-width: 1100px) {
    flex-direction: ${props => ((props.mainWidth <= 850) || props.isExpanded) ? 'column' : 'row'};
  };
`

const DetailsSmall = styled.div`
  display: ${props => (props.mainWidth <= 850) ? 'flex' : 'none'};
  flex-flow: row nowrap;
  justify-content: space-around;

  @media screen and (max-width: 1100px) {
    display: ${props => ((props.mainWidth <= 850) || props.isExpanded) ? 'flex' : 'none'};
  }
`

const Description = styled.div`
  position: relative;

  min-height: 100px;
  width: ${props => (props.mainWidth > 850 ? '65%' : 'auto')};       /* tied to width of 'Details' styled div */

  overflow: auto;
  padding-right: 10px;
  
  p {
    width: auto;
    overflow-wrap: break-word;
    font-size: 14px;
  }

  @media screen and (max-width: 850px) {
    width: auto!important;
  };
`

const Details = styled.div`
  min-width: 25%;   /* tied to width of 'Description' styled div */
  width: auto;

  display: ${props => (props.mainWidth <= 850) ? 'none' : 'flex'};
  flex-direction: column;
  align-items: left;
  vertical-align: middle;
  justify-content: space-evenly;

  white-space: nowrap;

  @media screen and (max-width: 850px) {
    display: none;
  };
`

export default function DetailsLayout({ company, onUpdateDescription, isExpanded, mainWidth }) {
  return (
    <ContainerBoxFlex isExpanded={isExpanded} mainWidth={mainWidth} >
      <DetailsSmall isExpanded={isExpanded} mainWidth={mainWidth} >
        <DescriptionDetails company={company} isExpanded={isExpanded} mainWidth={mainWidth} />
      </DetailsSmall>
      <Description mainWidth={mainWidth} >
        <DescriptionInput company={company}></DescriptionInput>
      </Description>

      <Details isExpanded={isExpanded} mainWidth={mainWidth} >
        <DescriptionDetails company={company} />
      </Details>
    </ContainerBoxFlex>
  )
}