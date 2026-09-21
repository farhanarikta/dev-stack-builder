import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Navbar */}
        <div className="h-20 flex items-center justify-between">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="flex items-center md:flex-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img
              src={logo}
              alt="Dev Stack logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </button>

            <button className="px-4 py-2 rounded-full text-sm font-semibold text-white gradient-theme hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;