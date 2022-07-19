/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import styled, { keyframes } from 'styled-components';

import OutlinedButton from '../buttons/OutlinedButton';

import GridOnIcon from '@mui/icons-material/GridOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PhoneIcon from '@mui/icons-material/Phone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';

const animateLeft = keyframes`
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`

const SidebarContainer = styled.div`
  @media screen and (max-width: 850px) {
    display: none!important;
  }
`

const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
`

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;

  &.hide {
    display: none!important;
    content-visibility: hidden!important;
  }
`

const SidebarItem = styled.div`
  display: ${props => props.isExpanded ? 'flex' : 'none'};
  align-items: center;
  padding: 16px 8px;
  border-radius: 5px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #EEF1F6;
  }

  .sidebar-text {
    font-size: 16px;
    padding-left: 5px;
  }
`

const SidebarDiv = styled.div`
  display: ${props => props.isExpanded ? 'flex' : 'none'};
  align-items: center;
  padding: 16px 8px;

  &:after {
    display: ${props => props.isExpanded ? 'flex' : 'none'};
  };
`

const IconWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease-out;
  width: 1.25em;
  align: center;
  margin: 0px 5px;
  align-items: center;
  vertical-align: middle;
  transform: ${(props) => (props.isExpanded ? `rotate(0deg)` : `rotate(90deg)`)};
`

const rotate = keyframes`
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;

    &.down {
      -moz-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
`;

const RotatingIcon = styled(ArrowForwardIosIcon)`
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;

    &.down {
      -moz-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
`

const SidebarIcon = styled.div`
  margin: 0;
  padding: 0;

  &.hide {
    display: none!important;
  }
`

const SideDiv = styled.div`
  width: ${props => props.isExpanded ? '250px' : '52px'};

  &.sidebar {
    display: flex;
    flex-direction: column;

    position: fixed!important;
    left: 0;
    bottom: 0;
    top: 75px;
    min-height: calc(100vh - 75px);

    width: 250px;
    height: 100%;

    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEF1F6;

    z-index: 1;
    overflow: auto;

    & div {
      padding: 8px;
      font-size: 24px;
      display: block;
    }
    
    @media screen and (max-width: 850px) {
      display: none!important;
    }
  }

  &.sidebar-collapsed {
    display: flex;
    flex-direction: column;
    
    width: 52px;
    
    position: fixed;
    left: 0;
    bottom: 0;
    top: 75px;    /* height of the navbar */

    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEF1F6;

    @media screen and (min-width 993px) {
      display: block!important;
    }

    & div {
      padding: 8px;
      font-size: 24px;
      display: block;
    }

    & + $SidebarIcon {
      margin-right: 0;
    }

    & span {
      display: none;
    }
  }
`

const LineItem = styled.span`

`

export default function Sidebar( { isExpanded, setIsExpanded, mainWidth, setWidthSidebar } ) {  
    
  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
    } else {
      setIsExpanded(true);
      localStorage.removeItem('sidebar-collapsed');
    }
  };

  // default is expanded

  return (
    <SidebarContainer isExpanded={isExpanded} >
      <SideDiv isExpanded={isExpanded} className={isExpanded ? 'sidebar' : 'sidebar-collapsed' }>
        <SidebarHeader>
          <IconWrapper isExpanded={isExpanded} onClick={handleToggle}  >
            <ArrowForwardIosIcon/>
            {/* BEM TO DO: show company name when expanded */}
          </IconWrapper>
        </SidebarHeader>
        <SidebarItems className={isExpanded ? '' : 'hide' } >
          <SidebarItem isExpanded={isExpanded} >
            <SidebarIcon className={isExpanded ? '' : 'hide' }><AssessmentIcon fontSize='small' /></SidebarIcon>
            <span className={isExpanded ? 'sidebar-text' : 'hide' }>Quarterly Reports</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            <SidebarIcon className={isExpanded ? '' : 'hide' }><DescriptionIcon fontSize='small' /></SidebarIcon>
            <span className={isExpanded ? 'sidebar-text' : 'hide' }>Financial Reports</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            <SidebarIcon className={isExpanded ? '' : 'hide' }><MonetizationOnIcon fontSize='small' /></SidebarIcon>
            <span className={isExpanded ? 'sidebar-text' : 'hide' }>Cash Flows</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            <SidebarIcon className={isExpanded ? '' : 'hide' }><PhoneIcon fontSize='small' /></SidebarIcon>
            <span className={isExpanded ? 'sidebar-text' : 'hide' }>Meeting Notes</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            <SidebarIcon className={isExpanded ? '' : 'hide' }><GridOnIcon fontSize='small' /></SidebarIcon>
            <span className={isExpanded ? 'sidebar-text' : 'hide' }>Misc</span>
          </SidebarItem>
        </SidebarItems>
        <SidebarDiv>
          <OutlinedButton to='company/data/newfolder' isExpanded={isExpanded}>Add a folder</OutlinedButton>
        </SidebarDiv>
      </SideDiv>
    </SidebarContainer>
  );
}