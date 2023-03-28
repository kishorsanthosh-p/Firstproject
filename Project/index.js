/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)
 
 Coded by www.creative-tim.com
 
  =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
 
 // @mui material components
 import Grid from "@mui/material/Grid";
 import Card from "@mui/material/Card";
 import Button from '@mui/material/Button';
 
 // Material Dashboard 2 React components
 import MDBox from "components/MDBox";
 import MDTypography from "components/MDTypography";
 
 // Material Dashboard 2 React example components
 import { useState } from "react";
 import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
 import DashboardNavbar from "examples/Navbars/DashboardNavbar";
 import Footer from "examples/Footer";
 import Tableuser from "./data/usertable";
 import Edittable from "./data/etable";
 import Deletetable from "./data/deletetable";
 import Adding from  "./data/adduser";
 import userdata from "./data/userdata";
 import "./data/style.css";
 
 function Tables() {
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
                   <Tableuser editRow={editRow} deleteuser={deleteuser} user={user} setuser={setuser}/>
                   <div>
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
 