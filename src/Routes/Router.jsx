import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import RootLayout from "../Layout/RootLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";

import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";

import DashBoardLayout from "../Layout/DashBoardLayout";
import About from "../Pages/About/About";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancled from "../Pages/Dashboard/Payment/PaymentCancled";
import PaymentsHistory from "../Pages/Dashboard/PaymentsHistory/PaymentsHistory";
import Register from "../Pages/Auth/Register";
import ApproveRiders from "../Pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";

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
        Component: About,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivetRoute>
            <Rider />
          </PrivetRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivetRoute>
            <SendParcel />
          </PrivetRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
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
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
    {
        path: "payment-cancled",
        Component: PaymentCancled,
      },
      {
        path: "payments-history",
        Component: PaymentsHistory,
      },
      {
        path:"approve-riders",
        Component:ApproveRiders
      },
      {
        path:"users-management",
        Component:UsersManagement
      }
    ],
  },
]);

export default router;
