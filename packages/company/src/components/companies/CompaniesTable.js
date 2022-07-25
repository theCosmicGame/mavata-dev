import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBDatatable, MDBBtn, MDBIcon } from 'mdbReactUiKit';
import styled from 'styled-components';

import { strToUrl } from 'containerMfe/Functions';

const Frame = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
`

const StyledTable = styled(MDBDatatable)`
  align: center;
  width: fit-content;

  min-width: 800px;
  max-width: 1200px;

  & td {
    margin-bottom: 0!important;
    padding-bottom: 6px! important;
  }
`

export default function CompaniesTable({ companies, activeUser, onNavigateCompany, onUpdateCompanies }) {
  console.log('in CompaniesTable.js', companies, activeUser)
  const userCompanies = companies.rows.filter(company => activeUser.companies.includes(company.id))
  const [actionData, setActionData] = useState({
    columns: companies.columns,
    rows: addActionButtons(companies.rows)
  });

  const setLastCompany = (newCompanyName) => {
    const prevCompany = companies.rows.filter(entry => entry.last === true)[0]
    let newCompany = prevCompany

    if (prevCompany.name !== newCompanyName) {
      prevCompany.last = false;
      newCompany = companies.rows.filter(entry => entry.condensedName === strToUrl(newCompanyName))[0]

      newCompany.last = true;
      // console.log('previous company', prevCompany.name, prevCompany.last, newCompanyName, newCompany)
    }

    onNavigateCompany(prevCompany, newCompany)
  }
  
  function addActionButtons(rows) {
    return rows.map((row) => {
      return {
        ...row,
        action: (
          <Link to={`/companies/${strToUrl(row.name)}`} >
            <StyledButton outline size='sm' floating className='arrow-btn' onClick={() => setLastCompany(row.name)}>
              <MDBIcon icon='arrow-right' />
            </StyledButton>
          </Link>
        ),
      }
    })
  }

  return (
    <StyledContainer>
      <StyledTable
          hover
          striped
          fixedHeader
          maxHeight='460px'

          data={actionData}
          entriesOptions={[5, 10, 20]}
          entries={10}
        />
    </StyledContainer>
  )
}