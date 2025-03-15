import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Weather from "./Weather";
import AOS from "aos"; // Add AOS import
import "aos/dist/aos.css"; // Add AOS styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS with a slight delay
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: false,
        easing: "ease-in-out",
      });
      AOS.refresh();
    }, 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(initAOS);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activePath, setActivePath] = useState(location.pathname);
  useEffect(() => {
    setActivePath(location.pathname);
    // Refresh AOS when route changes to handle new DOM elements
    AOS.refresh();
  }, [location.pathname]);

  // Add effect to refresh AOS when mobile menu toggles
  useEffect(() => {
    AOS.refresh();
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full shadow-md transition-colors duration-300 z-50 ${
        isScrolled ? "bg-blue-600" : "bg-transparent md:bg-[rgba(0,0,0,0.3)]"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex-shrink-0">
            <img className="h-10 w-auto sm:h-12" src={logo} alt="Logo" />
          </Link>
          <div className="h-8 border-l border-gray-400 hidden sm:block"></div>
          <div className="flex-shrink-0">
            <Weather />
          </div>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {["/", "/Rooms", "/Explore", "/Book", "/Contact"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                className={`relative hover:text-gray-300 transition-colors ${
                  activePath === path
                    ? "after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px]"
                    : ""
                }`}
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            )
          )}
        </div>

        <button
          className="md:hidden p-2 focus:outline-none rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-blue-600 text-white py-2 space-y-2 text-center"
          data-aos="fade-down" // Optional: Add animation to mobile menu
        >
          {["/", "/Rooms", "/Explore", "/Book", "/Contact"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                className={`block py-2 px-4 hover:bg-blue-700 transition-colors ${
                  activePath === path ? "underline decoration-white" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;