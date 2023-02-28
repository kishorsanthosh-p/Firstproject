import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Edittable = (props)=>{
   const [user,setuser] =useState(props.currentuser);
   const handleinputchange=(event)=>{
    const {name,value}= event.target
    setuser({...user,[name]:value})
   }
   
    return(<div  className="popup" > 
        <Dialog open={props.editing} >
        <DialogTitle >
          <center>Edit the details</center></DialogTitle>
        <DialogContent  className="form-container"  >
          <label className="labelcss">id</label>&nbsp;&nbsp;
        <input type="text" className="inputcss"  onChange={handleinputchange} name="name" value={user.id} ></input><br/>
            <label className="labelcss">Name</label>&nbsp;&nbsp;
            <input type="text" className="inputcss" onChange={handleinputchange} name="name" value={user.name}></input><br/>
            <label className="labelcss">Date</label>&nbsp;&nbsp;
            <input type="date"onChange={handleinputchange} className="inputcss" name="date" value={user.date}></input><br/>
            <label className="labelcss">States</label>&nbsp;&nbsp; 
            <select  onChange={handleinputchange} className="inputcss" name="status" value={user.status} >
    <option value="End">End</option>
    <option value="Live">Live</option>
    <option value="upcoming">Upcoming</option>
  </select>
        </DialogContent>
        <DialogContentText >
          <center className="buttoncss">
          <Button onClick={
            event=>{
                event.preventDefault();
                if(!user.id||!user.name||!user.date||!user.status)return;
                props.updateuser(user.id,user);}} >Update</Button>
          <Button onClick={()=>{
            props.setediting(false);
        } }>Cancel</Button>
        </center>
        </DialogContentText>
      </Dialog>
        </div>
    )
}
export default Edittable;