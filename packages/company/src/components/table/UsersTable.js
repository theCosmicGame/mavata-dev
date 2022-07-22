/* 
    BEM TO DO
    - update table buttons to send email
    - edit user settings button in table
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MDBDatatable, MDBBtn, MDBIcon } from 'mdbReactUiKit';
import Wrapper from '../Wrapper';
import styled from 'styled-components';

import { urows, ucols } from '../../variables/users';

const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`

const StyledTable = styled(MDBDatatable)`
  width: 80%;
  padding: 20px 0;
`

const StyledLink = styled(Link)`
  color: inherit;
  font-family: Barlow, sans-serif;
  font-weight: 300; 
  font-size: .9rem;
`

const StyledButton = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
`

const StyledDiv = styled.div`
  display: inline-block;
`

const StyledTrash = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
  background-color: #d32f2f;
`

export default function UsersTable({ company, Users }) {
  const [initialUsersData, setInitialUsersData] = useState(addCustomButtons(Users.rows))
  const [usersData, setUsersData] = useState(initialUsersData)
  const [colData, setColData] = useState(Users.columns)

  console.log('usersData', usersData)

  function addCustomButtons(users) {
    const usersArr = [];
    let idx = 0;

    users.map((row) => {
      if (company.userIds.includes(row.id)) {
        usersArr.push({
          ...row,
          index: idx,
          email: (
            <StyledLink
              to='#'
              onClick={(e) => {
                window.location.href = `mailto:${row.emailraw}`;
                e.preventDefault();
              }}
            >
              {row.emailraw}
            </StyledLink>
          ),
          buttons: (
            <>
              <StyledButton
                size='sm'
                floating
                className='message-btn'
                onClick={() => console.log(`send a message to ${row.emailraw}`)}
              >
                <MDBIcon icon='envelope' />
              </StyledButton>
              <StyledButton outline size='sm' floating className='call-btn' onClick={() => console.log(`edit user settings`)}>
                <MDBIcon icon='ellipsis-h' />
              </StyledButton>
              <StyledTrash
                id={`remove-btn-${idx}`}
                bemkey={`remove-btn-${idx}`}
                size='sm'
                floating
                className='remove-user-btn'
                onClick={(event) => deleteRow(event)}
              // onClick={(event) => printEvent(event)}
              >
                <MDBIcon icon="trash" />
              </StyledTrash>
            </>
          ),
        });

        idx = ++idx;
      }

      // console.log('usersArr', usersArr)

    })

    return usersArr;
  }

  const removeRow = (index) => {
    const oldRows = [...usersData]
    console.log('index', index, 'old rows', oldRows)
    console.log(index)

    const updatedRows = oldRows.filter((row) => row.index === index);
    console.log('updated', updatedRows)

    setUsersData([...updatedRows])

    setTimeout(() => {
      console.log('timer', usersData)
    }, 3000)
  }

  const updateTableRows = (newRows) => {}

  const deleteRow = (event) => {
    let parentId = ''
    
    if (usersData.length > 0) {
      let updatedRows = [...usersData]
      console.log('1st rowData', updatedRows)

      console.log('node name', event.target.nodeName)
      if (event.target.nodeName !== 'BUTTON') {
        // console.log('parent node', event.target.parentNode.attributes.id)
        parentId = event.target.parentNode.attributes.id.value
      } else {
        // console.log('button node', event.target.attributes.id)
        parentId = event.target.attributes.id.value
      }
      
      if (parentId !== '') {
        parentId = String(parentId).replace('remove-btn-', '')
      }

      let indexToRemove = updatedRows.findIndex(x => parseInt(parentId) === x.index)
      // console.log('remove (found, dictated)', indexToRemove, parentId)

      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1)
        var newRows = addCustomButtons(updatedRows)

        console.log('new rows', newRows)
        newRows = addCustomButtons(newRows);
        setUsersData(newRows)

      }
    }
  }

  function Table({ users }) {
    let tableData = {
      columns: colData,
      rows: users
    }

    console.log('tableData', tableData)

    useEffect(() => {
      tableData = {
        columns: colData,
        rows: users
      }
    }, [usersData])
    
    console.log('tableData post useEffect', tableData)
    
    return (
      <StyledTable
        hover
        striped

        data={tableData}
        entriesOptions={[5, 10, 20]}
        entries={10}

        fixedHeader
        maxHeight='460px'
      />
    )
  }

  return (
    <Wrapper>
      <TableContainer>
        <Table users={usersData} />
      </TableContainer>
    </Wrapper>
  );
}