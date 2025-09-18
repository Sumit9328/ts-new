"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-lg fixed top-0 z-50 w-full">
      <div className="bg-[#103b84] text-white text-[15px] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Image
                src="/assets/images/phone.png"
                alt="Phone"
                width={16}
                height={16}
              />
              +91-99107-12786
            </span>
            <span className="flex items-center space-x-1">
              <Image
                src="/assets/images/envelope.png"
                alt="Email"
                width={18}
                height={18}
              />
              accounts@delconindustries.in
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a href="#">
              <Image
                src="/assets/images/facebook.png"
                alt="Facebook"
                width={22}
                height={22}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/twitter.png"
                alt="Twitter"
                width={22}
                height={22}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/linkedin.png"
                alt="LinkedIn"
                width={22}
                height={22}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/pinterest.png"
                alt="Pinterest"
                width={22}
                height={22}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/instagram.png"
                alt="Instagram"
                width={22}
                height={22}
              />
            </a>
            <select className="bg-white text-black rounded px-2 py-1 text-sm">
              <option>Select Language</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      </div>

      <nav className="bg-[#00448b] text-gray-200 shadow-md text-[15px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center py-2">
            <Image
              src="/assets/images/dalcon-logo.png"
              alt="Delcon Industries Logo"
              width={150}
              height={40}
              className="object-contain md:w-[200px] md:h-[60px]"
              priority
            />
          </div>

          <ul className="hidden md:flex space-x-6 font-medium p-0 m-0">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li className="group relative">
              <button className="no-underline">Manufacturing ▼</button>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded shadow-lg py-2 w-48 z-50 top-full left-0">
                <li className="py-2 px-4 hover:bg-gray-700">Advantage 1</li>
                <li className="py-2 px-4 hover:bg-gray-700">Advantage 2</li>
                <li className="py-2 px-4 hover:bg-gray-700">Advantage 3</li>
              </ul>
            </li>
            <li>Advantage</li>
            <li>Design Capability</li>
            <li>Contact Us</li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none text-white text-2xl"
            >
              {mobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#00448b] text-gray-200 px-4 py-4 space-y-3 font-medium">
            <div className="flex flex-col space-y-2 mb-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/images/phone.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <span>+91-99107-12786</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/images/envelope.png"
                  alt="Email"
                  width={18}
                  height={18}
                />
                <span>accounts@delconindustries.in</span>
              </div>
            </div>

            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li className="relative">
              <button className="w-full text-left">Manufacturing ▼</button>
              <ul className="pl-4 mt-2 space-y-2">
                <li>Advantage 1</li>
                <li>Advantage 2</li>
                <li>Advantage 3</li>
              </ul>
            </li>
            <li>Advantage</li>
            <li>Design Capability</li>
            <li>Contact Us</li>
          </div>
        )}
      </nav>
    </header>
  );
}
