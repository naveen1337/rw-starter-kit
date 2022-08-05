import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "../pages/home";
import MapPage from "../pages/map/map-page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
    </Routes>
  );
}
