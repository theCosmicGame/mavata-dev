import { crows, ccols } from './companies';
import { urows, ucols } from './users';

export const firmTypes = [
  'Private Equity',
  'Portfolio Company',
  'Investment Bank',
  'Asset Management',
  'Business',
  'Other (entered type)'
];

export const firms = [
  {
    id: 1,
    name: 'Rock Equity',
    domain: '@rockequity.com',
    type: 'Private Equity',
    companies: {
      columns: ccols,
      rows: crows,
    },
    users: {
      columns: ucols,
      rows: urows,
    },
  },
  {
    id: 2,
    name: 'Blackstone',
    domain: '@blackstone.com',
    type: 'Asset Management',
    companies: {
      columns: ccols,
      rows: [],
    },
    users: {
      columns: ucols,
      rows: [{
        name: 'John Doe',
        emailraw: 'john.doe@blackstone.com',
        role: 'Admin',
        firmId: 2,
        isExternalFirm: false,
        isExternalComp: true,
        adminRoles: [],
        collaboratorRoles: [],
        viewerRoles: [],
        firmAdmin: true,
      }],
    }
  },
  {
    id: 3,
    name: 'Deutsche Bank',
    domain: '@db.com',
    type: 'Investment Bank',
    companies: {
      columns: ccols,
      rows: [],
    },
    users: {
      columns: ucols,
      rows: [{
        id: 1,
        name: 'Gary Shy',
        emailraw: 'gary.shy@db.com',
        role: 'Admin',
        firmId: 3,
        isExternalFirm: false,
        isExternalComp: true,
        adminRoles: [],
        collaboratorRoles: [],
        viewerRoles: [],
        firmAdmin: true,
      }],
    }
  }
].map(firm => {
  // 1) update users property
  let u = urows.map(user => {
    // console.log('yo', firm.users.rows.filter(entry => console.log(entry, user.id)))
    if (user.firms.includes(firm.id)) {
      return user
    }
  })

  return {
    ...firm,
    users: {
      ...firm.users,
      rows: [
        ...firm.users.rows,
        ...u
      ]
    }
  }
})
// .map(firm => {
//   let c = firm.companies.rows.map(company => {
//     let u = company.users.map(user => {
//       if (user) {
//         if (user.companies.includes(company.id)) {
//           let r = 'User';
//           if (user.roles.admin.includes(company.id)) {
//             r = 'Admin';
//           } else if (user.roles.collaborator.includes(company.id)) {
//             r = 'Collaborator'
//           } else if (user.roles.viewer.includes(company.id) && user.emailraw.slice(user.emailraw.search('@')) === firm.domain) {       
//             r = 'External User'
//           }
//           return {...user, role: r}
//         }
//       }
//     })

//     return {
//       ...company,
//       users: u
//     }
//   })
//   console.log('firm', firm)
//   return firm
// })
// .map(firm => {
  // return firm

  
//   let c = firm.companies.rows.map(company => {
//     let u = users.map((user, i) => {
//       if (user.companies.includes(company.id)) {
//         let r = 'User';
//         if (user.roles.admin.includes(company.id)) {
//           r = 'Admin';
//         } else if (user.roles.collaborator.includes(company.id)) {
//           r = 'Collaborator'
//         } else if (user.roles.viewer.includes(company.id)) {
//           console.log(user.emailraw.slice(user.emailraw.search('@'))  firm.domain )       
//           r = 'External User'
//         }
//         return {...user, role: r}
//       }

//       return {
//         ...company,
//         users: u,
//       }
//     })
//   })
// })