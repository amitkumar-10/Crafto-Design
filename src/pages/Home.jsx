import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutIntro from './AboutIntro.jsx';
import Review from './Review.jsx';

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
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
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
          <div className="text-white max-w-2xl text-center sm:text-left">
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white"
            >
              Crafto Interior Design, Built to Last
            </motion.h1>
            <p className="mt-4 text-sm sm:text-base text-white/90">
              From concept to handover—one expert team delivering beautiful, functional spaces on time.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-md bg-slate-900 text-white text-center"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md border border-white/50 text-white text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About intro */}
      <AboutIntro />

      {/* Stats Section */}
      <section className="border-y bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { title: "7+ Years Experience", subtitle: "Delivering excellence since 2017" },
            { title: "100+ Projects", subtitle: "Diverse portfolio across industries" },
            { title: "On-time Delivery", subtitle: "Committed to meeting deadlines" },
            { title: "Warranty & Support", subtitle: "Reliable service after project handover" }
          ].map(item => (
            <div key={item.title} className="text-base sm:text-lg">
              <div className="font-semibold">{item.title}</div>
              <div className="text-slate-500 text-sm sm:text-base">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </section>


      {/* Residential Section */}
      <section className="flex flex-col md:flex-row bg-white p-6 sm:p-10 gap-8 sm:gap-10 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/WhatsApp10.jpg"
            alt="Residential Architecture"
            className="rounded-lg w-full max-h-[300px] sm:max-h-[400px] object-cover shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center bg-white px-4 sm:px-10 py-10 sm:py-16">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 tracking-wide">
              Residential Interior Design
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base">
              If there’s one thing we understand better than anyone else it’s home interior designing.
              At Crafto Design, the design is about YOU. It’s about creating a space that complements
              your style, your personality, and your likes.
            </p>
            <Link
              to="/projects/commercial"
              className="text-base sm:text-lg font-medium tracking-widest border-b-2 border-gray-800 pb-1 text-black"
            >
              EXPLORE
            </Link>
          </div>
        </div>

      </section>

      <Review />

      {/* Commercial Section */}
      <section className="flex flex-col md:flex-row bg-white p-6 sm:p-10 gap-8 sm:gap-10 max-w-7xl mx-auto">
        <div className="w-full md:w-2/3">
          <img
            src="/images/outlate2.jpg"
            alt="Commercial Architecture"
            className="rounded-lg w-full max-h-[300px] sm:max-h-[400px] object-cover shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center bg-white px-4 sm:px-10 py-10 sm:py-16">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 tracking-wide">
              Commercial Interior Design
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base">
              Offices, cafes, and jewellery stores; we have designed and constructed it all.
              The strong design and construction expertise of the team allows Crafto to deliver
              stunning and functional commercial spaces.
            </p>
            <Link
              to="/projects/commercial"
              className="text-base sm:text-lg font-medium tracking-widest border-b-2 border-gray-800 pb-1 text-black"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
