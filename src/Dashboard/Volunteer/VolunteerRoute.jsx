import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import UseVolunteer from "./Usevolunteer";
import { AuthContext } from "../../Providers/AuthProvider";
const VolunteerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isVolunteer, isVolunteerLoading] = UseVolunteer();
  const location = useLocation();

  if (loading || isVolunteerLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isVolunteer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default VolunteerRoute;
