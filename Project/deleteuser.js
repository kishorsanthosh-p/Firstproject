import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function Deleteuser(props) {
  const [user]= useState(props.currentuserid)
  return (
    <div>
     <Dialog open={props}> 
      <center>
        <DialogTitle id="alert-dialog-title">
          CONFIRMATION
        </DialogTitle>
        <DialogContent >
        confirm delete the row!
        </DialogContent>
        <DialogActions>
          <Button onClick={ ()=>{
            props.deleterow(user.id)
          }}>DELETE</Button>
          <Button onClick={ ()=>{
                props.setdeleting(false);
            } }>
            CANCEL
          </Button>
        </DialogActions>
        </center>
      </Dialog>
    </div>
  );
}
