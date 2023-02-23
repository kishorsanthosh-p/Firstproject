import { useEffect, useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./text.css";

const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <div> 
          
            <Dialog open={props.setEditing}>
            <div className="some-class ">
        <DialogTitle className="form-header" >
        Edit the User
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
        
           
          <label>Id</label>
            <input className="form-input" type="text" onChange={handleInputChange} name="id" value={user.id} />
            <label>Name</label>
            <input className="form-input" type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Date</label>
            <input className="form-input" type="date" onChange={handleInputChange} name="date" placeholder="dd-mm-yyyy" value={user.date} />
            <label>Status</label>
            <select className="form-input" onChange={handleInputChange} name="status" value={user.status}> 
            <option>
              Live
            </option>
            <option>
              Upcoming
            </option>
            <option>
              End
            </option>
              </select>    
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <center>
          <Button className="button muted-button" onClick={
            event => {
                event.preventDefault();
                if(!user.id||!user.name||!user.date||!user.status) return;
                props.updatedUser(user.id,user);
            }
        }>
          Update
          </Button>
          <Button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>
          Cancel
          </Button></center>
        </DialogActions>
        </div>
      </Dialog>
     
    </div>
    )
}

export default EditUserForm;