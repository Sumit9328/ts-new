// components/Navbar.js
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#00448b] text-white text-[15px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-0 py-2">
          {/* Left Side */}
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Image
                src="/assets/images/phone.png"
                alt="Phone"
                width={16}
                height={16}
              />
              {/* <a href="tel:+919910712786" className="no-underline"> */}
              +91-99107-12786
              {/* </a> */}
            </span>
            <span className="flex items-center space-x-1">
              <Image
                src="/assets/images/envelope.png"
                alt="Email"
                width={18}
                height={18}
              />
              {/* <a href="mailto:accounts@delconindustries.in" className="no-underline"> */}
              accounts@delconindustries.in
              {/* </a> */}
            </span>
          </div>

          {/* Right Side */}
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

      {/* Main Navbar */}
      <nav className="bg-[#00448b] text-gray-200 shadow-md text-[15px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-0 py-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/images/dalcon-logo.png"
              alt="Delcon Industries Logo"
              width={200}
              height={60}
              priority
            />
          </div>

          {/* Links */}
          <ul className="flex space-x-6 font-medium p-0 m-0">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>


            <li className="group">
              <button className="no-underline">Manufacturing ▼</button>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded shadow-lg py-2 w-48 z-50 left-[62%] top-25">
                <li className="py-2">
                  Advantage
                </li>
                <li className="py-2">
                  Advantage
                </li><li className="py-2">
                  Advantage
                </li>
              </ul>
            </li>

            <li>
              Advantage
            </li>
            <li>
              Design Capibility
            </li>

            <li>
              Contact us
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
