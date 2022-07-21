import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { inStr, countOccurenceStr } from 'containerMfe/Functions';

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
  let { pathname } = useLocation();

  // console.log('wildcard', inStr('/companies/*', pathname), pathname, countOccurenceStr('/', pathname))

  return (
    <React.Fragment>
      <NavDiv>
        {linkMap.map(([title, url], index) => (
          <StyledNavLink
            to={url}
            key={index}
            activeClassName='active'
            isActive={(match, locn) => {
              const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/')); // remove last part of path ( admin/customer/list becomes admin/customer for example )
              const pathLastPart = pathname.slice(pathname.lastIndexOf('/'))
              const count = countOccurenceStr('/', pathname);
              if (count === 1 && locn.pathname === pathname && locn.pathname === url) {   // if current parent is matched and doesn't contain childs activate it
                return true;
              } else if (count > 1 && pathWithoutLastPart === url) {
                return false;
              } else if (locn.pathname === pathname && locn.pathname === url) {
                return true;
              } else if (pathWithoutLastPart === '/companies' && count === 2 && url === '/companies/last') {
                console.log('param url', pathWithoutLastPart, pathLastPart, locn.pathname)
                return true
              } else {
                return false;
              }
            }}
          >
            {title}
          </StyledNavLink>
        ))}
      </NavDiv>
    </React.Fragment>
  )
}