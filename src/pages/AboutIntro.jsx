import React, { useState } from "react";

const images = [
 
  "https://images.unsplash.com/photo-1600494448850-6013c64ba722?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/images/WhatsApp5.jpg",
  "/images/WhatsApp1.jpg",
  "/images/WhatsApp2.jpg",
  "/images/WhatsApp3.jpg",
  "/images/WhatsApp4.jpg",
  "https://images.unsplash.com/photo-1643949914872-317d6047f107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D", // Living room
  "https://images.unsplash.com/photo-1600494448850-6013c64ba722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D", // Kitchen
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
];

export default function DesignStudio() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row gap-12">
      {/* Images Section */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center">
        {/* Bottom Large Image - show only on md+ screens */}
        <img
          src={images[0]}
          alt="Bottom background"
          className="hidden md:block w-[500px] h-[430px] object-cover shadow-lg rounded mb-12 -ml-5"
        />

        {/* Upper Image - responsive */}
        <img
          src={images[currentIndex]}
          alt="Current view"
          className="
      relative w-full max-w-md h-64 sm:h-80 object-cover shadow-2xl rounded 
      md:absolute md:top-24 md:left-64 md:w-[320px] md:h-[370px]
      transition-all duration-300
    "
          style={{ zIndex: 10 }}
        />

        {/* Previous & Next Buttons */}
        <div
          className="
      flex gap-6 text-base sm:text-lg font-semibold text-gray-800 select-none cursor-pointer
      mt-4 justify-center
      md:mt-0 md:absolute md:bottom-4 md:left-0 md:justify-start
    "
        >
          <button
            onClick={prevImage}
            className="flex items-center gap-1 hover:text-[#2d6a4f] transition"
          >
            <span>←</span> Previous
          </button>
          <button
            onClick={nextImage}
            className="flex items-center gap-1 hover:text-[#2d6a4f] transition"
          >
            Next <span>→</span>
          </button>
        </div>
      </div>


      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl">
        <p className="text-sm uppercase font-bold tracking-wide text-gray-700">
          Welcome to <span className="border-b-2 border-black w-10 inline-block align-middle"></span>
        </p>
        <h1 className="text-4xl font-serif font-bold mt-2 leading-tight">
          Crafto Design Studio
        </h1>
        <p className="mt-6 text-gray-700 text-base leading-relaxed">
          <strong>Crafto Design Studio</strong>, We’re a multidisciplinary interior design studio delivering delightful, practical <strong>Interior Design Bangalore</strong>, Our in‑house team manages drawings, 3D, procurement and site works—so you don’t have to coordinate 10 vendors.
        </p>

        <ul className="list-disc list-inside mt-6 space-y-2 text-gray-600">
          <li>Space planning and layout design</li>
          <li>Transparent BOQs & timelines</li>
          <li>Premium materials, verified vendors</li>
          <li>Premium materials and finishes for lasting quality</li>

        </ul>

      </div>
    </div>
  );
}