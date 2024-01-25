
import Add from "./pages/Add"
import Detail from "./pages/Detail"
import Fav from "./pages/Fav"
import Home from "./pages/Home"
import SiteRoot from "./pages/SiteRoot"

const ROOT = [{
    path: "/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>,
    },
    {
        path:"Fav",
        element:<Fav/>,

    },
    {
        path:"/:id",
       element:<Detail/>,
    },
    {
        path:"Add",
        element:<Add/>
    }
       

]
}]
export default ROOT