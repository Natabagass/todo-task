import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    {/* Mengambil token */}
    const token = sessionStorage.getItem("auth");

    {/* Cek Token apakah sesuai */}
    if (!token || !token.startsWith(`${import.meta.env.VITE_SECRET_KEY}`)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
