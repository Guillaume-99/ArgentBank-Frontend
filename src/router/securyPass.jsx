import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
    const rememberMeChecked = localStorage.getItem("remember-me") === "true";
    const storage = rememberMeChecked ? localStorage : sessionStorage;
    const storedToken = storage.getItem("token");
    const token = storedToken || null;
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
