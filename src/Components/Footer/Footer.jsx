import React from "react";
import logoFoot from "../../assets/logo5.png";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="container-fluid lg:flex py-4 lg:py-0 items-center justify-between h-[35vh] bg-linear-to-b from-[#F8FAFF] to-[#f7ebff] via-[#F8FAFF]">
        <div className="lg:w-4/12 w-[80%]">
          <img src={logoFoot} className="object-cover w-full" />
        </div>
        <div className="lg:w-5/12 space-y-3 w-[80%] mx-auto  ">
          <p className="flex items-center  mt-5 lg:mt-0 text-lg gap-1 lg:text-3xl cursor-pointer text-purple-950 font-semibold">
            <Link
              className="flex items-center gap-1 hover:text-shadow-amber-100 hover:text-shadow-lg"
              to={
                "https://www.instagram.com/yalla_egyptian_arabi?igsh=MW9uMWk1dnJ6OXdrdA=="
              }
            >
              Follow Us On Instagram
              <FiInstagram />
            </Link>
          </p>
          <p className="text-gray-500 font-medium text-md">
            info@yalla3rabi.com © Copyright Feb.2025 yalla3rabi All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}
