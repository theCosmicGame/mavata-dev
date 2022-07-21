import { strToUrl } from 'containerMfe/Functions';

import { urows as users } from './users'

import Banner1 from '../assets/img/banners/1129.jpg';
import Banner2 from '../assets/img/banners/geometric_color_hexagon_banner.jpg';
import Banner3 from '../assets/img/banners/gradient-dark-blue-futuristic-digital-grid-background.jpg';
import Banner4 from '../assets/img/banners/Rectangle.png';
import Banner5 from '../assets/img/banners/rm373batch15-bg-11.jpg';
import Banner6 from '../assets/img/banners/SL_031721_41490_22.jpg';
import Banner7 from '../assets/img/banners/SL_031721_41490_35.jpg';
import Banner8 from '../assets/img/banners/SL_082820_34580_16.jpg';

export const crows = [
  { 
    id: 1, 
    name: 'FastServe HVAC', 
    sector: 'Business Services', 
    role: 'Admin', 
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner4,
    connection: false,
    adminId: 1,
    collaboratorIds: [],
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: true 
  },
  { 
    id: 2,
    name: 'Hong Business Solutions',
    sector: 'Business Services',
    role: 'Admin',
    description: 'Hong Business Solutions is a leading provider of IT services.\n The Company provides a range of IT services, including Identity Management, Network Security, Managed Services, and Cloud Migrations.\n The Company serves small and mid-sized customers in the Southern California.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.\n Rock Equity invested in 2020.',
    website: 'http://www.hongsolutions.com',
    location: 'San Diego, CA',
    banner: Banner1,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 3,
    name: 'Kearn Manufacturing',
    sector: 'Industrials',
    role: 'Admin',
    description: "Kearn Manufacturing is a leading manufacturer of screws, bolts, rivets and other fasteners.\n The Company manufactures specialized fasteners for \"can't fail\" applications.\n The Company serves midwest-based customers in the industrial and energy markets.\n Rock Equity invested in 2021.",
    website: 'http://www.kearnmfg.com',
    location: 'Altoona, PA',
    banner: Banner2,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 4,
    name: 'RetChem',
    sector: 'Industrials',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner3,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 5,
    name: 'ChallengeT',
    sector: 'Business Services',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner5,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 6,
    name: 'Excalipre',
    sector: 'Software',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner6,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 7,
    name: 'OilFast',
    sector: 'Franchisor',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner7,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 8,
    name: 'Rigid Bikes',
    sector: 'Consumer',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner8,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 9,
    name: 'UCare',
    sector: 'Healthcare',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner4,
    connection: false,
    adminId: 1,
    userIds: [1, 2, 3, 4, 5, 6, 7, 8],
    last: false 
  },
  { 
    id: 10,
    name: 'LifeWorx',
    sector: 'Healthcare',
    role: 'Admin',
    description: 'FastServe HVAC is a leading provider of residential HVAC services in the Chicagoland. The Company provides HVAC installation, maintenance, and repair services to over 1500 residential customers.\n The Company operates across the greater Chicagoland (IL, WI, IN) with over 70 employees.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.\n Rock Equity invested in 2019.',
    website: 'www.fastservhvac.com',
    location: 'Chicago, IL',
    banner: Banner4,
    connection: false,
    adminId: 1,
    userIds: [1, 2],
    last: false 
  }
].map((company, idx) => {
  return {
    ...company,
    condensedName: strToUrl(company.name),
    
  }
})

export const ccols = [
  { label: 'Name', field: 'name' },
  { label: 'Sector', field: 'sector' },
  { label: 'Role', field: 'role' },
  { label: '', field: 'action', sort: false, width: 10 },
]