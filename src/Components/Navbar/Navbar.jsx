import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo5.png";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { useState } from "react";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="backdrop-blur-2xl fixed w-full z-50 top-0 shadow py-4 sm:px-10 px-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="w-36">
            <img src={logo} className="object-cover w-full" />
          </div>
        </Link>

        {/* Links */}
        <div className="">
          <ul className="lg:flex hidden gap-6 font-semibold text-[#6C63FF] ">
            <li className="cursor-pointer" onClick={() => scrollTo("home")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("about")}>
              About Us
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("courses")}>
              Courses
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("voice")}>
              Testimonials
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <BsFillMenuButtonFill className="text-2xl text-[#6C63FF]" />
          </div>
        </div>
      </div>
      {open ? (
        <ul className="space-y-2 font-semibold text-[#6C63FF] text-end">
          <li className="cursor-pointer" onClick={() => scrollTo("home")}>
            Home
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo("about")}>
            About Us
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo("courses")}>
            Courses
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo("voice")}>
            Testimonials
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}
