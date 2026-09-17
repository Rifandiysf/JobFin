import { useAuth } from "@/hooks/use-auth";
import { Navigate, Outlet } from "react-router-dom";

export function GuestRoute() {
    const { user, loading } = useAuth();

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}