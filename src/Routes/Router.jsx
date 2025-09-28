import { lazy } from "react";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

// Lazy load all page components
const DashboardPage = lazy(() => import("../Pages/Dashboard/DashboardPage"));
const AnalyticsPage = lazy(() => import("../Pages/Analytics/AnalyticsPage"));
const DatasetPage = lazy(() => import("../Pages/Dataset/DatasetPage"));
const GeospatialPage = lazy(() => import("../Pages/Geospatial/GeospatialPage"));
const ForecastPage = lazy(() => import("../Pages/Forecast/ForecastPage"));
const AlertPage = lazy(() => import("../Pages/Alert/AlertPage"));
const SettingPage = lazy(() => import("../Pages/Settings/SettingPage"));
const LoginPage = lazy(() => import("../Pages/Login/LoginPage"));
const SignUpPage = lazy(() => import("../Pages/Login/SignUpPage"));
const SamudraGyanChatBot = lazy(() => import("../Pages/AIChat/SamudraGyanChatBot"));
const NotFoundPage = lazy(() => import("../Pages/404PageNotFound/PageNoteFound"));
const routes = [
    // Public routes
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignUpPage /> },

    // Protected routes
    { path: "/", element: <ProtectedRoute><DashboardPage /></ProtectedRoute> },
    { path: "/analytics", element: <ProtectedRoute><AnalyticsPage /></ProtectedRoute> },
    { path: "/dataset", element: <ProtectedRoute><DatasetPage /></ProtectedRoute> },
    { path: "/geospatial", element: <ProtectedRoute><GeospatialPage /></ProtectedRoute> },
    { path: "/forecast", element: <ProtectedRoute><ForecastPage /></ProtectedRoute> },
    { path: "/alerts", element: <ProtectedRoute><AlertPage /></ProtectedRoute> },
    { path: "/settings", element: <ProtectedRoute><SettingPage /></ProtectedRoute> },
    { path: "/chatbot", element: <ProtectedRoute><SamudraGyanChatBot /></ProtectedRoute> },

    // 404 page
    { path: "*", element: <NotFoundPage /> },
];

export default routes;
