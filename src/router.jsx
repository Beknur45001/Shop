import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/WishList";
import Notfount from "./Pages/Notfount";

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
            {
                path:"detail/:id",
                element:<Detail/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"wishlist",
                element:<Wishlist/>
            },
            {
                path:"*",
                element:<Notfount/>
            },
            
   
        ]
    }
])

export default myRouter