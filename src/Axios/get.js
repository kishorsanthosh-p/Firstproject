import { useState,useEffect} from "react";
import axios from "axios";
import Update from "./update";
import Adduser from "./add";
const APL="https://6409737ed16b1f3ed6d2b1bf.mockapi.io/user";
const Read =()=>{
    const [update,setupdate]= useState(false);
    const [adduser,setadduser]= useState(false);
    const add=()=>{
        setadduser(true);
    }
    const intialformstate={id:"",name:"",date:"",status:"",location:"",teamname1:"",teamname2:""}
   const [currentuser,setcurrentuser]=useState(intialformstate)
    const updateuser=(user)=>{
        setupdate(true);
        setcurrentuser({id:user.id,name:user.users.name,date:user.users.date,location:user.users.location
            ,teamname1:user.users.teamname1,teamname2:user.users.teamname2,status:user.users.status});   
     }
     // delete the row
    const deleteuser=async(id)=>{
        await axios.delete(APL + "/" + id);
        getPosts() 
    }
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const { data: res } = await axios.get([APL]);
        setPosts(res);
      };
  useEffect(() => {
    getPosts();
  });
    return(
        <div>
            <button onClick={add}>Adduser</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Teamname1</th>
                        <th>Teamname2</th>
                        <th>States</th>                        
                    </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td> {post.users.name} </td>
                <td> {post.users.date} </td>
                <td> {post.users.location} </td>
                <td> {post.users.teamname1} </td>
                <td> {post.users.teamname2} </td>
                <td> {post.users.status} </td>
                <td>
                  <button onClick={()=> updateuser(post)}>
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={()=> deleteuser(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
                </tbody>
            </table>
            {adduser?(<Adduser setadduser={setadduser}/>):(null)}
            {update?(<Update currentuser={currentuser} setupdate={setupdate}/> ):(null)}
        </div>
    )
}
export default Read;