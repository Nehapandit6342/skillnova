import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/features/landing/pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
