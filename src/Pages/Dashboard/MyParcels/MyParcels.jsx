import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const MyParcels = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = UseAxiosSecure();

  const {data : parcels = []} = useQuery({
    queryKey: ["myParcels", user?.email],
  

    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data
    },
  });

  return (
    <div>
      <h2>add of my all parcels : {parcels.length}</h2>
    </div>
  );
};

export default MyParcels;
