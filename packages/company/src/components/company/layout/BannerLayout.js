import React from 'react';
import styled from 'styled-components';

import imgBlank from '../../../assets/img/pfp/blank-rectangle-modified.png';
import img from '../../../assets/img/banners/Rectangle.png';
import img1 from '../../../assets/img/pfp/Rectangle-1.png';

const Banner = styled.div`
  margin-top: 10px;
  position: relative;
`

const BannerImg = styled.div`
  position: relative;
  background-image: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #EEF1F6;
  border-radius: 12px 12px 0px 0px;
  height: 136px;
  align: center

  box-sizing: border-box;
`

const ProfilePicContainer = styled.div`
  position: relative;
  display: inline-block;

  text-align: center;
  color: #fff;
`

const CompanyProfilePic = styled.img.attrs({ src: `${imgBlank}` })`
  position: relative;
  left: 30px;
  top: -30px;
  margin-bottom: -10px;

  @media (max-width: 767px) {
    width: auto;
  };
`

const ProfilePicText = styled.div`
  position: absolute;
  height: 80px;
  width: 90px;
  top: -25%;
  left: 35%;

  min-width: 90px;

  font-family: Barlow, sans-serif;
  font-size: clamp(1.15em, 3vw, 1em);
  line-height: 100%;
  overflow-wrap: break-word!important;
  word-wrap: break-all!important;

  display: inline-block;
  vertical-align: middle;

  & div {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-wrap: break-word!important;
    word-wrap: break-all!important;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default function BannerLayout({ company }) {
  return (
    <Banner>
      <BannerImg background={company.banner} />
      <ProfilePicContainer>
        <CompanyProfilePic />
        <ProfilePicText><div>{company.name}</div></ProfilePicText>
      </ProfilePicContainer>
    </Banner>
  )
}