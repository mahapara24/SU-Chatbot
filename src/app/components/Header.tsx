"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"; // Adjust this path to your actual logo
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger and Close icons

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className=" top-0 w-full bg-white text-black pt-4 shadow-md z-20 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center flex-wrap md:px-4">
        {/* Logo */}
        <div className="flex flex-wrap items-center">
          <Image
            src={logo}
            alt="University of Sindh Jamshoro"
            width={60}
            height={60}
            className="w-12 h-12 md:w-20 md:h-20" // Responsive image size
          />
          <div className="md:ml-4 text-wrap text-custom-blue">
            <h1 className="text-xl md:text-2xl font-bold">
              University of Sindh Jamshoro
            </h1>
            <p className="text-sm">The oldest University of the country</p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="mx-2 text-2xl focus:outline-none"
          >
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4 md:mt-0 w-full md:w-auto">
          <form className="flex items-center space-x-2 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-64 px-3 py-2 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-custom-blue"
            />
            <button
              type="submit"
              className="bg-custom-blue text-white px-4 py-2 rounded-md hover:bg-custom-blue/80"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Blue navigation bar */}
      <div className="bg-custom-blue mt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Navigation */}
          <nav
            className={`${
              navOpen ? "flex flex-col" : "hidden"
            } md:flex md:flex-row text-white md:space-x-4 w-full md:w-auto`}
          >
            <Link className="hover:text-gray-200 py-2" href="/">
              Home
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/news">
              News
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/about">
              About
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/academic">
              Academic
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/administration">
              Administration
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/campuses">
              Campuses
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/journals">
              Research Journals
            </Link>
            <Link className="hover:text-gray-200 py-2" href="/facilities">
              Facilities
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="mailto:info@usindh.edu.pk"
              className="text-sm text-white"
            >
              info@usindh.edu.pk
            </Link>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
