import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./MainLaout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
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
            },
            {
                path:'/About',
                element:<About></About>
            },
            {
                path:'/Career',
                element:<Career></Career>
            }
        ]
    }
])

export default MyRouter;