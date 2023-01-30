import Table from "./Table";
import{useState} from "react"
import Edittable from "./table/Edittable";

export default function App(){
	const userdata=[
		{id:1,name:'aaa',date:'12/6/22',status:'online'},
		{id:2,name:'bbb',date:'13/6/22',status:'online'},
		{id:3,name:'ccc',date:'14/6/22',status:'online'},
		{id:4,name:'ddd',date:'15/6/22',status:'online'}
	];
	const deleteuser = (id)=>{
		setuser(user.filter((user)=>user.id!==id))
	}
	const[user,setuser]=useState (userdata);
	const [editing,setediting]=useState(false)
	const intialformstate={id:null,name:"",date:"",status:""}
	const [currentuser,setcurrentuser]=useState(intialformstate)
	const editRow =(user)=>{
		setediting(true);
		setcurrentuser({id:user.id,name:user.name,date:user.date,status:user.status});
	}
	const updateuser=(id,updateuser)=>{
		setediting(false);
		setuser(user.map((user)=>(user.id===id?updateuser:user)))
	}
	return(
		<div>
			<div>
				{editing?(<div>
					<h2>Edit user</h2>
					<Edittable
					setediting={setediting}
					updateuser={updateuser}
					currentuser={currentuser }/>
				</div>):(<div></div>)}
				
			</div>
			<Table editRow={editRow} deleteuser={deleteuser} user={user}/>
		</div>
	)
}