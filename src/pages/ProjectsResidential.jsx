import { motion } from "framer-motion";

function ProjectsCommercial() {
  const images = [
    "/images/WhatsApp1.jpg",
    "/images/WhatsApp2.jpg",
    "/images/WhatsApp3.jpg",
    "/images/WhatsApp4.jpg",
    "/images/WhatsApp7.jpg",
    "/images/WhatsApp6.jpg",
    "/images/WhatsApp5.jpg",
    "/images/WhatsApp8.jpg",
    "/images/WhatsApp9.jpg",
    "/images/WhatsApp10.jpg",
    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720420021124-4e18564e070f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhZHJvb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1719218402721-34c807ed2d6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhZHJvb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600684388091-627109f3cd60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1643949914872-317d6047f107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600494448850-6013c64ba722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    "/images/WhatsApp11.jpg",
    "/images/WhatsApp13.jpg",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683140941523-f1fbbabe54d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <div className="p-10">
      <h5 className="text-2xl text-center mb-1">Residential</h5>
      <h2 className="text-4xl text-center mb-6">Project Portfolio</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Commercial"
            className="rounded shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectsCommercial;
