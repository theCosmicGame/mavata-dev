import React from 'react';
import styled from 'styled-components';

import IconBriefcase from '../../assets/img/icons/icon-briefcase.png';
import IconGlobe from '../../assets/img/icons/icon-globe.png';
import IconLocation from '../../assets/img/icons/icon-location.png';
import ExternalLink from '../../assets/img/icons/external-link.png';

const Detail = styled.div`
  padding: 5px;
  display: inline-block;

  vertical-align: middle;
`

const DetailText = styled.div`
  display: inline-block;
  margin: 0 10px;
  vertical-align: middle;

  font-family: Overpass;
  font-style: normal;

  flex: none;
  order: 0;
  flex-grow: 0;

  & div {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    vertical-align: middle;
  }
`

const DetailHeading = styled.h5`
  margin: 2px 0 0 0;
  padding: 0;
  
  display: table-cell;
  vertical-align: middle;

  font-size: ${props => (props.mainWidth <= 850) ? '14px!important' : '16px!important'};
  font-weight: 700;
  /* identical to box height, or 125% */
  letter-spacing: -0.02em;
  /* Blacks/002 */
  color: #2F2F4C;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  };
`

const DetailDescriptor = styled.h6.attrs()`
  margin: 0;
  padding: 0;

  display: table-cell;
  vertical-align: middle;

  font-size: ${props => (props.mainWidth <= 850) ? '12px!important' : '14px!important'};
  font-weight: 400;
  /* identical to box height, or 114% */
  letter-spacing: -0.02em;
  /* Grays/003 */
  color: #6A698C;

  @media screen and (max-width: 900px) {
    font-size: 10px;
  };
`

const Icon = styled.img`
  @media screen and (max-width: 900px) {
    height: 30px;
    width: auto;
    vertical-align: top!important;
  };

  @media screen and (max-width: 1100px) {
    height: ${props => ((props.mainWidth <= 850) || props.isExpanded) ? '40px' : 'auto'};
    vertical-align: top!important;
  };
`

const ExtLinkIcon = styled.img.attrs({ src: `${ExternalLink}` })`
  margin-left: 5px;
  vertical-align: middle;

  @media screen and (max-width: 900px) {
    height: 10px;
  };
`

export default function DescriptionDetails({ company, isExpanded, mainWidth }) {
  // BEM TO DO: find sector icons
  const detailsMap = [
    {
      title: 'Sector',
      icon: IconBriefcase,
      alt: 'sector',
      text: company.sector,
    },
    {
      title: 'Headquarters',
      icon: IconLocation,
      alt: 'headquarters',
      text: company.location,
    },
    {
      title: 'Website',
      icon: IconGlobe,
      alt: 'webpage',
      text: company.website,
    },
  ]

  return (
    <React.Fragment>
      {detailsMap.map((item, index) => (
        <Detail key={index}>
          <Icon src={item.icon} alt={item.alt} isExpanded={isExpanded} mainWidth={mainWidth} />
          <DetailText>
            <div>
              <DetailHeading mainWidth={mainWidth} >{item.title}</DetailHeading>
              <DetailDescriptor mainWidth={mainWidth} >{item.text}</DetailDescriptor>
            </div>
          </DetailText>
        </Detail>
      ))}
    </React.Fragment>
  )
}