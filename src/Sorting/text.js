import { useState } from "react";
import Data from "./userdata.json"
const Sorting=()=>{
    const [user,setuser] =useState(Data);
    const [order,setorder]=useState("ASC");
const Sorting =(col)=>{
    if(order ==="ASC"){
        const Sortied =[...user].sort((a,b)=>
        a[col].toLowerCase()>b[col].toLowerCase()?1:-1
    )
    setorder("DSC"); 
    setuser(Sortied);
    
}
if(order ==="DSC"){
    const Sortied =[...user].sort((a,b)=>
    a[col].toLowerCase()<b[col].toLowerCase()?1:-1
)
setorder("ASC");
 setuser(Sortied);
}
};
    return(
        <div>
            <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th onClick={()=> Sorting("name")}>name</th>
                            <th onClick={()=> Sorting("location")}>location</th>
                            <th >date</th>
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