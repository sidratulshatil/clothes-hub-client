import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CategoryProducts from "../Pages/Home/Category/CategoryProducts";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <SignUp></SignUp> },
            { path: '/category/:id', element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>, loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`) },
        ]
    }
])
export default router