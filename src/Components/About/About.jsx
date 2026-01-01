import profileImg from "../../assets/aboutt.jpg";
export default function About() {
  return (
    <section className="min-h-screen bg-linear-to-br p-12 container-fluid from-purple-200 to-purple-50 px-6 mx-auto">
      <div className="bg-white relative rounded-3xl overflow-hidden min-h-screen shadow-xl px-8">
        <div className="lg:flex  justify-between  pb-7 lg:pb-0 items-center">
          <div className=" space-y-6 lg:w-6/12  pt-5 mb-16">
            <h2 className="lg:text-5xl text-3xl text-purple-800 font-semibold  mt-5">
              ABOUT ME
            </h2>
            <p className="lg:mt-7 mt-10">
              Ahlan! I'm Arwa, an experienced Arabic teacher from Cairo, Egypt.
              I'm passionate about helping students like you learn Arabic.
              Specializing in teaching both Modern Standard Arabic (MSA) &
              <span className="text-purple-400">
                Egyptian Colloquial Arabic
              </span>
              (ECA).
            </p>
            <div className="bg-[#F6F8FF] shadow-2xl rounded-3xl p-5">
              <h2 className="text-2xl  text-sky-800 font-semibold mb-3 ">
                Experience
              </h2>
              <p className="leading-6">
                With 8 years of teaching experience and over 6,200 hours in
                person and 1,200 hours online. I've had the privilege of working
                with students from ages 4 to 70+ from all over the world - from
                Europe, the Americas, Asia, and Africa.
              </p>
            </div>
            <div className="bg-[#FDECEF] shadow-2xl rounded-3xl p-5">
              <h2 className="text-2xl  text-rose-800 font-semibold mb-3 ">
                Teaching Approach
              </h2>
              <p className="leading-6">
                My approach combines language skills with cultural insights. I
                believe that learning a language is not just about grammar and
                vocabulary. But also about understanding the people, traditions,
                and customs.. Helping you speak Arabic and that makes it so
                unique.
              </p>
            </div>
            <div className="bg-[#EDEBFF] shadow-2xl rounded-3xl p-5">
              <h2 className="text-2xl  text-purple-800 font-semibold mb-3 ">
                Learning Material
              </h2>
              <p className="leading-6">
                I use a variety of materials tailored to your level, including
                books, games, videos, films, articles, and stories, to enrich
                your knowledge and provide an engaging learning experience.
              </p>
            </div>
            <div className="bg-emerald-100  shadow-2xl rounded-3xl p-5">
              <h2 className="text-2xl  text-emerald-800 font-semibold mb-3 ">
                Getting Started
              </h2>
              <p className="leading-6">
                Whether you're a complete beginner or looking to level up your
                Arabic skills, I'm here to guide you every step of the way and
                to help you navigate the exciting journey of learning Arabic.
                So, what are you waiting for? yalla book your 30-minute trial
                lesson, we'll assess your level, discuss your goals in Arabic,
                and choose the best learning resources for you. Let's get
                started on this Arabic adventure together!
              </p>
            </div>
          </div>

          <div className="xl:w-6/12 lg:w-6/12 w-full">
            <div className="z-10  relative ">
              <div className="absolute md:right-52 top-12  rounded-full xl:size-90 -z-20 xl:right-30 lg:right-0 right-15 md:size-72 size-60  max-sm:size-52 max-sm:right-0  bg-purple-300" />
              <img
                src={profileImg}
                className="xl:w-[50%] md:w-[40%] md:left-40 lg:w-[60%] w-[60%] relative xl:left-40 left-10 top-10 z-20 bg-linear-to-b from-[#302e3036] to-[#372137ec] max-sm:w-[80%] max-sm:left-5 rounded-full border-2 border-purple-200"
              />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5 mt-30 ">
              <div className="bg-purple-50 max-sm:w-full rounded-3xl shadow-xl animate__animated animate__fadeInDown backdrop-blur-3xl md:w-5/12 p-4 text-center ">
                <p className="  font-medium">Expertise Years</p>
                <p className="lg:text-4xl text-2xl mb-2 font-bold ">8 Years</p>
              </div>
              <div className=" backdrop-blur-3xl max-sm:w-full bg-purple-50 md:w-5/12 rounded-3xl shadow-xl animate__animated animate__fadeInDown p-4 text-center ">
                <p className="  font-medium">Classroom Mastery</p>
                <p className="lg:text-4xl text-2xl mb-2 font-bold ">6,200</p>
              </div>
              <div className=" backdrop-blur-3xl max-sm:w-full bg-purple-50 md:w-5/12 rounded-3xl shadow-xl animate__animated animate__fadeInDown p-4 text-center ">
                <p className="  font-medium">Online Impact</p>
                <p className="lg:text-4xl text-2xl mb-2 font-bold ">1,200+</p>
              </div>
              <div className=" backdrop-blur-3xl max-sm:w-full bg-purple-50 md:w-5/12 rounded-3xl shadow-xl animate__animated animate__fadeInDown p-4 text-center ">
                <p className="  font-medium">All Ages</p>
                <p className="lg:text-4xl text-2xl mb-2 font-bold ">4-70+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:size-52 size-46 bg-purple-200 rounded-full absolute -right-20 -top-20"></div>
      </div>
    </section>
  );
}
