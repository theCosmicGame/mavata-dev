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

const StyledTrash = styled(StyledButton)`
  background-color: #d32f2f;
`

export default function UsersTable({ company, Users }) {

  const [usersData, setUsersData] = useState(Users)
  const [colData, setColData] = useState(ucols)
  const [rowData, setRowData] = useState(addCustomButtons(company))

  function addCustomButtons(rows) {
    console.log(rows.userIds, usersData.rows)
    const users = [];

    usersData.rows.map((row, idx) => {
      console.log(row)

      let index = 0;

      if (rows.userIds.includes(row.id)) {
        users.push({
          ...row,
          index: index,
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
                size='sm'
                floating
                className='remove-user-btn'
                onClick={() => removeRow(idx)}
              >
                <MDBIcon icon="trash" />
              </StyledTrash>
            </>
          ),
        });
      }

      index += 1;
    })

    return users;

    console.log(users, usersData.rows)
  }

  const deleteRow = (index) => {
    if (rowData.length > 0) {
      var updatedRows = [...rowData]
      console.log('1st rowData', updatedRows)

      var indexToRemove = updatedRows.findIndex(x => x.index === index)
      console.log('remove', indexToRemove, index)

      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1)
        var newRows = addCustomButtons(updatedRows)

        console.log(newRows)

        setRowData(newRows)
        // setTableData((prevState) => {
        //   return {
        //     ...prevState,
        //     rows: newRows
        //   }
        // })
      }
    }
  }

  const removeRow = (index) => {
    console.log('rowData', rowData)
    const oldRows = [...rowData]
    const updatedRows = oldRows.filter((row) => row.index !== index);
    console.log('updated', updatedRows)

    setRowData([...updatedRows])

    setTimeout(() => {
      console.log('timer', rowData)
    }, 3000)
  }


  const Table = ({ colData, rowData }) => {
    let tableData = {
      columns: colData,
      rows: rowData
    }

    useEffect(() => {
      tableData = {
        columns: colData,
        rows: rowData
      }
    }, [rowData])

  
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
        <Table colData={colData} rowData={rowData} />
      </TableContainer>
    </Wrapper>
  );
}