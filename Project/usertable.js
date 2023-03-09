import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import Button from '@mui/material/Button';

export default function Usertable(props){
  const [users]=useState(props.user);
const [order,setorder]=useState("ASC");
const Sorting =(col)=>{
    if(order ==="ASC"){
        const Sortied =[...users].sort((a,b)=>
        a[col].toLowerCase()>b[col].toLowerCase()?1:-1
    )
    props.setuser(Sortied);
    setorder("DSC");
}
if(order ==="DSC"){
    const Sortied =[...users].sort((a,b)=>
    a[col].toLowerCase()<b[col].toLowerCase()?1:-1
)
 props.setuser(Sortied);
setorder("ASC");
}
};
  return(
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableRow>
          <TableCell align="center"><b>Id</b><UnfoldMoreIcon className='icon' /></TableCell>
          <TableCell align="center"><b>Name</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("name")}/></TableCell>
          <TableCell align="center"><b>Date</b><UnfoldMoreIcon className='icon' /></TableCell>
          <TableCell align="center"><b>Location</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("location")}/></TableCell>  
          <TableCell align="center"><b>Team1</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("team1")}/></TableCell>
          <TableCell align="center"><b>Team2</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("team2")} /></TableCell>
          <TableCell align="center"><b>Status</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("status")} /></TableCell>
          <TableCell align="center"><b>Action</b></TableCell>
            </TableRow>
            <TableBody>
              {users.length > 0 ? (
                users.map((user) => (
                <TableRow key={user.id} align='center '>
                  <DataTableBodyCell align="center">{user.id}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.name}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.date}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.location}</DataTableBodyCell>
                  <Tooltip title={user.team1}>
                    <DataTableBodyCell align="center">{user.teamname1}</DataTableBodyCell>
                  </Tooltip>
                  <Tooltip title={user.team2} align="center">
                    <DataTableBodyCell align="center">{user.teamname2}</DataTableBodyCell>
                  </Tooltip>
                  <DataTableBodyCell align="center">{user.status}</DataTableBodyCell>
                  <DataTableBodyCell align="center">
                    <Button
                     onClick={() => {
                      props.editRow(user);
                    }}
                    >Edit</Button>
                    <Button
                      onClick={() => {
                        props.deleteuser(user);
                      }}>Delete
                    </Button>
                  </DataTableBodyCell>
                </TableRow>
              ))
              ) : (
              <TableRow>
                <TableCell colSpan={8}>
                  <center><b>No Data</b></center>
                </TableCell>
              </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
  </div>
)
}