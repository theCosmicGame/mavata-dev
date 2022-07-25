export const adminPermissions = {
  users: 'edit',    // edit (Admin Only), view, none
  data: 'full',     // full (add), view, none
  details: 'edit',  // edit, view
}

export const collabPermissions = {
  users: 'view',
  data: 'full',
  details: 'edit',
}

export const viewFullPermissions = {
  users: 'view',
  data: 'view',
  details: 'view',
}

export const viewDataPermissions = {
  users: 'none',
  data: 'view',
  details: 'view',
}

export const viewUsersPermissions = {
  users: 'view',
  data: 'none',
  details: 'view'
}

export const viewLimitedPermissions = {
  users: 'none',
  data: 'none',
  details: 'view'
}

export const urows = [
  {
    id: 1, // BEM TO DO: once auth added, keep but add userId specific to Mavata not the firm
    name: 'Jennifer Doe',
    emailraw: 'jennifer.doe@rockequity.com',
    firmId: 1, /// BEM TO DO: automate
    firms: [1],
    isExternalFirm: false,
    isExternalComp: true, // BEM TO DO: automate within companies.js 
    adminRoles: [1, 4, 5, 6, 7, 8, 9, 10],
    collaboratorRoles: [2],
    viewerRoles: [3],
    firmAdmin: false,
  },
  {
    id: 2,
    name: 'Ryan Tse',
    emailraw: 'ryan.tse@rockequity.com',
    firmId: 1,
    firms: [1],
    isExternalFirm: false,
    isExternalComp: true,
    adminRoles: [2],
    collaboratorRoles: [1, 3, 4, 5, 6, 7, 8, 9, 10],
    viewerRoles: [],
    firmAdmin: false,
  },
  {
    id: 3,
    name: 'Jane Rach',
    emailraw: 'jane.rach@rockequity.com',
    firmId: 1,
    firms: [1],
    isExternalFirm: false,
    isExternalComp: true,
    adminRoles: [3],
    collaboratorRoles: [],
    viewerRoles: [1, 2, 4, 5, 6, 7, 8, 9, 10],
    firmAdmin: false,
  },
  {
    id: 4,
    name: 'Eric Eay',
    emailraw: 'eric@cpa-QofE.com',
    firmId: 1,
    firms: [1],
    isExternalFirm: true,
    isExternalComp: true,
    adminRoles: [],
    collaboratorRoles: [],
    viewerRoles: [1, 2, 3],
    firmAdmin: false,
  },
  {
    id: 5,
    name: 'Jack Plence',
    emailraw: 'jack@fastserv.com',
    firmId: 1,
    firms: [1],
    isExternalFirm: true,
    isExternalComp: false,
    adminRoles: [],
    collaboratorRoles: [1],
    viewerRoles: [1],
    firmAdmin: false,
  },
  {
    id: 6,
    name: 'Tiger Nixon',
    emailraw: 'tiger.nixon@gmail.com',
    firmId: 1,
    firms: [1],
    isExternalFirm: true,
    isExternalComp: true,
    adminRoles: [],
    collaboratorRoles: [2, 3, 4],
    viewerRoles: [1, 5, 6, 7, 8, 9, 10],
    firmAdmin: false,
  },
  {
    id: 7,
    name: 'Sonya Frost',
    emailraw: 'sfrost@gmail.com',
    firmId: 1,
    firms: [1, 2],  // BEM TO DO: add to firms.js
    isExternalFirm: true,
    isExternalComp: true,
    adminRoles: [],
    collaboratorRoles: [],
    viewerRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    firmAdmin: false,
  },
  {
    id: 8,
    name: 'Tatyana Fitzpatrick',
    emailraw: 'tfitz@gmail.com',
    firmId: 1,
    firms: [1, 2, 3], // BEM TO DO: add to firms.js
    isExternalFirm: true,
    isExternalComp: true,
    adminRoles: [],
    collaboratorRoles: [],
    viewerRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    firmAdmin: false,
  }
].map((row, idx) => {
  let c = [...row.adminRoles, ...row.collaboratorRoles, ...row.viewerRoles];
  c = [...new Set(c)].sort((a, b) => a - b);

  let p = {};
  row.adminRoles.map(companyId => {
    p[companyId] = adminPermissions
  })
  row.collaboratorRoles.map(companyId => {
    p[companyId] = collabPermissions
  })
  row.viewerRoles.map(companyId => {
    p[companyId] = viewFullPermissions
  })

  
  return {
    ...row,
    companies: c,
    permissions: p,
    roles: {
      admin: [...row.adminRoles],
      // adminPermissions: row.adminRoles.reduce((accumulator, companyId) => {
      //   return {...accumulator, [companyId]: adminPermissions};
      // }, {}),
      collaborator: row.collaboratorRoles.map(companyId => {
        if (!row.adminRoles.includes(companyId)) {
          return companyId
        }
      }),
      // collaboratorPermissions: row.collaboratorRoles.reduce((accumulator, companyId) => {
      //   return {...accumulator, [companyId]: collabPermissions};
      // }, {}),
      viewer: row.viewerRoles.map(companyId => {
        if (!row.adminRoles.includes(companyId) && !row.collaboratorRoles.includes(companyId)) {
          return companyId
        }
      }),
      // viewerPermissions: row.viewerRoles.reduce((accumulator, companyId) => {
      //   return {...accumulator, [companyId]: viewFullPermissions}; // BEM TO DO: make dynamic ?
      // }, {}),
    },
  }
})

// console.log('in users.js', urows)

export const ucols = [
  { label: 'Name', field: 'name'},
  { label: 'Email', field: 'email' },
  { label: 'Role', field: 'role' },
  { label: 'Actions', field: 'buttons', sort: false },
]