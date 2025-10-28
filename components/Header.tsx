"use client";

import {
  CircleDollarSign,
  Handshake,
  Home,
  Phone,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={16} /> },
  { name: "About", path: "/about", icon: <CircleDollarSign size={16} /> },
  { name: "Services", path: "/services", icon: <Wrench size={16} /> },
  { name: "Partners", path: "/partners", icon: <Handshake size={16} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={16} /> },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-20 w-full flex justify-center items-center shadow-sm fixed top-0 left-0 z-50 ${
        hasScrolled && "bg-black text-white"
      }`}
    >
      <div className="mx-4 md:mx-8 max-w-7xl w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="evoc-digitals logo"
            width={144}
            height={71}
            className="h-[55px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                href={item.path}
                key={item.name}
                className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-[#55C514] font-semibold"
                    : "hover:text-[#55C514]"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full border-t border-gray-100 shadow-md md:hidden animate-slide-down">
          <nav className="flex flex-col items-start p-4 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  href={item.path}
                  key={item.name}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 text-sm w-full py-2 px-2 rounded-md transition-all ${
                    isActive
                      ? "text-[#55C514] bg-gray-100 font-medium"
                      : " hover:bg-gray-50 hover:text-[#55C514]"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
