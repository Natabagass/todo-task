import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const token = sessionStorage.getItem("auth");

    if (!token || !token.startsWith(import.meta.env.VITE_SECRET_KEY)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
