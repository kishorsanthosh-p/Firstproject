import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './style.css'
import { useState } from 'react';
export default function Tables(props){
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
                <Table sx={{ minWidth: 650 }} aria-label="simple table"  id="myTable">
                <TableHead>
                    <TableRow>
                        <th >id<UnfoldMoreIcon align="center" onClick={()=>Sorting("")}/></th>
                        <th align="center" >Name <UnfoldMoreIcon align="center" onClick={()=>Sorting("")}/></th>
                        <th align="center" >DATE <UnfoldMoreIcon align="center" onClick={()=>Sorting("")}/></th>
                        <th align="center">STATUS <UnfoldMoreIcon align="center" onClick={()=>Sorting("")}/></th>
                        {/* <TableCell align="center" onClick={()=>sorting("name")}>Name</TableCell> */}
                        {/* <TableCell align="center" onClick={()=>sorting("date")}>Date</TableCell> */}
                        {/* <TableCell align="center" onClick={()=>sorting("states")}>States</TableCell> */}
                        <th align="center">ACTING <UnfoldMoreIcon align="center" onClick={()=>Sorting("")}/></th>
                        {/* <TableCell align="center" onClick={()=>sorting("user_button")}>Acting</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.user.length>0?(
                        props.user.map((user)=>(
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.id}</TableCell>
                                <TableCell align="center">{user.name}</TableCell>
                                <TableCell align="center">{user.date}</TableCell>
                                <TableCell align="center">{user.status}</TableCell>
                                <TableCell className='button'>
                                    <Button variant="contained" onClick={()=>{props.editRow(user)}}>Edit</Button>
                                    <Button variant="contained"onClick={()=>{props.deleteuser(user)}}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                        )
                        ):(
                        <TableRow>
                            <TableCell colSpan={5}><center>no data</center></TableCell>
                            
                        </TableRow>
                    )}   
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )

};