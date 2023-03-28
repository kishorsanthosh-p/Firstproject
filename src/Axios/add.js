import { useState} from "react";
import axios from "axios";
const APL="https://6409737ed16b1f3ed6d2b1bf.mockapi.io/user";
const Create =(props)=>{const initialFormState = 
    {name:"",date:"",status:"",location:"",teamname1:"",teamname2:""}
const [users,setuser] =  useState(initialFormState)
const handleinputchange=(event)=>{
const {name,value}= event.target
setuser({...users,[name]:value})
}
   const post= async()=>{
    await axios.post(APL,{users})
    props.setadduser(false);
    initialFormState();
   } 
    return(
        <div>
        <form>
            <label >Name</label>&nbsp;&nbsp;
            <input  onChange={handleinputchange}  name="name" value={users.name}></input><br/>
            <label>Date</label>&nbsp;&nbsp;
            <input type="date"onChange={handleinputchange} className="inputcss" name="date" value={users.data}></input><br/>
            <label >Location</label>&nbsp;&nbsp;
            <input onChange={handleinputchange} className="inputcss" name="location" value={users.location}></input><br/>
            <label >Teamname1</label>&nbsp;&nbsp;
            <input onChange={handleinputchange} className="inputcss" name="teamname1" value={users.teamname1}></input><br/>
            <label >Teamname2</label>&nbsp;&nbsp;
            <input onChange={handleinputchange} className="inputcss" name="teamname2" value={users.teamname2}></input><br/>
            <label >States</label>&nbsp;&nbsp; 
            <select  onChange={handleinputchange} className="inputcss" name="status" value={users.status} >
                <option value="*"></option>
                <option value="End">End</option>
                <option value="Live">Live</option>
                <option value="upcoming">Upcoming</option>
            </select>
        </form><div>
        <button onClick={
                post} >Save</button>
        </div></div>
    )
}
export default Create;