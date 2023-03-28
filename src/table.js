import { useState } from "react";
import Data from"./data.json";

const Table =()=>{
    const [user] =useState(Data);
    return(
        <div>
            <div>
                <h1>normal table the data in give static form</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>location</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>jenith</td>
                            <td>nazareth</td>
                            <td>29.06.2023</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ajees</td>
                            <td>chenni</td>
                            <td>21.06.2023</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>finny</td>
                            <td>ooty</td>
                            <td>12.06.2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1>using maping function to dispaly the data in the table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>location</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* maping function */}
                        {user.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.location}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table;