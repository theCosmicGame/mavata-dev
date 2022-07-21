import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

import BannerLayout from './layout/BannerLayout';
import TitleLayout from './layout/TitleLayout';
import DetailsLayout from './layout/DetailsLayout';


const CompanyImage = styled.img`
  position: relative;
  left: 30px;
  top: -30px;
  margin-bottom: -10px;

  @media (max-width: 767px) {
    width: auto;
  };
`

export default function Intro(props) {
  const { company, openModal, onUpdateDescription, isExpanded, mainWidth } = props;
  
  return (
    <Wrapper>
      <BannerLayout company={company} />
      <TitleLayout company={company} openModal={openModal} />
      <DetailsLayout 
        company={company} 
        isExpanded={isExpanded} 
        onUpdateDescription={onUpdateDescription}
        mainWidth={mainWidth} 
      />
    </Wrapper>
  )
}