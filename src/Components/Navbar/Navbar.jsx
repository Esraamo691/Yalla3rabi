import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo5.png";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(id);
      }, 0);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") return;
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "voice"];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Classes
  const scrollLinkClass = (id) => {
    if (location.pathname !== "/")
      return "cursor-pointer transition-all duration-300 hover:text-[#6C63FF] hover:scale-105";
    return `cursor-pointer transition-all duration-300 ${
      activeSection === id
        ? "text-white bg-[#6C63FF] px-3 py-1 rounded-lg shadow-md"
        : "hover:text-[#6C63FF] hover:scale-105"
    }`;
  };

  const pageLinkClass = ({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-white bg-[#6C63FF] px-3 py-1 rounded-lg shadow-md"
        : "hover:text-[#6C63FF] hover:scale-105"
    }`;

  return (
    <nav className="backdrop-blur-2xl fixed w-full z-50 top-0 shadow py-4 sm:px-10 px-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="w-36">
            <img src={logo} className="object-cover w-full" />
          </div>
        </Link>

        {/* Desktop Links */}
        <div>
          <ul className="lg:flex hidden gap-6 font-semibold">
            {/* Scroll Links */}
            <li
              className={scrollLinkClass("home")}
              onClick={() => scrollTo("home")}
            >
              Home
            </li>
            <li
              className={scrollLinkClass("about")}
              onClick={() => scrollTo("about")}
            >
              About Us
            </li>
            <li
              className={scrollLinkClass("courses")}
              onClick={() => scrollTo("courses")}
            >
              Courses
            </li>
            <li
              className={scrollLinkClass("voice")}
              onClick={() => scrollTo("voice")}
            >
              Testimonials
            </li>

            {/* Page Links */}
            <li>
              <NavLink to="/blog" className={pageLinkClass}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={pageLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <BsFillMenuButtonFill className="text-2xl text-[#6C63FF]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="space-y-2 font-semibold text-right mt-2">
          {/* Scroll Links */}
          <li
            className={scrollLinkClass("home")}
            onClick={() => scrollTo("home")}
          >
            Home
          </li>
          <li
            className={scrollLinkClass("about")}
            onClick={() => scrollTo("about")}
          >
            About Us
          </li>
          <li
            className={scrollLinkClass("courses")}
            onClick={() => scrollTo("courses")}
          >
            Courses
          </li>
          <li
            className={scrollLinkClass("voice")}
            onClick={() => scrollTo("voice")}
          >
            Testimonials
          </li>

          {/* Page Links */}
          <li>
            <NavLink
              to="/blog"
              className={pageLinkClass}
              onClick={() => setOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={pageLinkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
