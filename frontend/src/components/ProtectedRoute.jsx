import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";



function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);  // State to track authorization status

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));  // Handle errors during authentication
    }, []);

    // Function to refresh the token using the refresh token
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", { refresh: refreshToken });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);  // Mark as authorized
            } else {
                setIsAuthorized(false);  // Refresh failed, set authorization to false
            }
        } catch (error) {
            console.error("Error refreshing token:", error);
            setIsAuthorized(false);  // Set authorization to false if the refresh fails
        }
    };

    // Function to check the validity of the current access token
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);  // No token means user is not authorized
            return;
        }

        try {
            const decoded = jwt_decode(token);  // Decode the JWT token
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;  // Get current time in seconds

            // If token has expired, try refreshing it
            if (tokenExpiration < now) {
                await refreshToken();  // Refresh the token
            } else {
                setIsAuthorized(true);  // Token is valid, set authorized
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            setIsAuthorized(false);  // In case of any error with decoding, mark as unauthorized
        }
    };

    // Loading state
    if (isAuthorized === null) {
        return <div>Loading...</div>;  // Show a loading message while checking authorization
    }

    // Render the children (protected route) if authorized, or redirect to login
    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;