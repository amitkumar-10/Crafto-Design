import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // for hamburger icons

function Navbar() {
  const [openProjects, setOpenProjects] = useState(false);       // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu toggle
  const menuRef = useRef(null); // ref for mobile menu

  // Close mobile menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <nav className="bg-brandGray shadow p-2 flex justify-between items-center relative z-50">
      {/* Logo */}
      <a href="/">
        <img
          src="/images/Crafto design 1.png"
          alt="Crafto Logo"
          style={{ height: '55px', width: 'auto', marginLeft: "50px" }}
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center relative mr-24">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>

        {/* Projects Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setOpenProjects(true)}
          onMouseLeave={() => setOpenProjects(false)}
        >
          <span className="cursor-pointer text-white hover:text-gray-300">Projects ▾</span>
          <AnimatePresence>
            {openProjects && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-6 left-0 bg-brandGray shadow rounded w-48 z-50"
              >
                <li className="p-2 hover:bg-brandGray">
                  <Link to="/projects/residential" className="text-white">Residential</Link>
                </li>
                
                <li className="p-2 hover:bg-brandGray">
                  <Link to="/projects/commercial" className="text-white">Commercial</Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        <li><Link to="/services" className="text-white hover:text-gray-300">Services</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
        <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-white mr-6"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef} // attach ref here
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gray-700 shadow-lg z-50 p-6 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-gray-300"
                >
                  Home
                </Link>
              </li>

              {/* Mobile Dropdown */}
              <li>
                <details className="cursor-pointer">
                  <summary className="list-none flex justify-between items-center text-white hover:text-gray-300">
                    Projects ▾
                  </summary>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <Link
                        to="/projects/commercial"
                        onClick={() => setMobileOpen(false)}
                        className="text-white hover:text-gray-300"
                      >
                        Commercial
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects/residential"
                        onClick={() => setMobileOpen(false)}
                        className="text-white hover:text-gray-300"
                      >
                        Residential
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-gray-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
