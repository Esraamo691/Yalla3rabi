import React from "react";
import Formy from "./Formy";
import imgCont from "../../assets/c14.jpg";
export default function Contact() {
  return (
    <>
      <div className="contact min-h-screen pb-6 flex pt-20 justify-center items-center">
        <div className="container rounded-2xl shadow-2xl shadow-gray-600 min-h-[90vh] bg-white">
          <div className="lg:flex  justify-between">
            <div className="lg:w-6/12 w-full p-9">
              <h2 className="text-4xl mb-7 font-semibold ">send message us</h2>
              <Formy />
            </div>
            <div className="lg:w-6/12 lg:flex hidden  min-h-[90vh] justify-between">
              <img
                src={imgCont}
                className="rounded-tr-2xl min-h-[90vh] rounded-br-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
