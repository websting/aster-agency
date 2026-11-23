
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

// Navigation bar component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the mobile menu is open

  // Navigation links for the navbar
  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
  ];
// Render the navbar component
  return (
    <header className="sticky top-0 z-50 bg-[#f8f8f5]">
      <nav className="max-w-350 mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="text-2xl font-bold tracking-tight text-neutral-950">
          aster<span className="text-lime-500">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-lime-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button default hidden-(mobile/smaller screens), but show on medium screens and above */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-3 bg-neutral-950 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-lime-400 hover:text-neutral-950 transition-all duration-300"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle the mobile menu open/close state
          className="md:hidden p-2 text-neutral-950"
          aria-label={menuOpen ? "Close menu" : "Open menu"} // Accessibility label for screen readers
          aria-controls="mobile-menu" // Indicates which element the button controls
          aria-expanded={menuOpen} // Indicates whether the menu is currently expanded or collapsed
        >
            {/* show the appropriate icon based on the menu state X or Hamburger */}
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION:  Drops a menu when someone clicks the hamburger button*/}
      {menuOpen && ( // if menuOpen is true, render the mobile menu, otherwise render nothing
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f8f8f5] border-t border-neutral-200 px-6 py-7 shadow-lg">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)} // Close the menu when a link is clicked
                className="text-lg font-medium text-neutral-800"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between bg-neutral-950 text-white px-5 py-4 rounded-full text-sm font-medium"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
