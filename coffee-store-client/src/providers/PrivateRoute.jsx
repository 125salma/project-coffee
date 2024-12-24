import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-spinner text-primary text-center mt-18"></span>

  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoute;