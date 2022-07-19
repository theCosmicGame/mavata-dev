import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

// do you need to add back srcSet={}
import logo from '../../../public/images/MAVATA_LOGO-Transparent.png';
// import logo1 from '../../../public/images/MAVATA_LOGO-Transparent-p-500.png';
// import logo2 from '../../../public/images/MAVATA_LOGO-Transparent-p-800.png';
// import logo3 from '../../../public/images/MAVATA_LOGO-Transparent-p-1080.png';
// import logo4 from '../../../public/images/MAVATA_LOGO-Transparent-p-1600.png';


const LogoLink = styled(Link)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 75px;
  padding: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;

  @media screen and (max-width: 991px) {
    vertical-align: middle;
    width: 152px;
  }

  @media screen and (max-width: 767px) {
    height: auto;
  }

  img {
    max-width: 80%;
    margin-top: 5px;
  }
`

export default function Logo() {

  return (
    <React.Fragment>
      <LogoLink to='/' aria-current="page">
        <img width="152" alt="logo" src={logo} />
      </LogoLink>
  </React.Fragment>
  );
};