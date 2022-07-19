import React from 'react';
import styled from 'styled-components';

import Logo from './navbar/Logo';
import NavTabs from './navbar/NavTabs';
import NavbarContainer from './navbar/NavbarContainer';

const NavItem = styled.ul`
  margin: 0;
  padding: 0;
`

const MediumItem = styled.div`
  @media screen and (min-width: 767px) {
    display: inline-block!important;
  }
  
  @media screen and (max-width: 766px) {
    display: none!important;
  }
`

export default function NavbarDev() {
  const linkMap = [
    ["All Companies", "/companies"],
    ["Company Profile", "/companies/last"], // BEM TO DO: change to dropdown 
    ["Settings", "/user/settings"]
  ];

  return (
    <React.Fragment>
      <NavbarContainer >

        <NavItem>
          <Logo />
        </NavItem>
        <NavItem>
          <MediumItem><NavTabs linkMap={linkMap} /></MediumItem>
        </NavItem>

      </NavbarContainer>
    </React.Fragment>
  );
}