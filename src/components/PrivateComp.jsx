import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// PrivateComponent me props passed handle by Outlet
const PrivateComp = () => {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to={"/signup"} />;
};

export default PrivateComp;
