import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectsCommercial() {
 
  return (
    <div className="">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/cropbg.jpg')", height: "200px" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h5 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
           Our Services
          </h5>
          <h2 className="text-2xl md:text-3xl text-white">Portfolio</h2>
        </div>
      </div>

      {/* luxury Intro Section */}
      <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row gap-12">
        {/* Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/luxurydesign.jpg"
            alt="Bottom background"
            className="w-[500px] h-[430px] object-cover shadow-lg rounded mb-12 -ml-5"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl font-serif font-bold mt-2 leading-tight">
            Luxury Interior
          </h1>
          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            <strong>Crafto Design Studio</strong>, Experience unmatched elegance with our 
            luxury interiors, featuring opulent designs,
             <strong>Bangalore</strong>, Our in-house team
            manages comfort, and style, delivering a truly premium living experience.
          </p>

          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-600">
            <li>Luxury Apartments (3BHK / 4BHK) ₹15 – 25 Lakhs</li>
            <li>Individual Houses ₹25 – 50 Lakhs</li>
            <li>Villas (Large-Scale Projects) ₹50 Lakhs – ₹1 Crore+</li>
            <br />
            Pricing varies based on property size, material selection, level of
            customization, and scope of work.
          </ul>
        </div>
      </div>

      {/* Premium Interior */}
        <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row gap-12">
        
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl font-serif font-bold mt-2 leading-tight">
            Premium Interior
          </h1>
          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            “Our premium interiors balance style and functionality with refined 
            designs and quality materials. We create thoughtfully curated spaces that are modern, 
            elegant, and practical, offering a sophisticated yet accessible lifestyle.
          </p>

          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-600">
            <li>BHK interiors – Starting ₹5Lakhs</li>
            <li>2BHK interiors – Starting ₹6.Lakhs</li>
            <li>3BHK interiors – Starting ₹8 Lakhs</li>          
            <br />
            Final cost depends on material selection and design customization.
          </ul>
        </div>
        {/* Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bottom background"
            className="w-[500px] h-[430px] object-cover shadow-lg rounded mb-12 -ml-5"
          />
        </div>
      </div>

      {/* Budget */}
      <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row gap-12">
        {/* Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/WhatsApp1.jpg"
            alt="Bottom background"
            className="w-[500px] h-[430px] object-cover shadow-lg rounded mb-12 -ml-5"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl font-serif font-bold mt-2 leading-tight">
            Budget Interior
          </h1>
          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            We provide budget-friendly interiors without compromising on quality or 
            style. Smart designs, durable materials, and efficient planning ensure functional, 
            attractive spaces that meet your needs while remaining cost-effective..
          </p>

          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-600">
            <li>1BHK interiors – Starting ₹3.Lakhs</li>
            <li>2BHK interiors – Starting ₹4.Lakhs</li>
            <li> 3BHK interiors – Starting ₹6 Lakhs</li> 
            <br />
            Pricing varies based on property size, material selection, level of
            customization, and scope of work.
          </ul>
        </div>
      </div>

        {/* Other Services */}

        <h1 className="text-4xl font-serif font-bold leading-tight text-center">Our Other Services</h1>

         <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row gap-12">
        
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl">
          {/* <h1 className="text-4xl font-serif font-bold mt-2 leading-tight">
            Other services
          </h1> */}
          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            We specialize in modular home interiors, electrical work, civil works,
             plumbing, demolition, ceiling, painting, SS & MS fabrication, and soft 
             furnishings, delivering functional and stylish spaces. Our team ensures 
             high-quality finishes, durability, and elegant designs tailored to your
              lifestyle
          </p>

          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-600">
            <li>Modular home interior</li>
            <li>Electrical work</li>
            <li>Civil works , Plumbing, Demolition</li>  
            <li>Celling</li>  
            <li>Painting</li>      
            <li> SS ,MS Fabrication</li>
            <li>Soft furnishings</li>
            <br />
            <p className="font-bold">Design • Develop • Deliver</p>
          </ul>
        </div>
        {/* Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/WhatsApp14.jpg"
            alt="Bottom background"
            className="w-[500px] h-[430px] object-cover shadow-lg rounded mb-12 -ml-5"
          />
        </div>
      </div>

                


      
    </div>
  );
}

export default ProjectsCommercial;
