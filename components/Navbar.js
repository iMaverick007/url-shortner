import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex md:flex-row justify-between px-3 items-center text-white flex-col">
      <div className="logo font-bold text-2xl">
        <Link href="/">Url Shortner</Link>
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <a href="https://github.com/iMaverick007/url-shortner" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
              Github
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
