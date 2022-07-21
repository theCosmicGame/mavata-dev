import React from 'react';
import styled from 'styled-components';

import EditIcon from '../../assets/img/icons/edit.png'

const Button = styled.div`
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  align: center;
  width: fit-content;
  block-size: fit-content;

  margin: 0;
  padding: 0;
`

const ButtonDiv = styled.div`
  min-height: 35px;

  flex: 0 0 auto;

  display: inline-block;
  margin: 0;
  width: fit-content;
  block-size: fit-content;

  vertical-align: middle;

  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    margin-left: 0px;
    text-decoration: none;
  };

  @media screen and (max-width: 479px) {
    max-width: 50px;
  };
`

const StyledEditIcon = styled.img.attrs({ src: `${EditIcon}` })`
  width: 15px;
  height: 15px;
  left: 50%;
  top: 50%;

  vertical-align: middle;

  @media screen and (max-width: 479px) {
    vertical-align: top;
  }
`

const ButtonText = styled.span`
  width: 88px;
  height: 20px;
  margin-left: 6%;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 0;

  vertical-align: center;
  color: #08048C;

  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  /* identical to box height; or 133% */
  letter-spacing: -0.02em;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

  @media screen and (max-width: 479px) {
    display: none;
  }
`

export default function EditProfileButton({ onClick }) {
  return (
    <Button>
      <ButtonDiv onClick={onClick} >
        <StyledEditIcon alt='add' />
        <ButtonText>Edit Profile</ButtonText>
      </ButtonDiv>
    </Button>
  )
}