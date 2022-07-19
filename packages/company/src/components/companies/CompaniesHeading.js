import React from 'react';
import styled from 'styled-components';
import ButtonWorkflow from '../buttons/ButtonWorkflow';
import { crows as table } from '../../variables/companies';

const Frame = styled.div`
  padding: 0px;
  margin: 50px 5px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  width: 100%;
  max-width: none;
  min-height: auto;

  margin-right: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0%;
  padding-left: 0%;
  
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  
  flex-direction: row;
`

const HeadingDiv = styled.div`
  padding: 10px 30px;
`

const Heading = styled.h1`
  padding-bottom: 15px;
  margin-bottom: 15px;

  height: 40px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 900;
  font-size: 3vw;
  line-height: 45px;
  white-space: nowrap;
  /* identical to box height; or 111% */
  letter-spacing: -0.03em;
  /* Blacks/001 */
  color: #091540;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

const SubHeading = styled.p`
  padding: 0;
  margin: 0;

  font-family: Overpass;
  font-style: normal;
  font-weight: 400;
  font-size: 1.75vw;
  line-height: 28px;
  /* identical to box height; or 175% */
  letter-spacing: -0.02em;
  /* Grays/001 */
  color: #3E3D5C;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`

export default function CompaniesHeading({ companies }) {
  const n = companies.rows.length;

  return (
    <Frame>
      <HeadingDiv>
        <Heading>All Companies</Heading>
        <SubHeading>You have {n} companies in your dashboard.</SubHeading>
      </HeadingDiv>
      <HeadingDiv>
        <ButtonWorkflow to='/addcompany'>Add a new company</ButtonWorkflow>
      </HeadingDiv>
    </Frame>
  )
}