import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroImages = [
  '/images/Hero1.jpg',
  '/images/Hero4.jpg',
  '/images/Hero7.jpg',
  '/images/Hero2.jpg',
  '/images/Hero3.jpg',
  '/images/outlate1.jpg',
];

export default function Home() {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % heroImages.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[72vh] md:h-[80vh] overflow-hidden">
        <AnimatePresence>
          {heroImages.map((src, i) =>
            i === slide && (
              <motion.img
                key={src}
                src={src}
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            )
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              Crafto Interior Design, Built to Last
            </motion.h1>
            <p className="mt-4 text-white/90">
              From concept to handover—one expert team delivering beautiful, functional spaces on time.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-md bg-slate-900 text-white"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md border border-white/50 text-white"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["7+ Years Experience", "200+ Projects", "On‑time Delivery", "Warranty & Support"].map(t => (
            <div key={t} className="text-sm md:text-base">
              <div className="font-semibold">{t}</div>
              <div className="text-slate-500">Trusted by homeowners & brands</div>
            </div>
          ))}
        </div>
      </section>

      {/* Residential Section */}
      <section className="flex flex-col md:flex-row w-full min-h-screen mt-4">
        <div className="w-full md:w-2/3">
          <img
            src='/images/outlate1.jpg'
            alt="Residential Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center bg-white px-10 py-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6 tracking-wide">
              Residential Interior Design
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              If there’s one thing we understand better than anyone else it’s home interior designing. 
              At Crafto Design, the design is about YOU. It’s about creating a space that complements 
              your style, your personality, and your likes.
            </p>
            <Link
              to="/projects/residential"
              className="text-lg font-medium tracking-widest border-b-2 border-gray-800 pb-1 text-black"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="flex flex-col md:flex-row w-full min-h-screen mt-5">
        <div className="w-full md:w-1/3 flex items-center justify-center bg-white px-10 py-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6 tracking-wide">
              Commercial Interior Design
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Offices, cafes, and jewellery stores; we have designed and constructed it all.
              The strong design and construction expertise of the team allows Crafto to deliver 
              stunning and functional commercial spaces.
            </p>
            <Link
              to="/projects/commercial"
              className="text-lg font-medium tracking-widest border-b-2 border-gray-800 pb-1 text-black"
            >
              EXPLORE
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <img
            src='/images/outlate2.jpg'
            alt="Commercial Architecture"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
