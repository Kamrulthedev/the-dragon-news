import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./MainLaout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
const MyRouter = createBrowserRouter ([
    {
        path:'/',
        element:<MainLaout></MainLaout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            }
        ]
    }
])

export default MyRouter;