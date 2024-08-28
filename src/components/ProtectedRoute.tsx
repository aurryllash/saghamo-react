import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loading from "./Loading";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
      
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }
  if (!user) return <Navigate to="/signin" />;

  return children;
};

export default ProtectedRoute;
