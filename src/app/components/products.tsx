"use client"
import React, { useState } from "react";
import Image from "next/image";

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "DEEP DRAWN - METALS",
      subtitle: "COMPONENTS, PARTS & PRODUCTS",
      image: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
      description: "High-precision deep drawn metal components for industrial applications",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "SHEET METALS - STAMPING PARTS",
      subtitle: "& PRECISE COMPONENTS",
      image: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
      description: "Precision stamped sheet metal parts with exceptional accuracy",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      title: "FILTERS – TAP PLATE ASSEMBLIES",
      subtitle: "/ BAFFLE ASSEMBLIES",
      image: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
      description: "Advanced filtration solutions for various industrial needs",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      title: "FILTERS – METALS END CAPS",
      subtitle: "FOR AIR-OIL FILTRATION",
      image: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
      description: "Durable metal end caps designed for optimal filtration performance",
      color: "from-violet-500 to-pink-600",
    },
    {
      id: 5,
      title: "FILTERS - BOWLS / CANS",
      subtitle: "/ HOUSINGS / CANISTERS",
      image: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
      description: "Complete housing solutions for filter systems and assemblies",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 6,
      title: "FILTERS– HEPA AND PANEL",
      subtitle: "FILTER FRAMES",
      image: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
      description: "Professional-grade frames for HEPA and panel filter systems",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] py-14 md:py-16 px-3 md:px-4">
      <div className="max-w-7xl mx-auto px-1 md:px-2 lg:px-0">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0f172a] mb-3 md:mb-4 animate-fade-in">
            OUR PRODUCTS
          </h1>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${hoveredProduct === product.id ? "scale-[1.02]" : ""
                }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 0.08}s`,
                animation: "slideUp 0.6s ease-out forwards",
              }}
            >
              {/* Gradient Background Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Image Area */}
                <div className="flex justify-center mb-5 md:mb-6">
                  <div
                    className={`w-44 h-44 md:w-60 md:h-60 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] text-center mb-1 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.title}
                </h3>

                {/* Product Subtitle */}
                <p className="text-xs md:text-sm font-medium text-slate-600 text-center mb-3 md:mb-4">
                  {product.subtitle}
                </p>

                {/* Description (appears on hover) */}
                <div className="flex-grow flex items-end">
                  <p
                    className={`text-sm text-slate-700 text-center leading-relaxed transition-all duration-300 normal-case ${hoveredProduct === product.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                      }`}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div
                  className={`mt-5 md:mt-6 transition-all duration-300 ${hoveredProduct === product.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }`}
                >
                  <button
                    className={`w-full py-2.5 md:py-3 px-5 md:px-6 bg-gradient-to-r ${product.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200`}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-200 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-slate-100 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;
