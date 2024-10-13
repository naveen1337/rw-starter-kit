import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "../pages/home";
import MapPage from "../pages/map/map-page";
import Product from "../pages/product";
import Todo from "../pages/Todo";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/product" element={<Product/>} />
      <Route path="/todos" element={<Todo/>} />
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
