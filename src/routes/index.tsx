import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayot from "../Layot/MainLayot";



 export  const routes=createBrowserRouter([{
    path:"/",
    element:<MainLayot/>,
    children:[
      {
        path:"/home",
        element:<App/>
      }
    ]
 },
 {
   path:"/login",
   element:<Login></Login>
 },
 {
   path:"/register",
   element:<Register></Register>
 }




])