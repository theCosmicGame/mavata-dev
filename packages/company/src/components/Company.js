/* 
    BEM TO DO
    - update table buttons to send email
    - edit user settings button in table
    - make add data connection button functional
    - 
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Col, Row } from 'antd';
import styled from 'styled-components';
import getWindowWidth from '../functions/getWindowWidth';

import '../assets/css/antd.css';

import Sidebar from './sidebar/Sidebar';
import Intro from './company/Intro';
import DataConnection from './company/DataConnection';
import UsersTable from './table/UsersTable';


const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
`

const StyledSection = styled.div`
  margin-left: ${props => props.isExpanded ? '250px' : props.sidebarWidth};
  transition: margin 0.3s ease;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;

  width: ${props => props.sidebarWidth ? `calc(100% - props.sidebarWidth)` : '100%'};
`

const Main = styled.main`
  padding: 10px 15px;
  margin: 0;

  background: #E5E5E5;

  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: top;

  position: relative;
`

const ContentSection = styled.div`
  display: block;
  top: 0;
  left: 0;
  color: #000;
  font-family: Barlow;
`

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const Company = ({ companies }) => {
  // BEM TO DO: get ID from company and pass as prop instead of company
  let { companyName } = useParams();
  // console.log('params', companyName, companies)

  // sidebar collapse
  localStorage.setItem('sidebar-collapsed', (window.innerWidth > 850) ? false : true);
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const [sidebarWidth, setSidebarWidth] = useState(isExpanded ? '250px' : '50px')
  const [mainWidth, setMainWidth] = useState(window.innerWidth - parseInt(sidebarWidth))

  // console.log('2 main width ', mainWidth, window.innerWidth, sidebarWidth)

  function setWidthSidebar() {
    let w = getWindowWidth();
    let x = (w > 850) ? '50px' : '0px';
    let y = (isExpanded && (w > 850)) ? '250px' : x;

    setSidebarWidth(y);
    let z = (w - parseInt(y))
    setMainWidth(z);

    return y;
  }

  // resize on sidebar collapse or window resize
  useEffect(() => {
    setWidthSidebar();
    
    const debouncedHandleResize = debounce(function handleResize() {
      if (isExpanded && (getWindowWidth() <= 850)) {
        setIsExpanded(false)
        localStorage.setItem('sidebar-collapsed', true);
        setSidebarWidth('0px')
      } else if (getWindowWidth() <= 850) {
        localStorage.setItem('sidebar-collapsed', true);
        setSidebarWidth('0px')
      } else {
        localStorage.removeItem('sidebar-collapse')
      }

      let y = setWidthSidebar();

    }, 100);

    
    if (sidebarWidth + mainWidth > getWindowWidth()) {
      console.log('NEED A FIX')
      let y = setWidthSidebar();
    }

    window.addEventListener('resize', debouncedHandleResize);

    // necessary cleanup
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    };
  });

  // console.log('sidebar width', sidebarWidth)
  const useCompany = (companyName ? companies.rows.filter(entry => entry.condensedName === companyName)[0] : companies.rows.filter(entry => entry.last === true)[0])

  return (
    <Wrapper>
      <Col flex={sidebarWidth}>
        <Sidebar company={useCompany} isExpanded={isExpanded} setIsExpanded={setIsExpanded} mainWidth={mainWidth} setWidthSidebar={setWidthSidebar} />
      </Col>
      <StyledSection sidebarWidth={sidebarWidth} >
        <Main>
          <ContentSection>
            <Intro company={useCompany} isExpanded={isExpanded} mainWidth={mainWidth} />
            <DataConnection company={useCompany} />
            <UsersTable company={useCompany} />
          </ContentSection>
        </Main>
      </StyledSection>
    </Wrapper>
  );
};

export default Company