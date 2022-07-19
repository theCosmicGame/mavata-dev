import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #8ef0de;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: auto;
  padding: 33px 20px 33px;
  margin-right: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  align: center!important;
  border-radius: 8px;
  box-shadow: 1px 1px 13px 0 rgba(0, 0, 0, 0.07);

  @media screen and (max-width: 991px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const StyledCardContent = styled(CardContent)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  flex-grow: 1;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;

  font-family: 'Playfair Display', sans-serif;
  color: #0c0a89;

  text-align: center;

  & h4 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    line-height: 20px;
    margin-top: 10px;

    font-size: 16px;

    @media screen and (max-width: 991px) {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    @media screen and (max-width: 767px) {
      text-align: left;
    }

    @media screen and (max-width: 479px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-right: auto;
      margin-left: auto;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 15px;
      text-align: center;
    }
  }
`

export default function CardNew(props) {
  return (
    <StyledCard>
      <StyledCardContent>
        <h4>{props.children}</h4>
      </StyledCardContent>
    </StyledCard>
  )
};
