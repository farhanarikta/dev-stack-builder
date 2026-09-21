import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack logo"
              className="w-20 h-20 object-contain"
            />

            <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-xs">
              Build your perfect developer stack with modern technologies
              and tools for your next project.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-900 transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;