import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./MainLaout";
import Home from "../Pages/Home/Home";



const MyRouter = createBrowserRouter ([
    {
        path:'/',
        element:<MainLaout></MainLaout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default MyRouter;