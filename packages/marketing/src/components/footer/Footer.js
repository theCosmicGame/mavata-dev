import React from 'react';
import styled from 'styled-components';

import FooterLink from './FooterLink';
// import Copyright from './Copyright';
import FooterButtons from './FooterButtons';
import LinkedInLogo from '../../assets/images/LinkedIn.png';

const FooterStyled = styled.footer`
  /* .section-10 */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
  max-width: none;
  padding: 50px 6%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  /* .section-10.footer-section */
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #15113b;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;

  @media screen and (max-width: 991px) {
    padding: 50px 5% 65px;
  };

  @media screen and (max-width: 767px) {
    padding: 40px 4%;
  };

  @media screen and (max-width: 479px) {
    padding-top: 10px;
    padding-bottom: 10px;
  };
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Playfair Display', sans-serif;
  display: block;
  color: #fff;
  padding: 10px;
`

const FooterWrap = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    width: 100%;
  };

  @media screen and (max-width: 767px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  };

  @media screen and (max-width: 479px) {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  };
`

const StyledH2 = styled.h2`
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

    /* .white-text */
    font-family: 'Playfair Display', sans-serif;
    color: #fff;
    font-size: 20px;
`

const FooterButtonsContainer = styled.div`
  width: 380px;
  margin-left: 150px;
`

const FooterGrid = styled.div`
  /* .w-layout-grid */
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;

  /* _4-col-grid */
  padding-top: 20px;
  padding-bottom: 20px;
  grid-column-gap: 35px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  @media screen and (max-width: 767px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 0px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  };
`

const FoooterColumn = styled.div`
    border-top: 1px solid hsla(0, 0%, 96.9%, 0.2);
    font-size: 16px;

  @media screen and (max-width: 767px) {
    width: 48%;
    margin-bottom: 50px;
  }
`

const FooterTitle = styled.div`
  /* .footer-title */
  padding-top: 8px;
  padding-bottom: 8px;
  color: #15113b;
  font-weight: 600;
  
  /* .white-text */
  font-family: 'Playfair Display', sans-serif;
  color: #fff;
  font-size: 20px;

  /* .footer-title.white-text */
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    text-align: left;
  };
`

const StyledMediaQuery = styled.div`
  font-family: inherit;
  max-width: 300px;
`

const StyledDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  margin-left: 0px;
  margin-bottom: 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  & a {
    max-width: 100%;
    display: inline-block;

    margin-top: 10px;
    margin-left: 0px;
    margin-bottom: 10px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
`

const FooterBottom = styled.div`
  display: flex;
  height: 30px;
`

export default function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterWrap>
          <StyledMediaQuery>
            <StyledH2>Connect</StyledH2>
            <StyledDiv>
              <a href="https://www.linkedin.com/company/mavata" target="_blank" >
                <img src={LinkedInLogo} width="18" sizes="(max-width: 767px) 18px, (max-width: 991px) 2vw, 18px" alt="Link Up with Mavata" />
              </a>
            </StyledDiv>
          </StyledMediaQuery>
          <FooterButtons />
        </FooterWrap>

        <FooterGrid>
          <FoooterColumn><FooterTitle>Home</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
          </FoooterColumn>
          <FoooterColumn><FooterTitle>Company</FooterTitle>
            <FooterLink to="/">Careers</FooterLink>
          </FoooterColumn>
          <FoooterColumn><FooterTitle>Other</FooterTitle>
            <FooterLink to="/pp">Privacy Policy</FooterLink>
            <FooterLink to="/toa">Terms</FooterLink>
          </FoooterColumn>
          <FoooterColumn></FoooterColumn>
        </FooterGrid>
        <FooterBottom />
        {/* <Copyright /> */}
      </FooterContainer>
    </FooterStyled>

  )
}