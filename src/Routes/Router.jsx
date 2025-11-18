import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import RootLayout from "../Layout/RootLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/REgister";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";

import DashBoardLayout from "../Layout/DashBoardLayout";
import About from "../Pages/About/About";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () =>
          fetch("/public/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivetRoute>
            <Rider />
          </PrivetRoute>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivetRoute>
            <SendParcel />
          </PrivetRoute>
        ),
        loader: () =>
          fetch("/public/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout />
      </PrivetRoute>
    ),
    children : [
      {
        path: 'my-parcels',
        Component : MyParcels
      }
    ]
  },
]);

export default router;
