import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './navbar/Logo';
import ButtonNew from './navbar/ButtonNew';
import NavTabs from './navbar/NavTabs';
import NavbarContainer from './navbar/NavbarContainer';

const NavItem = styled.ul`
  margin: 0;
  padding: 0;
  &.optional {
    @media screen and (max-width: 479px) {
      display: none!important;
    }
  }
`

const NavItemMd = styled.div`
  @media screen and (min-width: 767px) {
    display: inline-block!important;
  }
  @media screen and (max-width: 766px) {
    display: none!important;
  }
`

const NavItemSm = styled.div`
  @media screen and (min-width: 767px) {
    display: none!important;
  }
  @media screen and (max-width: 766px) {
    display: inline-block!important;
  }
`

export default function Header({ isSignedIn, onSignOut }) {
  let location = useLocation();

  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
      //localStorage.clear();
      localStorage.removeItem('sidebar-collapsed');
    }
  };

  const linkMap = [
    ["All Companies", "/companies"],
    ["Company Profile", "/companies/last"], // BEM TO DO: change to dropdown 
    ["Settings", "/user/settings"]
  ];

  return (  
    <NavbarContainer isSignedIn={isSignedIn} >

        <NavItem>
          <Logo />
        </NavItem>
        <NavItem>
          <NavItemMd>{isSignedIn ? <NavTabs linkMap={linkMap} /> : ''}</NavItemMd>
        </NavItem>
        <NavItem className='optional'>
          <ButtonNew to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>{isSignedIn ? 'Logout' : 'Login'}</ButtonNew>
          {(isSignedIn || location.pathname.includes('auth/')) ? '' : <ButtonNew to='/earlyaccess'>Early Access ➝</ButtonNew>}
        </NavItem>

    </NavbarContainer>
  );
}