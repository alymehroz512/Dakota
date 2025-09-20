import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navabr";   // make sure the file is named Navbar.jsx
import Home from "./pages/Home";            // adjust the path if your Home.jsx lives elsewhere
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

// A layout component to include Navbar on desired pages
function Layout({
  children
}) {
  return (
    <>
      <Navbar />
      <main>{children || <Outlet />}</main>
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
        {/* Routes that share the Navbar layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
           */}
        </Route>
        {/* Routes without the Navbar layout (e.g., a dedicated 404 page) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
