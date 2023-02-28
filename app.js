import Table from "./Usertable";
import{useState} from "react";
import Edittable from "./Etable";
import Deletetable from "./Deletetable";
import Adding from "./Adduser";
//import Deletetable from "./Deletetable";

export default function App(){
	const userdata=[
		{id:1,name:'aaa',date:'2023-03-22',status:'End'},
		{id:2,name:'bbb',date:'2023-04-25',status:'Live'},
		{id:3,name:'ccc',date:'2023-03-23',status:'Upcoming'},
		{id:4,name:'ddd',date:'2023-02-10',status:'Live'}
	];
	const [adding,setadding]=useState(false);
	const handleinputchange=()=>{
		setadding(true);
	   }
	const adduser = (users)=>{
		user.id = user.length + 1;
		setuser([...user,users]);
		setadding(false);
	}
	///delete table
	const intialformdelete={id:""}
	const [currentuserid,setcurrentuserid]=useState(intialformdelete);
	const [deleteuer,setdelete]=useState(false);
	const deleteuser = (user)=>{
		setdelete(true); 
		setcurrentuserid({id:user.id});
		// setcurrentuserid(user((user)=>user.id));
		//setuser(user.filter((user)=>user.id!==id)
	}
	const deleterow =(id)=>{
		setuser(user.filter((user)=>user.id!==id));
		setdelete(false);
	}

	///edit table
	const[user,setuser]=useState (userdata);
	const [editing,setediting]=useState(false);
	const intialformstate={id:null,name:"",date:"",status:""}
	const [currentuser,setcurrentuser]=useState(intialformstate);
	const editRow =(user)=>{
		setediting(true);
		setcurrentuser({id:user.id,name:user.name,date:user.date,status:user.status});
	}
	const updateuser=(id,updateuser)=>{
		setediting(false);
		setuser(user.map((user)=>(user.id===id?updateuser:user)));
	}
	return(
		<div>
			<button onClick={handleinputchange}>adduser</button>
			<div>
				{adding?(
					<div>
						<Adding 
						adduser={adduser}
						setadding={setadding}
						
						/>
					</div>
				):(
					<div>
					</div>
				)
				}
			</div>
			<div>
				{editing?(<div>
					<Edittable
					editing={editing}
					setediting={setediting}
					updateuser={updateuser}
					currentuser={currentuser }/>
				</div>):(<div></div>)}
        </div>
		<div>
			{ deleteuer?(<div>
				<Deletetable
				deleteuser={deleteuser}
				deleterow={deleterow}
				setdelete={setdelete}
				currentuserid={currentuserid}
				users={user}
				/>
			</div>):(<div>
				
			</div>)}
		</div>
			<Table 
			editRow={editRow} 
			deleteuser={deleteuser} 
			user={user}/>
			
      <div>
      </div>
		</div>
    
	)
} 