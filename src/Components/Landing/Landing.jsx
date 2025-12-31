import Home from "../Home/Home";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Voices from "../Voices/Voices";

export default function Landing() {
  return (
    <>
      <section className="scroll-mt-10" id="home">
        <Home />
      </section>
      <section className="scroll-mt-10" id="about">
        <About />
      </section>
      <section className="scroll-mt-10" id="courses">
        <Courses />
      </section>
      <section className="scroll-mt-10" id="voice">
        <Voices />
      </section>
    </>
  );
}
