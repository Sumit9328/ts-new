"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";


import "@splidejs/react-splide/css"; // default splide css

const slides = [
  {
    text: "FILTERS – METAL END CAPS, FILTER ELEMENTS END CAPS FOR - AIR, OIL & FUEL FILTERS, AIR OIL SEPARATORS END CAPS, FDA COMPLIANT FILTERS END CAPS, OIL MIST FILTERS END CAPS, WATER SEPARATORS, HEAVY AUTOMOBILE, EARTHMOVING’S, HYDRAULIC, BYPASS FILTERS, GAS ICAL, CYLINDRICAL, SQUARE & TWIST LOCK TYPE, PULSE JET 3 & 4 JET, THREAD, TWO BOLT THREADED, CURLY BRACKET ETC.",
    author: "MIA KUNIS",
    role: "METAL END CAPS, FILTER ELEMENTS END CAPS FOR",
    img: "/assets/images/Schnecke10.gif",
  },
  {
    text: "FILTERS – METAL END CAPS, FILTER ELEMENTS END CAPS FOR - AIR, OIL & FUEL FILTERS, AIR OIL SEPARATORS END CAPS, FDA COMPLIANT FILTERS END CAPS, OIL MIST FILTERS END CAPS, WATER SEPARATORS, HEAVY AUTOMOBILE, EARTHMOVING’S, HYDRAULIC, BYPASS FILTERS, GAS TU FOR CONICAL, CYLINDRICAL, SQUARE & TWIST LOCK TYPE, PULSE JET 3 & 4 JET, THREAD, TWO BOLT THREADED, CURLY BRACKET ETC.",
    author: "MIA KUNIS",
    role: "METAL END CAPS, FILTER ELEMENTS END CAPS FOR",
    img: "/assets/images/133096bd7fba0a46a6d4c044db475c15.gif",
  },
  {
    text: "FILTERS – METAL END CAPS, FILTER ELEMENTS END CAPS FOR - AIR, OIL & FUEL FILTERS, AIR OIL SEPARATORS END CAPS, FDA COMPLIANT FILTERS END CAPS, OIL MIST FILTERS END CAPS, WATER SER CONICAL, CYLINDRICAL, SQUARE & TWIST LOCK TYPE, PULSE JET 3 & 4 JET, THREAD, TWO BOLT THREADED, CURLY BRACKET ETC.",
    author: "MIA KUNIS",
    role: "METAL END CAPS, FILTER ELEMENTS END CAPS FOR",
    img: "/assets/images/Schnecke10.gif",
  },
];

export default function Slider() {
  return (
    <section className="bg-[#edeff1] py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 3000,
            arrows: false,
            pagination: true,
            pauseOnHover: true,
          }}
          aria-label="Testimonials"
        >
          {slides.map((slide, i) => (
            <SplideSlide key={i}>
              <div className="grid lg:grid-cols-3 gap-8 md:gap-10 items-center">
                {/* Left Content */}
                <div className="lg:col-span-2 text-[#0f172a] flex flex-col gap-5 animate-fade-up">
                  <div>
                    <span className="text-xs md:text-sm italic text-slate-500">Real Stories, Restful Nights</span>
                    <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mt-2 text-[#0f172a]">Hear From Our Satisfied Sleepers</h2>
                  </div>
                  <p className="text-base md:text-xl leading-relaxed text-slate-700 normal-case">
                    “{slide.text}”
                  </p>
                  <div className="flex flex-col gap-1 tracking-wide text-xs md:text-sm">
                    <span className="font-semibold uppercase text-slate-800">{slide.author}</span>
                    <span className="text-slate-600 normal-case">{slide.role}</span>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  <Image
                    src={slide.img}
                    alt={slide.author}
                    width={600}
                    height={500}
                    className="w-full h-full max-w-xl object-cover rounded-xl transition-all duration-700 hover:scale-[1.02] shadow-xl"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
