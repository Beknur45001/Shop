import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";

const myRouter=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
   
        ]
    }
])

export default myRouter