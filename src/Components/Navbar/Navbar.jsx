import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo5.png";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="backdrop-blur-2xl fixed w-full z-50 top-0 shadow py-4 px-10 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="w-36">
            <img src={logo} className="object-cover w-full" />
          </div>
        </Link>

        {/* Links */}
        <ul className="flex gap-6 font-semibold text-[#6C63FF] ">
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
      </div>
    </nav>
  );
}
