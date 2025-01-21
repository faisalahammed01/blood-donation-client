import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Layout/Home/Home";
import LayOut from "./Layout/Outlet/LayOut";
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";
import Blog from "./Pages/Blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./Providers/PrivateRoute";
import Profile from "./Dashboard/Profile";
import Create from "./Dashboard/Donor/Create";
import DonorHome from "./Dashboard/Donor/DonorHome";
import Update from "./Dashboard/Donor/Update";
import Detailas from "./Dashboard/Donor/Detailas";
import MyDonation from "./Dashboard/Donor/MyDonation";
import DonationRequrest from "./Layout/Donation/DonationRequrest";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/DonationRequest",
        element: <DonationRequrest></DonationRequrest>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "singUp",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // By default
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      // ----------------Admin----------------------

      // -----------------Donor----------------------
      {
        path: "/dashboard/DonorCreate",
        element: <Create></Create>,
      },
      {
        path: "/dashboard/Home",
        element: <DonorHome></DonorHome>,
      },
      {
        path: "/dashboard/DonorMy",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/dashboard/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/DonationUp/${params.id}`),
      },
      {
        path: "/dashboard/details/:id",
        element: <Detailas></Detailas>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      // ----------------Volunteer-----------------------
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
