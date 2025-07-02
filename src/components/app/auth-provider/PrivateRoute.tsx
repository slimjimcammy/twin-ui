import { useAuth } from "./AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const auth = useAuth();

  if (!auth.user) return <Navigate to="/" />;
  return <Outlet />;
}
