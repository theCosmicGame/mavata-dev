import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

import EditProfileButton from '../buttons/EditProfileButton';
import DescriptionDetails from './DescriptionDetails';
import renderParagraph from '../../functions/renderParagraph';

import img from '../../assets/img/banners/Rectangle.png';
import img1 from '../../assets/img/banners/Rectangle-1.png';
import imgBlank from '../../assets/img/banners/blank-rectangle-modified.png';


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

const Banner = styled.div`
  margin-top: 10px;
  position: relative;
`

const CompanyImage = styled.img`
  position: relative;
  left: 30px;
  top: -30px;
  margin-bottom: -10px;

  @media (max-width: 767px) {
    width: auto;
  };
`

const ProfilePicContainer = styled.div`
  position: relative;
  display: inline-block;

  text-align: center;
  color: #fff;
`

const ProfilePicText = styled.div`
  position: absolute;
  height: 80px;
  width: 90px;
  top: -25%;
  left: 35%;

  min-width: 90px;

  font-size: clamp(1.15em, 3vw, 1em);
  line-height: 100%;
  overflow-wrap: break-word!important;
  word-wrap: break-all!important;

  display: inline-block;
  vertical-align: middle;

  & div {
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

const CompanyProfilePic = styled.img.attrs({ src: `${imgBlank}` })`
  position: relative;
  left: 30px;
  top: -30px;
  margin-bottom: -10px;

  @media (max-width: 767px) {
    width: auto;
  };
`

const ContainerBox = styled.div`
  padding: 0px 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: stretch;   /* gives items same height (flex-direction=row) or width for column flex direction */
`

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

const Description = styled.div`
  position: relative;

  min-height: 100px;
  max-height: 200px;
  width: ${props => (props.mainWidth > 850 ? '65%' : 'auto')};       /* tied to width of 'Details' styled div */

  overflow: auto;
  padding-right: 10px;
  
  p {
    width: auto;
    overflow-wrap: break-word;
    font-size: 14px;
  };

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

const DetailsSmall = styled.div`
  display: ${props => (props.mainWidth <= 850) ? 'flex' : 'none'};
  flex-flow: row nowrap;
  justify-content: space-around;

  @media screen and (max-width: 1100px) {
    display: ${props => ((props.mainWidth <= 850) || props.isExpanded) ? 'flex' : 'none'};
  }
`

export default function Intro({ company, isExpanded, mainWidth }) {
  const updateProfileHandler = data => {
    console.log('in Intro.js')
    console.log(data)
  }

  console.log(company.banner)
  
  return (
    <Wrapper>
      <Banner>
        <BannerImg background={company.banner} />
        <ProfilePicContainer>
          <CompanyProfilePic />
          <ProfilePicText><div>{company.name}</div></ProfilePicText>
        </ProfilePicContainer>
      </Banner>

      <ContainerBox>
        <TitleLine>
          <TitleText>{company.name}</TitleText>
          <EditProfileButton onUpdateProfile={updateProfileHandler} />
        </TitleLine>
      </ContainerBox>

      <ContainerBoxFlex isExpanded={isExpanded} mainWidth={mainWidth} >
        <DetailsSmall isExpanded={isExpanded} mainWidth={mainWidth} >
          <DescriptionDetails company={company} isExpanded={isExpanded} mainWidth={mainWidth} />
        </DetailsSmall>
        <Description mainWidth={mainWidth} >
          <div>
            {renderParagraph(company.description)}
          </div>
        </Description>
        
        <Details isExpanded={isExpanded} mainWidth={mainWidth} >
          <DescriptionDetails company={company} />
        </Details>
      </ContainerBoxFlex>
    </Wrapper>
  )
}