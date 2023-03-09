import { useState} from "react";
import axios from "axios";
const APL="https://6409737ed16b1f3ed6d2b1bf.mockapi.io/data";
const Create =()=>{
   const [name,setname] =  useState("");
   const [data,setdata] =  useState("");
   const [status,setstatus] =  useState("");
   const [teamname1,setteamname1] =  useState("");
   const [teamname2,setteamname2] =  useState("");
   const [location,setlocation] =  useState("");
   const post= async()=>{
    await axios.post(APL,{
        name,data,status,location,teamname1,teamname2
    })
   } 
    return(
        <div>
        <form>
            <label >Name</label>&nbsp;&nbsp;
            <input  onChange={event => setname(event.target.value)}  value={name}></input><br/>
            <label>Date</label>&nbsp;&nbsp;
            <input type="date"onChange={event=> setdata(event.target.value)} className="inputcss" name="date" value={data}></input><br/>
            <label >Location</label>&nbsp;&nbsp;
            <input onChange={event=> setlocation(event.target.value)} className="inputcss" name="location" value={location}></input><br/>
            <label >Teamname1</label>&nbsp;&nbsp;
            <input onChange={event=> setteamname1(event.target.value)} className="inputcss" name="teamname1" value={teamname1}></input><br/>
            <label >Teamname2</label>&nbsp;&nbsp;
            <input onChange={event=> setteamname2(event.target.value)} className="inputcss" name="teamname2" value={teamname2}></input><br/>
            <label >States</label>&nbsp;&nbsp; 
            <select  onChange={event=> setstatus(event.target.value)} className="inputcss" name="status" value={status} >
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