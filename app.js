import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
export default function Usertable(props,user){
  const [order, setorder]=useState(true);
    const Sorting =()=>{
        var table, rows,switching , i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        if(order===true){
        while(switching){ 
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[0];
              y = rows[i + 1].getElementsByTagName("TD")[0];
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }}
            if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
            setorder(false);
        }}
    if(order===false){
        while(switching ){
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[0];
              y = rows[i + 1].getElementsByTagName("TD")[0];
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }}
            if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }}
        setorder(true);
        }}
  return(
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="myTable">
          <TableRow>
          <TableCell align="center"><b>Id</b><UnfoldMoreIcon className='icon'  onClick={()=>Sorting("")}/></TableCell>
          <TableCell align="center"><b>Name</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>
          <TableCell align="center"><b>Date</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>
          <TableCell align="center"><b>Location</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>  
          <TableCell align="center"><b>Team1</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>
          <TableCell align="center"><b>Team2</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>
          <TableCell align="center"><b>Status</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>
          <TableCell align="center"><b>Action</b><UnfoldMoreIcon className='icon' onClick={()=>Sorting("")}/></TableCell>
            </TableRow>
            <TableBody> 
              {props.user.length > 0 ? (
                props.user.map((user) => (
                <TableRow key={user.id} align='center '>
                  <DataTableBodyCell align="center">{user.id}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.name}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.date}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.location}</DataTableBodyCell>
                  <Tooltip title={user.team1}>
                    <DataTableBodyCell align="center">{user.teamname1}</DataTableBodyCell>
                  </Tooltip>
                  <Tooltip title={user.team2} align="center">
                    <Button align="center">{user.teamname2}</Button>
                    <DataTableBodyCell align="center">{user.teamname2}</DataTableBodyCell>
                  </Tooltip>
                  <DataTableBodyCell align="center">{user.status}</DataTableBodyCell>
                  <DataTableBodyCell align="center">
                     <Tooltip title="Edit" placement="top-end">
                     <Button
                     onClick={() => {
                      props.editRow(user);
                    }}
                    ><EditIcon/></Button>
                     </Tooltip>
                     <Tooltip title="Delete" placement="top-end">
                    <Button
                      onClick={() => {
                        props.deleteuser(user);
                      }}><DeleteSweepIcon/>
                    </Button>
                    </Tooltip>
                  </DataTableBodyCell>
                </TableRow>
              ))
              ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <center>no data</center>
                </TableCell>
              </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

  </div>
)

}