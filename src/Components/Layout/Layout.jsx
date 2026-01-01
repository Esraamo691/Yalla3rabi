import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTop";

export default function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  );
}
