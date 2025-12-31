import React from "react";
import logoFoot from "../../assets/logo5.png";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <div className="container flex px-20 items-center justify-between h-[30vh] bg-linear-to-b from-[#F8FAFF] to-[#f7ebff] via-[#F8FAFF]">
        <p className="flex items-center gap-1">
          Follow Us On Instagram
          <FiInstagram />
        </p>
        <div className="w-60">
          <img src={logoFoot} className="object-cover w-full" />
        </div>
        <p>
          info@yalla3rabi.com © Copyright Feb.2025 yalla3rabi All rights
          reserved.
        </p>
      </div>
    </>
  );
}
