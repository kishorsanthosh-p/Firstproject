import axios from "axios";
import { useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
const APL="https://6409737ed16b1f3ed6d2b1bf.mockapi.io/data";
const Update =()=>{
    const [id,setid] =  useState(""); 
    const [name,setname] =  useState("");
   const [date,setdate] =  useState("");
   const [status,setstatus] =  useState("");
   const [teamname1,setteamname1] =  useState("");
   const [teamname2,setteamname2] =  useState("");
   const [location,setlocation] =  useState("");
   const navigate =useNavigate();
   const updateuser = async()=>{
    await axios.put(APL+"/"+id,{name,date,status,location,teamname1,teamname2});   
    navigate('/') 
   }
   useEffect(()=>{
    setid(localStorage.getItem("id"))
    setname(localStorage.getItem("name"))
    setdate(localStorage.getItem("date"))
    setlocation(localStorage.getItem("location"))
    setteamname1(localStorage.getItem("teamname1"))
    setteamname2(localStorage.getItem("teamname2"))
    setstatus(localStorage.getItem("status"))
   },[]) 
    return(
        <div>
            <form>
                <label className="labelcss">Name</label>
            <input type="text" className="inputcss" onChange={event=> setname(event.target.value)} name="name" value={name}></input><br/>
            <label className="labelcss">Date</label>&nbsp;&nbsp;
            <input type="date"onChange={event=> setdate(event.target.value)} className="inputcss" name="date" value={date}></input><br/>
            <label className="labelcss">Location</label>&nbsp;&nbsp;
            <input type="text"onChange={event=> setlocation(event.target.value)}  className="inputcss" name="location" value={location}></input><br/>
            <label className="labelcss">Teamname1</label>&nbsp;&nbsp; 
            <input type="text"onChange={event=> setteamname1(event.target.value)} className="inputcss" name="teamname1" value={teamname1}></input><br/>
            <label className="labelcss">Teamname2</label>&nbsp;&nbsp; 
            <input type="text"onChange={event=> setteamname2(event.target.value)} className="inputcss" name="teamname2" value={teamname2}></input><br/>
            <label className="labelcss">States</label>&nbsp;&nbsp; 
            <select  onChange={event=> setstatus(event.target.value)} className="inputcss" name="status" value={status} >
              <option value="End">End</option>
              <option value="Live">Live</option>
              <option value="upcoming">Upcoming</option>
            </select>
            </form>
            <button onClick={updateuser} >Update</button>
        </div>
    )
}
export default Update; 