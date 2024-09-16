"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import AppointmentDialog from "./AppointmentDialog";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header
      className={`bg-[#1A2126] z-[100] start-0 text-white shadow md:inset-x-0 ${
        isSticky
          ? "sticky top-0 md:translate-y-3 md:w-4/5 mx-auto md:rounded-full transition-all duration-300"
          : "w-full"
      }`}
    >
      <div
        className={`container mx-auto lg:px-10 px-5 py-5 flex items-center ${
          isSticky ? "justify-between" : "lg:justify-evenly justify-between"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="flex items-center">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <span className="self-center text-base lg:text-xl font-semibold whitespace-nowrap ml-2">
                Div
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 relative">
          <NavLink href="/">Home</NavLink>
          <DesktopDropdown
            title="About"
            isOpen={activeDropdown === "about"}
            toggleDropdown={() => toggleDropdown("about")}
            items={[
              { href: "/about", label: "About" },
              { href: "/faq", label: "FAQ" },
            ]}
          />
          <DesktopDropdown
            title="Services"
            isOpen={activeDropdown === "services"}
            toggleDropdown={() => toggleDropdown("services")}
            items={[
              { href: "/services", label: "Services" },
              { href: "/equipment", label: "Equipment" },
            ]}
          />
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Appointment Button */}
        <div className="hidden md:flex">
          <AppointmentDialog />
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-[#1A2126] border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <NavLinkMobile href="/" toggleMobileMenu={toggleMobileMenu}>
            Home
          </NavLinkMobile>
          <MobileDropdown
            title="About"
            isOpen={activeDropdown === "about"}
            toggleDropdown={() => toggleDropdown("about")}
            items={[
              { href: "/about", label: "About" },
              { href: "/faq", label: "FAQ" },
            ]}
            toggleMobileMenu={toggleMobileMenu}
          />
          <MobileDropdown
            title="Services"
            isOpen={activeDropdown === "services"}
            toggleDropdown={() => toggleDropdown("services")}
            items={[
              { href: "/services", label: "Services" },
              { href: "/equipment", label: "Equipment" },
            ]}
            toggleMobileMenu={toggleMobileMenu}
          />
          <NavLinkMobile href="/contact" toggleMobileMenu={toggleMobileMenu}>
            Contact
          </NavLinkMobile>
          <div className=" w-full">
            <AppointmentDialog />
          </div>
        </nav>
      </div>
    </header>
  );
};

// Desktop NavLink
function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-gray-400">
      {children}
    </Link>
  );
}

// Desktop Dropdown
function DesktopDropdown({ title, isOpen, toggleDropdown, items }) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center hover:text-gray-400 focus:outline-none"
      >
        {title} <FaChevronDown className="ml-1" />
      </button>
      <div
        className={`absolute left-0 mt-2 w-48 bg-[#1A2126] text-white rounded-md shadow-lg z-10 overflow-hidden transition-opacity duration-300 ${
          isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 hover:bg-[#2A363F] transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Mobile NavLink
function NavLinkMobile({ href, children, toggleMobileMenu }) {
  return (
    <Link
      href={href}
      onClick={toggleMobileMenu}
      className="hover:text-gray-400"
    >
      {children}
    </Link>
  );
}

// Mobile Dropdown
function MobileDropdown({
  title,
  isOpen,
  toggleDropdown,
  items,
  toggleMobileMenu,
}) {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 hover:text-gray-400 focus:outline-none"
      >
        {title}{" "}
        <FaChevronDown
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 ml-4 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={toggleMobileMenu}
              className="block hover:bg-[#2A363F] py-1 px-2 rounded transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
