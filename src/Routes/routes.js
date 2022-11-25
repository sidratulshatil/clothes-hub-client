import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
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
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>, children: [
            { path: '/dashboard/allbuyers', element: <AllBuyers></AllBuyers> },
            { path: '/dashboard/allsellers', element: <AllSellers></AllSellers> },
            { path: '/dashboard/reporteditems', element: <ReportedItems></ReportedItems> },
            { path: '/dashboard/addaproduct', element: <AddAProduct></AddAProduct> },
            { path: '/dashboard/myorders', element: <MyOrders></MyOrders> },
            { path: '/dashboard/myproducts', element: <MyProducts></MyProducts> },
            { path: '/dashboard/payment/:id', element: <Payment></Payment> },
        ]
    }
])
export default router