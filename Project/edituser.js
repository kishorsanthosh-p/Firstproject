import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./style.css";
const Edittable = (props)=>{
   const [user,setuser] =useState(props.currentuser);
   const handleinputchange=(event)=>{
    const {name,value}= event.target
    setuser({...user,[name]:value})
   }
   return(
      <div >
        <Dialog open={props.editing} >
        <center>
        <DialogTitle >
          Edit the details</DialogTitle>
        <DialogContent  className="form-container"  >
            <label className="labelcss">Name</label>
            <input type="text" className="inputcss" onChange={handleinputchange} name="name" value={user.name}></input><br/>
            <label className="labelcss">Date</label>&nbsp;&nbsp;
            <input type="date"onChange={handleinputchange} className="inputcss" name="date" value={user.date}></input><br/>
            <label className="labelcss">Location</label>&nbsp;&nbsp;
            <input type="text"onChange={handleinputchange}  className="inputcss" name="location" value={user.location}></input><br/>
            <label className="labelcss">Teamname1</label>&nbsp;&nbsp; 
            <input type="text"onChange={handleinputchange} className="inputcss" name="teamname1" value={user.teamname1}></input><br/>
            <label className="labelcss">Teamname2</label>&nbsp;&nbsp; 
            <input type="text"onChange={handleinputchange} className="inputcss" name="teamname2" value={user.teamname2}></input><br/>
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
                if(!user.name||!user.date||!user.location||!user.teamname1||!user.teamname2||!user.status)return;
                props.updateuser(user.id,user);}} >Update</Button>
          <Button onClick={()=>{
            props.setediting(false);
        } }>Cancel</Button>
        </center>
        </DialogContentText>
        </center>
      </Dialog>
        </div>
    )
}
export default Edittable;