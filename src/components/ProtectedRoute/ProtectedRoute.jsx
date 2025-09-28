// src/components/ProtectedRoute/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/auth/useAuth";

export default function ProtectedRoute({ children }) {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" replace />;
}
