import {useNavigate} from "react-router-dom";

const Index =()=>{
    const navigate =useNavigate();
    const table=()=>{
        navigate('/table') 
    }
    const input=()=>{
        navigate('/input') 
    }
    const axios=()=>{
        navigate('/axios') 
    }
    const sorting=()=>{
        navigate('/sorting') 
    }
    return(
        <div>
            <button onClick={table}>table</button>
            <button onClick={input}>input</button>
            <button onClick={axios}>Axios</button>
            <button onClick={sorting}>Sorting</button>
        </div>
    )
}
export default Index;