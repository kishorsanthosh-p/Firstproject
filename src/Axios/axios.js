import {BrowserRouter,Routes,Route} from "react-router-dom";
import Get from "./get"
const Axios =()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path="/get" element={<Get/>}/>
            </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default Axios;