import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
           path:'/' ,
           element:<Home></Home>
        },
        {
           path:'/donation' ,
           element:<Donation></Donation>
        },
        {
           path:'/statistics' ,
           element:<Statistics></Statistics>
        }
    ]
  },
]);

export default appRoute;