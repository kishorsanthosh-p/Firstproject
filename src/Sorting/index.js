import {useNavigate} from "react-router-dom";
const Sorting=()=>{
    const navigate =useNavigate();
    const date=()=>{
        navigate('/sorting/date') 
    }
    const number=()=>{
        navigate('/sorting/number') 
    }
    const text=()=>{
        navigate('/sorting/text') 
    }
    return(
        <div>
            <button onClick={number}>number</button>
            <button onClick={date}>date</button>
            <button onClick={text}>text</button>
        </div>
    )
}
export default Sorting;