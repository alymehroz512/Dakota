import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navabr";   // make sure the file is named Navbar.jsx
import Home from "./pages/Home";            // adjust the path if your Home.jsx lives elsewhere

// Layout keeps Navbar on every page
function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// Simple 404 page (inline to avoid extra files)
function NotFound() {
  return (
    <div style={{ padding: "60px 24px", textAlign: "center" }}>
      <h1 style={{ marginBottom: 8 }}>404</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes share the same layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          {/* Optional redirect so /home goes to the root */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
