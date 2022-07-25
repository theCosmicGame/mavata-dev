import { strToUrl } from 'containerMfe/Functions';

import { ucols, urows as users } from './users'

import Banner1 from '../assets/img/banners/1129.jpg';
import Banner2 from '../assets/img/banners/geometric_color_hexagon_banner.jpg';
import Banner3 from '../assets/img/banners/gradient-dark-blue-futuristic-digital-grid-background.jpg';
import Banner4 from '../assets/img/banners/Rectangle.png';
import Banner5 from '../assets/img/banners/rm373batch15-bg-11.jpg';
import Banner6 from '../assets/img/banners/SL_031721_41490_22.jpg';
import Banner7 from '../assets/img/banners/SL_031721_41490_35.jpg';
import Banner8 from '../assets/img/banners/SL_082820_34580_16.jpg';

var adminFirm = 1;

export const crows = [
  { 
    id: 1, 
    firmId: 1, // BEM TO DO: firmId set at Add Company
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'FastServe HVAC', 
    sector: 'Business Services', 
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner4,
    connection: false, // BEM TO DO: automate
    collaboratorIds: [], // BEM TO DO: automate
    userIds: [1, 2, 3, 4, 5, 6, 7, 8], // BEM TO DO: automate
    last: true // BEM TO DO: automate per ACTIVE user
  },
  { 
    id: 2,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'Hong Business Solutions',
    sector: 'Business Services',
    description: 'Hong Business Solutions is a leading provider of IT services.\n The Company provides a range of IT services, including Identity Management, Network Security, Managed Services, and Cloud Migrations.\n The Company serves small and mid-sized customers in the Southern California.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.',
    website: 'http://www.hongsolutions.com',
    location: 'San Diego, CA',
    banner: Banner1,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 3,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'Kearn Manufacturing',
    sector: 'Industrials',
    description: "Kearn Manufacturing is a leading manufacturer of screws, bolts, rivets and other fasteners.\n The Company manufactures specialized fasteners for \"can't fail\" applications.\n The Company serves midwest-based customers in the industrial and energy markets.\n Rock Equity invested in 2021.",
    website: 'http://www.kearnmfg.com',
    location: 'Altoona, PA',
    banner: Banner2,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 4,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'RetChem',
    sector: 'Industrials',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner3,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 5,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'ChallengeT',
    sector: 'Business Services',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner5,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 6,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'Excalipre',
    sector: 'Software',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner6,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 7,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'OilFast',
    sector: 'Franchisor',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner7,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 8,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'Rigid Bikes',
    sector: 'Consumer',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner8,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 9,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'UCare',
    sector: 'Healthcare',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner4,
    connection: false,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false
  },
  { 
    id: 10,
    firmId: 1,
    firms: [1],
    firmDomain: '@rockequity.com',
    name: 'LifeWorx',
    sector: 'Healthcare',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner4,
    connection: false,
    userIds: [1, 2],
    last: false
  }
].map((company, idx) => {
  // add property isExternalCompany per company
  const adminUser = users.filter(user => user.roles.admin.includes(company.id))[0]

  let u = users.filter(user => user.companies.includes(company.id)).map((user, i) => {
    if (user.companies.includes(company.id)) {
      let r = 'User';
      if (user.roles.admin.includes(company.id)) {
        r = 'Admin';
      } else if (user.roles.collaborator.includes(company.id)) {
        r = 'Collaborator'
      } else if (user.roles.viewer.includes(company.id) && user.emailraw.slice(user.emailraw.search('@')) !== company.firmDomain) {
        // console.log(user.emailraw.slice(user.emailraw.search('@')), )       
        r = 'External User'
      }
      return {...user, role: r}
    }
  })

  return {
    ...company,
    condensedName: strToUrl(company.name),
    admin: adminUser,
    adminId: adminUser.id,
    users: {
      columns: ucols,
      rows: u
    },
  }
})

export const ccols = [
  { label: 'Name', field: 'name' },
  { label: 'Sector', field: 'sector' },
  { label: 'Role', field: 'role' },
  { label: '', field: 'action', sort: false },
]

// console.log('in companies.js', crows)