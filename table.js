export default function Table(props){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>date</th>
                        <th>states</th>
                        <th>acting</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user.length>0?(
                        props.user.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.date}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button onClick={()=>{props.editRow(user)}}>edit</button>
                                    <button onClick={()=>props.deleteuser(user.id)}>delete</button>
                                </td>
                            </tr>
                        )
                        )
                        ):(
                        <tr>
                            <td colSpan={5}>no data</td>
                        </tr>
                    )}   
                </tbody>
            </table>
        </div>
    )
}