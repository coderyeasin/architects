"use client";
import Link from "next/link";
import { useState } from "react";

interface navType {
  name: string;
  path: string;
}

const navLinks: navType[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "#" },
  { name: "Contact Us", path: "#" },
  { name: "Login", path: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="font-work flex flex-col md:flex-row justify-between items-center py-6 md:py-10 gap-4 md:gap-0 relative">
        <Link
          href="#"
          className="font-bold text-2xl md:text-[45px] text-textPrimary mb-2 md:mb-0"
        >
          G3 Architects
        </Link>
        {/* Hamburger Icon for Mobile & Medium */}
        <button
          className="lg:hidden absolute right-4 top-6 z-30 p-2 rounded focus:outline-none focus:ring-2 focus:ring-textPrimary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className="block w-6 h-0.5 bg-[#424242] mb-1 transition-transform duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#424242] mb-1 transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className="block w-6 h-0.5 bg-[#424242] transition-transform duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          ></span>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row justify-center items-center gap-x-20">
          {navLinks.map((item, i) => (
            <li
              key={i}
              className="font-medium text-base lg:text-[18px] text-[#424242] leading-7"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile & Medium Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        <ul
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-30 flex flex-col items-center pt-24 gap-8 transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {navLinks.map((item, i) => (
            <li
              key={i}
              className="font-medium text-lg text-[#424242] leading-7"
              onClick={() => setMenuOpen(false)}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
