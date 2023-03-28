import { useState } from "react";
import Data from "./userdata.json"
const Sorting=()=>{
    const [user,setuser] =useState(Data);
    const [date,setdate] =useState(true);
const handleShow = () => {
  if (date===true) {
    const sorted = user.sort((a, b)=> 
      new Date(a.date) - new Date(b.date)
    );
    setuser(sorted);
    setdate(false);
  } 
  if(date=== false) {
    const sorted = user.sort((a, b)=> 
      new Date(b.date) - new Date(a.date)
    );
    setuser(sorted);
    setdate(true);
  }
};
    return(
        <div>
            <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>location</th>
                            <th onClick={handleShow} >date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* maping function */}
                        {user.map((user)=>(
                            <tr key={user.id}>
                                <td  >{user.id}</td>
                                <td >{user.name}</td>
                                <td >{user.location}</td>
                                <td >{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}
export default Sorting;