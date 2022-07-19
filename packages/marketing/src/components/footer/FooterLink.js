import React from 'react';
import MaterialLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterLinks = styled(MaterialLink)`
  display: block;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`

export default function FooterLink(props) {
  return (
    <FooterLinks component={RouterLink} to={props.to} color="inherit">{props.children}</FooterLinks>
  )
}