import axios from "axios";
import { useState} from "react";
const APL="https://6409737ed16b1f3ed6d2b1bf.mockapi.io/user";
const Update =(props)=>{
    const [users,setuser] =useState(props.currentuser);
    const handleinputchange=(event)=>{
        const {name,value}= event.target
        setuser({...users,[name]:value})
       }
   const updateuser = async()=>{
    await axios.put(APL+"/"+users.id,{users});
    props.setupdate(false); 
   }
    return(
        <div>
            <form>
                <input value={users.id}></input>
                <label className="labelcss">Name</label>
            <input type="text" className="inputcss" onChange={handleinputchange} name="name" value={users.name}></input><br/>
            <label className="labelcss">Date</label>&nbsp;&nbsp;
            <input type="date"onChange={handleinputchange} className="inputcss" name="date" value={users.date}></input><br/>
            <label className="labelcss">Location</label>&nbsp;&nbsp;
            <input type="text"onChange={handleinputchange}  className="inputcss" name="location" value={users.location}></input><br/>
            <label className="labelcss">Teamname1</label>&nbsp;&nbsp; 
            <input type="text"onChange={handleinputchange} className="inputcss" name="teamname1" value={users.teamname1}></input><br/>
            <label className="labelcss">Teamname2</label>&nbsp;&nbsp; 
            <input type="text"onChange={handleinputchange} className="inputcss" name="teamname2" value={users.teamname2}></input><br/>
            <label className="labelcss">States</label>&nbsp;&nbsp; 
            <select  onChange={handleinputchange} className="inputcss" name="status" value={users.status} >
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