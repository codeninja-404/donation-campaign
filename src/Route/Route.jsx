import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import DonationDetails from "../Page/DonationDetails/DonationDetails";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <DonationDetails></DonationDetails>,
        loader:()=>fetch("/data.json")
      },
    ],
  },
]);

export default appRoute;
