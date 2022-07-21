import React from 'react';
import styled from 'styled-components';

import EditProfileButton from '../../buttons/EditProfileButton';

const ContainerBox = styled.div`
  padding: 0px 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: stretch;   /* gives items same height (flex-direction=row) or width for column flex direction */

  width: 100%;
`

const BreakDiv = styled.div`
  flex-basis: 100%;
  height: 0;
`

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
                                                                                                                                                                          
const TitleLine = styled.div`
  padding: 5px 0;
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
  minHeight: 35px;
`

const TitleText = styled.h1`
  font-family: Overpass;
  font-style: bold;
  font-weight: 400;
  font-size: 18px;
  vertical-align: middle;
  display: inline-block;
  
  margin: 0;
  padding: 0;
  /* Grays/001 */
  color: #3E3D5C;

  @media (min-width: 768px) {
    font-size: 22px;
    font-style: normal;
  };
  @media (min-width: 1024px) {
      font-size: 24px;
  };
  @media (min-width: 1280px) {
      font-size: 28px;
  };
`

// rendering Profile Data logic pt. 1
export default function TitleLayout({ company, openModal }) {
  return (
    <ContainerBox>
      <TitleLine>
        <TitleText>{company.name}</TitleText>
        <EditProfileButton onClick={openModal} />
      </TitleLine>
      <BreakDiv />
    </ContainerBox>
  )
}