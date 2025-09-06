import React from 'react'

export default function About(){
  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img src="/images/WhatsApp10.jpg" 
          alt="studio" 
          className="w-full rounded-2xl shadow"/>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Design‑first. Execution‑obsessed.</h1>
          <p className="mt-3 text-slate-600">We’re a multidisciplinary interior design studio delivering delightful, practical spaces. Our in‑house team manages drawings, 3D, procurement and site works—so you don’t have to coordinate 10 vendors.</p>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
            <li>Space planning and layout design</li>
          <li>Transparent BOQs & timelines</li>
          <li>Premium materials, verified vendors</li>
          <li>Premium materials and finishes for lasting quality</li>
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
      {/* Timeless Aesthetics */}
      <article className="mb-10">
        <h3 className="text-xl font-semibold mb-2"> Innovative Design Solutions</h3>
        <p className="text-gray-700 leading-relaxed">
          Our team of expert architects leverages the latest technology and creative strategies to craft unique, functional, 
          and aesthetically pleasing spaces. We prioritize your vision and needs, ensuring every project
          reflects your style and purpose.
        </p>
      </article>

      <article className="mb-10">
        <h3 className="text-xl font-semibold mb-2"> Timeless Aesthetics</h3>
        <p className="text-gray-700 leading-relaxed">
          While innovation is crucial, we also value timeless design principles.
          Our Architectural Design Services Bangalore blend modern trends with
          classic elegance, ensuring your space remains stylish and relevant for
          years to come.
        </p>
      </article>

      {/* Transform Your Vision */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Transform Your Vision into Reality
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          At Crafto Design Studio, we’re passionate about creating spaces
          that inspire and function flawlessly. Let us bring your architectural
          dreams to life with our expertise, creativity, and commitment to
          excellence. Contact us today to start your journey towards an
          extraordinary space!
        </p>
        <p className="text-gray-700 leading-relaxed">
          We’re a multidisciplinary interior design studio delivering delightful, 
          practical spaces. Our in‑house team manages drawings, 3D,
          procurement and site works—so you don’t have to coordinate 10 vendors..
        </p>
      </section>
      <p className='text-center mt-10 font-bold'>Design • Develop • Deliver</p>
    </div>
    </div>
  )
}
