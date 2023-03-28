import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Usertable(props){
  const [date,setdate] =useState(true);
const handleShow = () => {
  if (date===true) {
    const sorted = props.user.sort((a, b)=> 
      new Date(a.date) - new Date(b.date)
    );
    props.setuser(sorted);
    setdate(false);
  } 
  if(date=== false) {
    const sorted = props.user.sort((a, b)=> 
      new Date(b.date) - new Date(a.date)
    );
    props.setuser(sorted);
    setdate(true);
  }
};
  const [order,setorder]=useState("ASC");
const Sorting =(col)=>{
    if(order ==="ASC"){
        const Sortied =[...props.user].sort((a,b)=>
        a[col].toLowerCase()>b[col].toLowerCase()?1:-1
    )
    setorder("DSC"); 
    props.setuser(Sortied);
    
}
if(order ==="DSC"){
    const Sortied =[...props.user].sort((a,b)=>
    a[col].toLowerCase()<b[col].toLowerCase()?1:-1
)
setorder("ASC");
 props.setuser(Sortied);
}
};
  const [orders, setorders]=useState(true);
const Sort =()=>{
  var table, rows,switching , i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  if(orders===true){
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
      setorders(false);
  }}
if(orders===false){
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
  setorders(true);
  }}
  return(
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="myTable">
        <TableRow>
          <TableCell align="center"><b>Id</b><UnfoldMoreIcon className='icon' onClick={()=> Sort("")} /></TableCell>
          <TableCell align="center"><b>Name</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("name")}/></TableCell>
          <TableCell align="center"><b>Date</b><UnfoldMoreIcon className='icon'onClick={handleShow} /></TableCell>
          <TableCell align="center"><b>Location</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("location")}/></TableCell>  
          <TableCell align="center"><b>Team1</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("team1")}/></TableCell>
          <TableCell align="center"><b>Team2</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("team2")}/></TableCell>
          <TableCell align="center"><b>Status</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("status")}/></TableCell>
          <TableCell align="center"><b>Action</b></TableCell>
            </TableRow>
            <TableBody>
              {props.user.length > 0 ? (
                props.user.map((user) => (
                <TableRow key={user.id} align='center '>
                  <DataTableBodyCell align="center">{user.id}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.name}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.date}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.location}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.teamname1}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.teamname2}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.status}</DataTableBodyCell>
                  <DataTableBodyCell align="center">
                    <Button
                     onClick={() => {
                      props.editRow(user);
                    }}
                    ><Tooltip title="Edit"><EditIcon/></Tooltip></Button>
                    <Button
                      onClick={() => {
                        props.deleteuser(user);
                      }}>
                        <Tooltip title="Delete"><DeleteIcon/></Tooltip>
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