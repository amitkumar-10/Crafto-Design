import { motion } from "framer-motion";

function ProjectsCommercial() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1684769161409-f6de69d3f274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1646215993316-c98f642303ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1661962318201-c7faa790617b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1661963781048-9780e4ecae5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1666718623430-da207b018ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1666718622537-6748ca5322e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1716703373229-b0e43de7dd5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1739863528149-0828fdb4d34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  ];

  return (
    <div className="p-10">
      <h5 className="text-2xl text-center mb-1">Commercial</h5>
      <h2 className="text-4xl text-center mb-6">Project Portfolio</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Commercial"
            className="rounded shadow w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsCommercial;
