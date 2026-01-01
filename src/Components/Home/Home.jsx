import heroImg from "../../assets/hero.png";
export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#F8FAFF]">
        {/* MESH BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          {/* Purple */}
          <div
            className="
          absolute -top-40 -left-40
          h-175 w-175
          rounded-full
          bg-[#f7ebff]
          opacity-80
          blur-[140px]
        "
          />

          {/* Blue */}
          <div
            className="
          absolute top-20 right-50
          h-150 w-150
          rounded-full
          bg-[#bcf8f5]
          opacity-80
          blur-[140px]
        "
          />

          {/* Pink */}
          <div
            className="
          absolute bottom-50 left-1/4
          h-162.5 w-162.5 rounded-full
          bg-[#ffdde3]
          opacity-80
          blur-[150px]
        "
          />

          {/* Soft Purple Accent */}
          <div
            className="
          absolute top-1/3 left-1/2
          h-125 w-125
          rounded-full
          bg-[#d2cdfd]
          opacity-70
          blur-[130px]
        "
          />

          {/* Light White Fog */}
          <div
            className="
          absolute inset-0
          bg-white
          opacity-40
        "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="grid md:grid-cols-1 mid:grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] leading-tight">
                Discover <br />
                <span className="text-[#6C63FF]">
                  the Elegance <br />
                  of Arabic Language
                </span>
              </h1>

              <p className="mt-6 text-lg text-[#4B5563] max-w-lg">
                At Yalla 3rabi, we are dedicated to teaching Arabic with a focus
                on professionalism and cultural understanding, enriching the
                journey of non-native speakers.
              </p>
              <p className="mt-4 text-lg text-[#4B5563] max-w-lg">
                Explore our tailored Arabic courses designed to enhance learning
                and ensure student success.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-3xl animate__animated animate__fadeInRight bg-white/70 p-10 shadow-xl backdrop-blur-md">
              <div className=" rounded-2xl bg-[#EEF3FF]">
                <img src={heroImg} className="h-100 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="aboutSec h-[40vh] px-5 lg:px-0 flex justify-center items-center lg:text-2xl text-medium">
        <div className="text-center space-y-3">
          <p className="text-purple-50 font-bold ">
            بَعْدَ دِراسَتِي اللغَةَ العَرَبِيَّةَ، اِكْتَشَفْتُ أنَّهُ قَد
            أَصْبَحَ لِفَمي عَقَلٌ ." مايا تسينوفا"
          </p>
          <p className="text-purple-50 font-bold">
            "After I have studied Arabic language, I found out that my mouth has
            a mind" Maya Tsenkova
          </p>
        </div>
      </div>
    </>
  );
}
