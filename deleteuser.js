//import { useState } from "react";
import{useState} from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
import './style.css';
import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Deletetable=(props)=>{
    const [user] =useState(props.currentuserid);
   
    
    return(
    <div  className="popup" > 
        <Dialog open={props} >
        <DialogTitle >
          <center>Delete user</center></DialogTitle>
        <DialogContent  >
        </DialogContent >

        do you want to delete the 
        <input type="text" className="inputcss"    name="name" value={user.id} ></input>
        user
        <DialogContentText >
          <center className="buttoncss">
          <Button onClick={
                ()=>{props.deleterow(user.id)}
                } >Delete</Button>
          <Button onClick={()=>{
            props.setdelete(false);
        } }>Cancel</Button>
        </center>
        </DialogContentText>
      </Dialog>
        </div>
    )
}

export default Deletetable;