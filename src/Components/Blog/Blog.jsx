import React from "react";
import coffeeImg from "../../assets/coffee3.jpg";
import teaImg from "../../assets/coff1.jpg";
import artImg from "../../assets/coffee4.jpg";
import CoffeeTeaCulture from "./CoffeeTeaCulture";
import EgyptianTeaCoffee from "./EgyptianTeaCoffee";
export default function Blog() {
  return (
    <>
      <div className="">
        {/* Home */}
        <div className="coffee coff ">
          <div className="container h-[90vh] flex items-center justify-between">
            <div className="lg:w-6/12 w-full px-10 lg:px-0">
              <h1 className="lg:text-5xl text-3xl text-gray-300 py-5 lg:leading-16">
                The Arabic Coffee and Tea Culture: A Symbol of Hospitality
              </h1>
              <p className="lg:text-xl text-lg text-gray-300">
                In the Arab world, coffee and tea are more than just beverages –
                they’re an integral part of the culture and tradition. For
                centuries, Arabs have welcomed guests with a steaming cup of
                coffee or tea, symbolizing hospitality, respect, and generosity.
              </p>
            </div>
          </div>
        </div>
        {/* Coffe & Tea */}
        <div className=" py-16 relative bg-[#160801]">
          <div className="container px-7 md:px-0 text-gray-300">
            <div className="md:flex mb-8 md:mb-0 md:justify-between">
              <div className="md:w-4/12 w-[80%] mx-auto relative  flex justify-center -top-30">
                <img src={coffeeImg} className="lg:w-[60%] w-full" />
              </div>
              <div className="md:w-7/12 w-full">
                <h2 className="text-3xl font-bold mb-8">The Arabic Coffee</h2>
                <p className="leading-7">
                  Arabic coffee, also known as “ahwa” is an essential part of
                  Arab culture. The coffee beans are finely ground and brewed in
                  a traditional coffee pot called “kanaka in Egyptian” and ”
                  cezve in Turkish”. The coffee is served in small cups, often
                  flavored with cardamom, and is an important part of social
                  gatherings and ceremonies. Egyptians prefer strong Turkish
                  coffee, often flavored with cardamom. Coffee is an integral
                  part of Egyptian social gatherings, often served in cafes and
                  homes.
                </p>
              </div>
            </div>
            <div className="md:flex items-center md:justify-between ">
              <div className="md:w-7/12 w-full mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-8">The Arabic Tea</h2>
                <p className="leading-7">
                  Arabic coffee, also known as “ahwa” is an essential part of
                  Arab culture. The coffee beans are finely ground and brewed in
                  a traditional coffee pot called “kanaka in Egyptian” and ”
                  cezve in Turkish”. The coffee is served in small cups, often
                  flavored with cardamom, and is an important part of social
                  gatherings and ceremonies. Egyptians prefer strong Turkish
                  coffee, often flavored with cardamom. Coffee is an integral
                  part of Egyptian social gatherings, often served in cafes and
                  homes.
                </p>
              </div>
              <div className="md:w-4/12 w-full flex order-first md:order-last justify-center ">
                <img src={teaImg} className="lg:w-[60%] w-[80%] mx-auto" />
              </div>
            </div>
            <div className="md:flex items-end md:justify-between ">
              <div className="md:w-4/12 w-full relative  flex justify-center md:-bottom-30 -bottom-10">
                <img src={artImg} className="lg:w-[60%] w-[80%] mx-auto" />
              </div>
              <div className="md:w-7/12 w-full pt-16 md:pt-0">
                <h2 className="text-3xl font-bold mb-8">The Art of Serving</h2>
                <p className="leading-7">
                  In Arab culture, serving coffee and tea is an art form. The
                  host carefully prepares the beverage, often using decorative
                  cups and trays. The guest is served with the right hand, as
                  the left hand is considered impolite. The host also ensures
                  that the guest’s cup is always full, as an empty cup is a sign
                  of poor hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CoffeeTeaCulture />
        <EgyptianTeaCoffee />
      </div>
    </>
  );
}
