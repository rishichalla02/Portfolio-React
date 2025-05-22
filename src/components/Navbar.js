import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white bg-white bg-opacity-20 px-3 py-1 rounded-lg">
                RC
              </span>
            </div>
            <div className="hidden md:block ml-4">
              <span className="text-white font-semibold text-lg">
                Rishi Challa
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white hover:bg-opacity-10"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile navigation button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-200 p-2 rounded-md"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-700 to-purple-700 border-t border-white border-opacity-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-teal-200 hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}