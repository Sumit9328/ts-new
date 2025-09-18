"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // default splide css

const slides = [
  {
    id: 1,
    image: "/assets/images/4576200_orig.gif",
    text: "Caption One",
  },
  {
    id: 2,
    image: "/assets/images/e487fc11366327.560f68bd132bc.gif",
    text: "Caption Two",
  },
  {
    id: 3,
    image: "/assets/images/clipboard-image (3).png",
    text: "Caption Three",
  },
  {
    id: 4,
    image: "/assets/images/download.gif",
    text: "Caption Four",
  },
  {
    id: 5,
    image: "/assets/images/Schnecke10.gif",
    text: "Caption Five",
  },
];

const ImageSlider = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          MANUFACTURING FACILITIES
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
         DELCON INDUSTRIES is Equipped all latest Machinery required to manufacture Sheet metal Products, Plant is equipped For Fabricating, Deep Drawn Components & others sheet Metals components
        </p>
      </div>

      {/* Splide Slider */}
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
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
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
              <div className="w-full h-56 relative mb-2">
                <Image
                  src={slide.image}
                  alt={slide.text}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-gray-700 text-center font-medium">{slide.text}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageSlider;
