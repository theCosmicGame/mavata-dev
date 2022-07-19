import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  padding: 50px 24px 33px;
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
  border-radius: 8px;
  background-color: #8ef0de;
  box-shadow: 1px 1px 13px 0 rgba(0, 0, 0, 0.07);

  @media screen and (max-width: 991px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  };

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  };

  @media screen and (max-width: 479px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 80px;
    margin-right: auto;
    margin-bottom: 10px;
    margin-left: auto;
    padding-top: 10px;
    padding-bottom: 10px;
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
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    text-align: center;
  };
`

const CardText = styled.h3`
  /* h3 */
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  font-weight: bold;
  margin-bottom: 10px;
  box-sizing: border-box;

  /* _24px REMOVED */

  font-size: 16px;
  margin-top: 10px;
  font-family: 'Playfair Display', sans-serif!important;
  color: #0c0a89;
  text-align: center;

  @media screen and (max-width: 767px) {
    text-align: left;
  };

  @media screen and (max-width: 479px) {
    text-align: center;
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
  };
`

export default function CardStyled(props) {
  return (
    <React.Fragment>
      <Card>
        <CardText>{props.children}</CardText>
      </Card>
    </React.Fragment>
  )
}