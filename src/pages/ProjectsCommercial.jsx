import { motion } from "framer-motion";

function ProjectsCommercial() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tZXJjaWFsJTIwb2ZmaWNlcyUyMGludGVyaW9yfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tZXJjaWFsJTIwb2ZmaWNlcyUyMGludGVyaW9yfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1684769161409-f6de69d3f274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbWVyY2lhbCUyMG9mZmljZXMlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1646215993316-c98f642303ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbWVyY2lhbCUyMG9mZmljZXMlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661962318201-c7faa790617b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbWVyY2lhbCUyMG9mZmljZXMlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661963781048-9780e4ecae5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxjb21lcmNpYWwlMjBvZmZpY2VzJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1666718623430-da207b018ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2glMjBvZmZpY2VzJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRlY2glMjBvZmZpY2VzJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2glMjBvZmZpY2VzJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1666718622537-6748ca5322e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRlY2glMjBvZmZpY2VzJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1716703373229-b0e43de7dd5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHx0ZWNoJTIwb2ZmaWNlcyUyMGludGVyaW9yfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1739863528149-0828fdb4d34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0ZWNoJTIwb2ZmaWNlcyUyMGludGVyaW9yfGVufDB8fDB8fHww",
  
  ];

  return (
    <div className="p-10">
      <h5 className="text-2xl text-center mb-1">Commercial</h5>
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
