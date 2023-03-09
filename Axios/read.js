import { useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const APL="https://6409737ed16b1f3ed6d2b1bf.mockapi.io/data";
const Read =()=>{
    const navigate =useNavigate();
    const updateuser=(post)=>{
        localStorage.setItem("id",post.id)
        localStorage.setItem("name",post.name) 
        localStorage.setItem("date",post.date) 
        localStorage.setItem("location",post.location) 
        localStorage.setItem("teamname1",post.teamname1)
        localStorage.setItem("teamname2",post.teamname2) 
        localStorage.setItem("status",post.status)   
        navigate('/update') 
     }
    const deleteuser=async(id)=>{
        await axios.delete(APL + "/" + id);
        getPosts() 
    }
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const { data: res } = await axios.get(apiEndPoint);
        setPosts(res);
      };
  const apiEndPoint = APL;
  useEffect(() => {
    getPosts();
  });
    return(
        <div>
            read
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
                <td> {post.name} </td>
                <td> {post.data} </td>
                <td> {post.location} </td>
                <td> {post.teamname1} </td>
                <td> {post.teamname2} </td>
                <td> {post.status} </td>
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
        </div>
    )
}
export default Read;