import React from "react";
import Cards from "./Cards";

export default function Courses() {
  return (
    <>
      <div className="container-fluid mx-auto min-h-screen flex-col justify-center items-center btnn py-15 px-8">
        <div className="mb-5">
          <h2 className="text-center text-4xl text-purple-800 font-bold pb-2">
            Our Cources
          </h2>
          <p className="text-center mt-3 leading-relaxed">
            Upon successful completion of your course, you will be awarded a
            prestigious certificate that celebrates your academic achievements,
            recognizes your expertise,
            <br />
            and propels you forward in your personal and professional journey!
          </p>
        </div>
        <Cards />
      </div>
      <div className="container-fluid courseBack flex justify-center items-center">
        <div className="text-purple-50 font-bold text-center lg:text-xl text-sm lg:leading-10 leading-6 space-y-4">
          <p>
            كَيْفَ يَسْتَطيعُ الإنْسَانُ أنْ يُقاوِمَ جَمالَ هَذِهِ اللغَةِ،
            ومَنْطِقَها السَّليمَ، وَسِحْرَها الفَريدَ؟ فَجيرانُ العَرَبِ
            أنْفُسهم في البُلْدانِ التي فَتَحُوها <br />" سَقَطوا صَرْعى سِحِرِ
            تِلْكَ اللغةِ وَقَد انْدَفَعوا يَتَكَلَمونَها بِشَغَفٍ." زيغريد
            هونكه
          </p>
          <p>
            "How can anyone resist the beauty of this language, it’s sound logic
            and unparalleled charm? The neighbours of the
            <br /> Arabs themselves in countries they conquered have fallen for
            the charm of that language, And they rushed...speaking it with
            passion." Sigrid Hunke
          </p>
        </div>
      </div>
    </>
  );
}
