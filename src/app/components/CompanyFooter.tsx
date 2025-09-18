"use client";
import React from "react";
import Image from "next/image";

const CompanyFooter = () => {
  const partners = [
    { id: 1, logo: "/assets/images/4.png" },
    { id: 2, logo: "/assets/images/5.png" },
    { id: 3, logo: "/assets/images/6.png" },
    { id: 4, logo: "/assets/images/7.jpg" },
    { id: 5, logo: "/assets/images/8.png" },
  ];

  const products = [
    "FILTERS – METALS END CAPS FOR AIR-OIL FILTRATION",
    "DEEP DRAWN - METALS COMPONENTS, PARTS & PRODUCTS",
    "SHEET METALS - STAMPING PARTS & PRECISE COMPONENTS",
    "FILTERS – TAP PLATE ASSEMBLIES / BAFFLE ASSEMBLIES",
    "FILTERS - BOWLS / CANS / HOUSINGS / CANISTERS",
  ];

  const importantLinks = ["Certificates", "Clients", "Quality", "Contact Us"];

  const socialIcons = [
    {
      name: "Facebook",
      logo: "/assets/images/facebook.png",
      bgColor: "bg-white",
    },
    {
      name: "Twitter",
      logo: "/assets/images/twitter.png",
      bgColor: "bg-white",
    },
    {
      name: "LinkedIn",
      logo: "/assets/images/linkedin.png",
      bgColor: "bg-white",
    },
    {
      name: "Instagram",
      logo: "/assets/images/instagram.png",
      bgColor: "bg-white",
    },
    {
      name: "Pinterest",
      logo: "/assets/images/pinterest.png",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[var(--background)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#0f172a] text-center mb-6 md:mb-8 tracking-tight">
            OUR PARTNERS
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center p-4 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer min-w-[140px] md:min-w-[160px] max-w-[180px] bg-white"
              >
                <div className="w-32 md:w-40 h-12 md:h-20 relative mb-2 md:mb-3">
                  <Image
                    src={partner.logo}
                    alt={""}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-700 text-center">
                  {""}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-5 md:py-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
            <div className="flex items-start space-x-3">
              <Image
                src="/assets/images/loc.png"
                className="mt-1.5 md:mt-2"
                alt="Location"
                width={20}
                height={20}
              />
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1">Address</h3>
                <p className="text-sm leading-relaxed normal-case">
                  Plot No. A-17, Phase -1 Naraina Industrial <br />
                  Area, New Delhi 110028 (INDIA)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Image
                src="/assets/images/phone.png"
                className="mt-1.5 md:mt-2"
                alt="Phone"
                width={20}
                height={20}
              />
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1">CALL US</h3>
                <p className="text-sm normal-case">
                  SUPPORT:{" "}
                  <span className="font-semibold">+91-9910-712-786</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Image
                src="/assets/images/envelope.png"
                className="mt-1.5 md:mt-2"
                alt="Email"
                width={20}
                height={20}
              />
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1">
                  EMAIL US
                </h3>
                <p className="text-sm">
                  <span className="hover:underline cursor-pointer">
                    accounts@delconindustries.in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#103b84] text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/assets/images/dalcon-logo.png"
                  alt="Delcon Industries"
                  width={150}
                  height={50}
                />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-400">
                    Delcon
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed normal-case">
                Manufacturers:-Automotive, Industrial & Locomotive Filtration
                Metals Components, Deep Drawn, Metals Stamping & Precise Sheet
                Metals Components Parts & Products.
              </p>

              <div className="flex space-x-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-9 h-9 md:w-10 md:h-10 ${social.bgColor} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <Image
                      src={social.logo}
                      alt={social.name}
                      width={18}
                      height={18}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
                PRODUCTS
              </h3>
              <ul className="space-y-2 md:space-y-3 p-0 m-0">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="text-[13px] md:text-[14px] text-slate-200 normal-case"
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
                IMPORTANT LINKS
              </h3>
              <ul className="space-y-2 md:space-y-3 p-0 m-0">
                {importantLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-[13px] md:text-[14px] text-slate-200 normal-case"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-center py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-slate-300 text-xs md:text-sm">
            © 2024 Delcon Industries. All rights reserved. |{" "}
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFooter;
