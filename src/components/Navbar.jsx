import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // for hamburger icons

function Navbar() {
  const [open, setOpen] = useState(false);       // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu toggle

  return (
    <nav className="bg-brandGray shadow p-2 flex justify-between items-center relative z-50">
      {/* Logo */}
      
      <a href="/">
        <img 
        className="ml-16,"
          src="/images/Crafto design 1.png" 
          alt="Crafto Logo" 
          style={{ height: '55px', width: 'auto', marginLeft:"50px" }} 
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center relative  mr-24 ">
        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>

        {/* Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="cursor-pointer text-white hover:text-gray-300">Projects ▾</span>
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-6 left-0 bg-brandGray shadow rounded w-48 z-50"
              >
                <li className="p-2 hover:bg-brandGray">
                  <Link to="/projects/commercial" className="text-white">
                    Commercial
                  </Link>
                </li>
                <li className="p-2 hover:bg-brandGray">
                  <Link to="/projects/residential" className="text-white">
                    Residential
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
      </ul>


      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-6 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

              {/* Mobile Dropdown */}
              <li>
                <details className="cursor-pointer">
                  <summary className="list-none flex justify-between items-center">
                    Projects ▾
                  </summary>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <Link to="/projects/commercial" onClick={() => setMobileOpen(false)}>
                        Commercial
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/residential" onClick={() => setMobileOpen(false)}>
                        Residential
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
