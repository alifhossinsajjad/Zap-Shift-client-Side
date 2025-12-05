import React from "react";
import useRole from "../../../hooks/useRole";
import Loading from "../../../Components/Loading/LOading";

import AdminDashboardHome from "./AdminDashboardHome";
import RidderDashboardHome from "./RidderDashboardHome";
import UserDashboardHome from "./UserDashboardHome";
const DashboardHome = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <Loading />;
  }

  if (role === "admin") {
    return <AdminDashboardHome />;
  } else if (role === "rider") {
    return <RidderDashboardHome />;
  } else {
    return <UserDashboardHome />;
  }
};

export default DashboardHome;
