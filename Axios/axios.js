import Create from "./data/cread";
import Read from "./data/read";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Update from "./data/update";
const Axios =()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Read/>}/>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/update" element={<Update/>}/>
            </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default Axios;