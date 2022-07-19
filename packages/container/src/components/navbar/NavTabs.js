import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

const StyledNavLink = styled(NavLink)`
  margin: 10px;
  padding: 3px;
  font-size: 20px;
  font-weight: 600;
  color: #0c0a89;
  align-items: center;

  &:hover {
    border-bottom: 3px solid #0c0a89;
  }

  &.active {
    ${'' /* padding-top: 30px; */}
    border-bottom: 3px solid #08048C;
    border-radius: 8px 16px 0px 0px;
    bottom: 0%;
  }
`

export default function NavTabs({ linkMap }) {
  return (
    <React.Fragment>
      <NavDiv>
        {linkMap.map(([title, url], index) => (
          <StyledNavLink end to={url} key={index} className={({ isActive }) => (isActive ? 'active' : '')}>
                {title}
            </StyledNavLink>
        ))}
      </NavDiv>
    </React.Fragment>
  )
}