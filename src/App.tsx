import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/notfound.page";
import { AppRoutes } from "./routes";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const playerRef = useRef<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </div>
  );
}

export default App;
