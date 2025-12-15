import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const auth = localStorage.getItem("auth");

    if (!auth || auth !== "true") {
        return <Navigate to="/tasks" replace />;
    }

    return children;
};

export default ProtectedRoute;
