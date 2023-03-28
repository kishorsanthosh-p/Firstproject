import { useState } from "react";
import Data from "./userdata.json"
const Sorting=()=>{
    const [user] =useState(Data);
    const [orders, setorders]=useState(true);
const Sort =()=>{
  var table, rows,switching , i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  if(orders===true){
  while(switching){ 
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }}
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
      setorders(false);
  }}
if(orders===false){
  while(switching ){
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }}
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }}
  setorders(true);
  }}
    return(
        <div>
            <table id="myTable">
                    <thead>
                        <tr>
                            <th onClick={()=> Sort("")}>id</th>
                            <th>name</th>
                            <th>location</th>
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