import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Adding = (props)=>{
    const initialFormState = {id:null,name:"",date:"",status:""}
    const [users,setuser] =  useState(initialFormState)
    const handleinputchange=(event)=>{
    const {name,value}= event.target
    setuser({...users,[name]:value})
   }
   
    return(<div> 
        <Dialog open={props} >
        <DialogTitle >
          <center>Add The User</center></DialogTitle>
        <DialogContent  className="form-container"  >
        <label className="labelcss">id</label>&nbsp;&nbsp;
        <input type="text" className="inputcss"  onChange={handleinputchange} name="id" value={users.id} ></input><br/>
            <label className="labelcss">Name</label>&nbsp;&nbsp;
            <input type="text" className="inputcss" onChange={handleinputchange} name="name" value={users.name}></input><br/>
            <label className="labelcss">Date</label>&nbsp;&nbsp;
            <input type="date"onChange={handleinputchange} className="inputcss" name="date" value={users.date}></input><br/>
            <label className="labelcss">States</label>&nbsp;&nbsp; 
            <select  onChange={handleinputchange} className="inputcss" name="status" value={users.status} >
                <option value="*"></option>
                <option value="End">End</option>
                <option value="Live">Live</option>
                <option value="upcoming">Upcoming</option>
            </select>
        </DialogContent>
        <DialogContentText >
          <center className="buttoncss">
          <Button onClick={
            event=>{
                if(!users.id||!users.name||!users.date||!users.status)return;
                event.preventDefault();
                props.adduser(users);
                setuser(initialFormState);
                }} >Update</Button>
          <Button onClick={()=>{
            props.setadding(false);
        } }>Cancel</Button>
        </center>
        </DialogContentText>
      </Dialog>
        </div>
    )
}
export default Adding;