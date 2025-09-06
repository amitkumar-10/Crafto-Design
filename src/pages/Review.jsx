import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Exceptional Service and Quality I am absolutely thrilled with the work done by Crafto Design Studio. They truly exceeded my expectations in every way. From the initial consultation to the final walk-through, their team was professional, courteous, and accommodating most of the time.",
    client: "Mr. Arvind Reddy ",
    image:
      "/images/WhatsApp3.jpg",
  },
  {
    quote:
      "The design team transformed our space with outstanding creativity and attention to detail. Timely delivery and excellent communication throughout the project.",
    client: "Mr. Himanshu Agrawal",
    image:
      "/images/WhatsApp8.jpg",
  },
  {
    quote:
      "We approached the team with a vague idea of what we wanted. They guided us through every step, suggesting materials and layouts that suited our style. The end result is a home we truly love and feel comfortable in.",
    client: " Mr. Gopalaswami ",
    image:
      "/images/WhatsApp10.jpg",
  },
  {
    quote:
      "From the initial consultation to the final handover, the process was smooth and professional. They paid attention to even the smallest details, making sure everything was perfect. Our office now looks modern, exactly as we envisioned.",
    client: " Dr. Yogesh Gupta ",
    image:
      "/images/WhatsApp5.jpg",
  },
   {
     quote:
      "We were worried about timelines and budget, but the team handled everything efficiently. Communication was clear, and their execution was flawless. The interiors exceeded our expectations and reflect our personality beautifully.",
     client: " Mr. Kirshna Gowda",
     image:
      "/images/WhatsApp2.jpg",
    },
];

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goPrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  function goNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  const { quote, client, image } = testimonials[currentIndex];

  return (
    <div className="flex flex-col md:flex-row bg-white p-6 sm:p-10 gap-8 md:gap-10 max-w-7xl mx-auto min-h-[550px]">
      {/* Left: Text and controls */}
      <div className="flex flex-col justify-between flex-1 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-4 text-gray-900">
          Hear from Our Clients
        </h2>

        {/* Testimonial Text */}
        <blockquote className="relative text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 px-2 sm:px-0">
          <span
            aria-hidden="true"
            className="absolute text-4xl sm:text-6xl text-gray-400 font-serif -top-4 sm:-top-6 left-2 sm:left-0 select-none"
          >
            “
          </span>
          {quote}
        </blockquote>

        {/* Client Name */}
        <p className="mt-6 sm:mt-10 text-gray-900 font-serif text-lg sm:text-xl">
          {client}
        </p>

        {/* Navigation */}
        <div className="flex justify-center md:justify-start items-center mt-6 space-x-6 sm:space-x-8 text-gray-800 font-semibold cursor-pointer select-none text-base sm:text-lg">
          <button
            onClick={goPrevious}
            className="flex items-center hover:text-[#2d6a4f] transition"
          >
            <span className="mr-1 text-xl sm:text-2xl">←</span>
            Previous
          </button>
          <button
            onClick={goNext}
            className="flex items-center hover:text-[#2d6a4f] transition"
          >
            Next
            <span className="ml-1 text-xl sm:text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* Right: Image with overlays */}
      <div className="relative flex-1 flex justify-center items-center">
        <img
          src={image}
          alt="Client project"
          className="rounded-lg h-64 sm:h-80 md:h-[400px] w-full object-cover shadow-lg"
        />

        {/* Top right overlay */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-5 bg-white/80 p-2 sm:p-4 shadow-lg max-w-[140px] sm:max-w-[190px] text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-700 leading-none">
            100+
          </h3>
          <p className="font-serif text-sm sm:text-lg mt-1">
            Projects Completed
          </p>
        </div>

        {/* Bottom left overlay */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-5 bg-white/80 p-2 sm:p-4 shadow-lg max-w-[120px] sm:max-w-[160px] text-center">
          <h3 className="text-xl sm:text-3xl font-bold text-gray-700 leading-none">
            12+
          </h3>
          <p className="font-serif text-sm sm:text-lg mt-1">Skilled Designers</p>
        </div>
      </div>
    </div>
  );
}



