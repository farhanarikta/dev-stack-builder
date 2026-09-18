import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
       
{/* Logo */}
{/* Logo */}
<div className="flex items-center">
  <img
    src={logo}
    alt="Dev Stack logo"
    className="w-24 h-24 object-contain"
  />
</div>


        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Home
          </a>

          <a href="#technologies" className="text-gray-700 hover:text-orange-500">
            Technologies
          </a>

          <a href="#projects" className="text-gray-700 hover:text-orange-500">
            Projects
          </a>

          <a href="#about" className="text-gray-700 hover:text-orange-500">
            About
          </a>

          <a href="#contact" className="text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-gray-700 hover:text-orange-500">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;