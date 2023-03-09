import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography"; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Edittable from "./data/etable";
import Deletetable from "./data/deletetable";
import Adding from  "./data/adduser";
import "./data/style.css";
import userdata from "./data/userdata";

function Tables() {
  const [order,setorder]=useState("ASC");
const Sorting =(col)=>{
    if(order ==="ASC"){
        const Sortied =[...user].sort((a,b)=>
        a[col].toLowerCase()>b[col].toLowerCase()?1:-1
    )
    setuser(Sortied);
    setorder("DSC");
}
if(order ==="DSC"){
    const Sortied =[...user].sort((a,b)=>
    a[col].toLowerCase()<b[col].toLowerCase()?1:-1
)
 setuser(Sortied);
setorder("ASC");
}
};
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
  const [adding,setadding]=useState(false);
	const handleinputchange=()=>{
		setadding(true);}
    const adduser = (users)=>{
      user.id = user.length + 1;
      setuser([...user,users]);
      setadding(false);
    }
  const[ user,setuser]=useState (userdata);
  const intialformdelete={id:""}
  const [currentuserid,setcurrentuserid]=useState(intialformdelete)
  const [deleteing,setdeleting]=useState(false);
  const deleteuser =(user) =>{
    setdeleting(true); 
    setcurrentuserid({id:user.id});
  }
  const deleterow = (id)=>{
    setdeleting(false);
    setuser(user.filter((user)=>user.id!==id))
  }
  const [editing,setediting]=useState(false)
  const intialformstate={id:null,name:"",date:"",status:""}
  const [currentuser,setcurrentuser]=useState(intialformstate)
  const editRow =(user)=>{
    setediting(true);
    setcurrentuser({id:user.id,name:user.name,date:user.date,location:user.location,teamname1:user.teamname1,teamname2:user.teamname2,status:user.status});
  }
  const updateuser=(id,updateuser)=>{
    setediting(false);
    setuser(user.map((user)=>(user.id===id?updateuser:user)))
  }  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Matches Table
                  <Button onClick={handleinputchange} className="addbutton" variant="h1" >AddUser</Button>
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
              <div>
                <div>
                {adding?(
				          <div>
						        <Adding adduser={adduser}	setadding={setadding}/>
					        </div>
			        	):(
				        	<div>
				        	</div>
				        )}
                </div>
                  <div>
                    {editing?(
                      <div>
                      <Edittable
                      setuser={setuser}
                      editing={editing}
                      setediting={setediting}
                      updateuser={updateuser}
                      currentuser={currentuser }/>
                    </div>):(<div></div>)}
                    </div>
                <div>
                    {deleteing?(<div>
                      <Deletetable
                      deleteing={deleteing}
                      setdeleting={setdeleting}
                      currentuserid={currentuserid}
                      deleterow={deleterow}
                      ></Deletetable>
                    </div>):(<div></div>)}
                    </div>
                  <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="myTable">
        <TableRow>
          <TableCell align="center"><b>Id</b><UnfoldMoreIcon className='icon'onClick={()=> Sort("")}/></TableCell>
          <TableCell align="center"><b>Name</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("name")}/></TableCell>
          <TableCell align="center"><b>Date</b><UnfoldMoreIcon className='icon' onClick={handleShow}/></TableCell>
          <TableCell align="center"><b>Location</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("location")}/></TableCell>  
          <TableCell align="center"><b>Team1</b><UnfoldMoreIcon className='icon' onClick={()=> Sorting("team1")}/></TableCell>
          <TableCell align="center"><b>Team2</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("team2")} /></TableCell>
          <TableCell align="center"><b>Status</b><UnfoldMoreIcon className='icon'onClick={()=> Sorting("status")} /></TableCell>
          <TableCell align="center"><b>Action</b></TableCell>
            </TableRow>
            <TableBody>
              {user.length > 0 ? (
                user.map((user) => (
                <TableRow key={user.id} align='center '>
                  <DataTableBodyCell align="center">{user.id}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.name}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.date}</DataTableBodyCell>
                  <DataTableBodyCell align="center">{user.location}</DataTableBodyCell>
                  <Tooltip title={user.team1}>
                    <DataTableBodyCell align="center">{user.teamname1}</DataTableBodyCell>
                  </Tooltip>
                  <Tooltip title={user.team2} align="center">
                    <DataTableBodyCell align="center">{user.teamname2}</DataTableBodyCell>
                  </Tooltip>
                  <DataTableBodyCell align="center">{user.status}</DataTableBodyCell>
                  <DataTableBodyCell align="center">
                    <Button
                     onClick={() => {
                      editRow(user);
                    }}
                    >Edit</Button>
                    <Button
                      onClick={() => {
                      deleteuser(user);
                      }}>Delete
                    </Button>
                  </DataTableBodyCell>
                </TableRow>
              ))
              ) : (
              <TableRow>
                <TableCell colSpan={8}>
                  <center><b>No Data</b></center>
                </TableCell>
              </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
                    </div>
                  </div>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default Tables;