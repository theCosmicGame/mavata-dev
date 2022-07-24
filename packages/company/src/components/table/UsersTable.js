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

export default function UsersTable({ company, editUser, onRemoveUser, openModal }) {
  const [usersData, setUsersData] = useState(addCustomButtons(company.users.rows));
  const [colData, setColData] = useState(company.users.columns);
  const [tableData, setTableData] = useState({
    columns: company.users.columns,
    rows: usersData
  })

  
  useEffect(() => {
    console.log('UsersTable.js company users', company.users.rows)

    setTableData(prevState => ({
      ...prevState,
      rows: addCustomButtons(company.users.rows)
    }))
  }, [company])

  // console.log('UsersTable.js company', company)
  // console.log('tableData', tableData)
  // console.log('Users', Users)
  // console.log('usersData', usersData)

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
              <StyledButton
                id={`edit-btn-${idx}`}
                outline
                size='sm'
                floating
                className='call-btn'
                onClick={(event) => editUserHandler(event)}
              >
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

  const editUserHandler = (event) => {
    const index = parseInt(buttonEventHandler(event))
    const oldUser = usersData.filter(entry => entry.index === index)[0]

    // console.log('selected user', index, oldUser)

    openModal(oldUser);
  }

  function buttonEventHandler(event) {
    let parentId = ''

    // console.log('node name', event.target.nodeName)
    if (event.target.nodeName !== 'BUTTON') {
      // console.log('parent node', event.target.parentNode.attributes.id)
      parentId = event.target.parentNode.attributes.id.value
    } else {
      // console.log('button node', event.target.attributes.id)
      parentId = event.target.attributes.id.value
    }

    if (parentId !== '') {
      parentId = parentId.substring(parentId.search('-btn-')).replace('-btn-', '')
      // console.log('parentId', parentId)
    }

    return parentId
  }

  const deleteRow = (event) => {
    if (usersData.length > 0) {
      let updatedRows = [...usersData]
      console.log('1st rowData', updatedRows)

      const parentId = buttonEventHandler(event)
      const indexToRemove = updatedRows.findIndex(x => parseInt(parentId) === x.index)
      // console.log('remove (found, dictated)', indexToRemove, parentId)

      if (indexToRemove > -1) {
        if (indexToRemove === 0) {
          updatedRows = updatedRows.slice(indexToRemove + 1)
        } else {
          updatedRows = [...updatedRows.slice(0, indexToRemove), ...updatedRows.slice(indexToRemove + 1)]
        }
        var newRows = addCustomButtons(updatedRows)

        console.log('new rows', newRows)
        newRows = addCustomButtons(newRows);
        setUsersData(newRows)
        setTableData(prevState => ({
          ...prevState,
          rows: newRows
        }))

        onRemoveUser(newRows)

      }
    }
  }

  function Table({ users }) {
    let tableData = {
      columns: colData,
      rows: usersData
    }

    // console.log('tableData', tableData)

    useEffect(() => {
      tableData = {
        columns: colData,
        rows: usersData
      }
    }, [usersData])

    // console.log('tableData post useEffect', tableData)

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
        <StyledTable
          hover
          striped

          data={tableData}
          entriesOptions={[5, 10, 20]}
          entries={10}

          fixedHeader
          maxHeight='460px'
        />
      </TableContainer>
    </Wrapper>
  );
}