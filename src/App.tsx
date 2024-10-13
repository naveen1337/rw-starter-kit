import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/notfound.page";
import { AppRoutes, Dashboard } from "./routes";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import { useDispatch, useSelector } from "react-redux";

export const queryClient = new QueryClient()

function App() {
  const playerRef = useRef<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
