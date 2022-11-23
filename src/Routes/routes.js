import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <SignUp></SignUp> },
        ]
    }
])
export default router