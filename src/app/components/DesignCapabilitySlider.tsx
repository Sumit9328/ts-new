"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const slides = [
  {
    id: 1,
    image: "/assets/images/Schnecke10.gif",
    title: "3D Curved Components",
    description: "Advanced curved pipe and component modeling with precision engineering",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    id: 2,
    image: "/assets/images/Schnecke10.gif",
    title: "Technical Sheet Designs",
    description: "Detailed technical drawings and specifications for manufacturing",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    id: 3,
    image: "/assets/images/Schnecke10.gif",
    title: "Cylindrical Components",
    description: "Precision cylindrical parts with complex geometries and tolerances",
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
  },
  {
    id: 4,
    image: "/assets/images/Schnecke10.gif",
    title: "Mechanical Assemblies",
    description: "Complete mechanical assembly designs with detailed part specifications",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  },
  {
    id: 5,
    image: "/assets/images/Schnecke10.gif",
    title: "Industrial Components",
    description: "Heavy-duty industrial components designed for maximum durability",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
  },
];

const DesignCapabilitySlider = () => {
  return (
    <div className="py-14 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0f172a] mb-4 md:mb-6 tracking-tight">
            DESIGN CAPABILITY
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed normal-case">
            We offer complete reverse engineering services to provide part customisation, out-of-production replacement parts, casting molds, & more. We can produce 3D models, 2D drawings, Part technical Details and other Drafting services.
          </p>
        </div>

        {/* Splide Slider */}
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            interval: 2000,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className={`${slide.bgColor} rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden h-96 group`}>
                {/* Image Area */}
                <div className="h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={420}
                    height={120}
                    className="object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-8 w-20 h-20 bg-blue-200/40 rounded-full blur-2xl"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed normal-case">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default DesignCapabilitySlider;
