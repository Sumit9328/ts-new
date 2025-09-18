"use client"
import React, { useEffect, useRef, useCallback  } from 'react';
import Image from "next/image";

const DesignCapabilitySlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [perView, setPerView] = React.useState(3);

  const slides = [
    {
      id: 1,
      image: "/assets/images/Schnecke10.gif", // ✅ apna path (public/images/d1.png)
      title: "3D Curved Components",
      description: "Advanced curved pipe and component modeling with precision engineering",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 2,
      image: "/assets/images/Schnecke10.gif",
      title: "Technical Sheet Designs",
      description: "Detailed technical drawings and specifications for manufacturing",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100"
    },
    {
      id: 3,
      image: "/assets/images/Schnecke10.gif",
      title: "Cylindrical Components",
      description: "Precision cylindrical parts with complex geometries and tolerances",
      bgColor: "bg-gradient-to-br from-slate-50 to-slate-100"
    },
    {
      id: 4,
      image: "/assets/images/Schnecke10.gif",
      title: "Mechanical Assemblies",
      description: "Complete mechanical assembly designs with detailed part specifications",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    {
      id: 5,
      image: "/assets/images/Schnecke10.gif",
      title: "Industrial Components",
      description: "Heavy-duty industrial components designed for maximum durability",
      bgColor: "bg-gradient-to-br from-teal-50 to-teal-100"
    }
  ];

const nextSlide = useCallback(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
}, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(slides.length)) % Math.ceil(slides.length));
  };

 useEffect(() => {
  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval);
}, [nextSlide]); // ✅ dependency added
  // Responsive perView
  useEffect(() => {
    const updatePerView = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;
      if (width < 768) {
        setPerView(1);
      } else if (width < 1024) {
        setPerView(2);
      } else {
        setPerView(3);
      }
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  const trackWidthPercent = (slides.length * 100) / perView;
  const translatePercent = (currentSlide * 100) / perView;

  return (
    <div className=" py-14 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0f172a] mb-4 md:mb-6 tracking-tight">
            DESIGN CAPABILITY
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed normal-case">
            We offer complete reverse engineering services to provide part customisation, out-of-production replacement parts, casting molds, & more.
            We can produce 3D models, 2D drawings, Part technical Details and other Drafting services.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative" ref={sliderRef}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden px-2 md:px-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${translatePercent}%)`,
                width: `${trackWidthPercent}%`
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <div className={`${slide.bgColor} rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden h-96 group animate-fade-in-scale`}>
                    {/* ✅ Image Area */}
                    <div className="h-64 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>

                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={420}
                        height={120}
                        className="object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Decorative elements */}
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
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Progress Bar */}
        <div className="fixed bottom-0 left-0 w-full h-1 bg-slate-200">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DesignCapabilitySlider;
