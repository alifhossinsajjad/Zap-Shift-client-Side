import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../Components/Loading/LOading';
import Forbidden from '../Components/Forbiden/Forbidden';

const RiderRoute = ({children}) => {
   const { loading,user } = useAuth();

  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loading/>
      </div>
    );
  }

  if (role !== "rider") {
    return <Forbidden/>;
  }

  return children;
};

export default RiderRoute;