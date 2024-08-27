import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  console.log(user)
    if(!user) 
    return <Navigate to="/signin" replace />

    console.log('User from protected Route: ', user)
    return children
  
};

export default ProtectedRoute;
