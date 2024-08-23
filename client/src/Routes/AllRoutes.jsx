import { Route, Routes } from "react-router-dom"
import SignIn from "./SignIn"
import CreatePrompt from "./Prompt"
import PrivateRoute from "./PrivateRoute"


const AllRoutes = () =>{
    return(
        <Routes>
         <Route path = "/" element = {<SignIn/>}></Route>
         <Route path="/create" element = {<PrivateRoute element = {<CreatePrompt/>}/>}/>
        </Routes>
    )
}
export default AllRoutes