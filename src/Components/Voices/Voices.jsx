import React from "react";
import { VoiceSlider } from "./VoiceSlider";

export default function Voices() {
  return (
    <>
      <div className="pt-16">
        <h2 className="text-center text-4xl text-purple-800 font-bold pb-2">
          Testimonials
        </h2>
        <div className="container-fluid h-[80vh] flex justify-center items-center  overflow-hidden">
          <div className="shadow-2xl h-[70vh] w-[90%] rounded-2xl flex justify-center items-center">
            <VoiceSlider />
          </div>
        </div>
      </div>
    </>
  );
}
