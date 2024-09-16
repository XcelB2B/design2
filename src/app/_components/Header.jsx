"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <span className="self-center text-base lg:text-xl font-semibold whitespace-nowrap  ml-2">
                Desire Div
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Appointment Button */}
        <Button className="hidden md:flex bg-yellow-500 text-gray-200 px-4 py-2 rounded-full hover:bg-yellow-600 text-lg text-center font-semibold">
          Appointment
        </Button>

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
        className={`md:hidden bg-[#2a2a2a] border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <NavLinkMobile href="/" toggleMobileMenu={toggleMobileMenu}>
            Home
          </NavLinkMobile>
          <NavLinkMobile href="/about" toggleMobileMenu={toggleMobileMenu}>
            About
          </NavLinkMobile>
          <NavLinkMobile href="/services" toggleMobileMenu={toggleMobileMenu}>
            Services
          </NavLinkMobile>
          <NavLinkMobile href="/contact" toggleMobileMenu={toggleMobileMenu}>
            Contact
          </NavLinkMobile>
          <Button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full">
            Appointment
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// Desktop NavLink
function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-gray-400">
      {children}
    </Link>
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
