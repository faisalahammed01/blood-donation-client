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
import SearchPage from "./Layout/Home/SearchPage";
import Fund from "./Layout/Home/Payment/Fund";
import AdminHome from "./Dashboard/Admin/AdminHome";
import AdminUsers from "./Dashboard/Admin/AdminUsers";
import AdminRequrest from "./Dashboard/Admin/AdminRequrest";
import AdminBlogs from "./Dashboard/Admin/AdminBlogs";
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
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/fund",
        element: (
          <PrivateRoute>
            <Fund></Fund>
          </PrivateRoute>
        ),
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
        path: "profile",
        element: <Profile></Profile>,
      },
      // !----------------Admin----------------------
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "AdminUsers",
        element: <AdminUsers></AdminUsers>,
      },
      {
        path: "AdminRequest",
        element: <AdminRequrest></AdminRequrest>,
      },
      {
        path: "AdminBlogs",
        element: <AdminBlogs></AdminBlogs>,
      },
      //! ----------------Volunteer-----------------------

      //! -----------------Donor----------------------
      {
        index: true,
        element: <DonorHome></DonorHome>,
      },
      {
        path: "DonorCreate",
        element: <Create></Create>,
      },
      {
        path: "Home",
        element: <DonorHome></DonorHome>,
      },
      {
        path: "DonorMy",
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
        element: (
          <PrivateRoute>
            <Detailas></Detailas>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
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
