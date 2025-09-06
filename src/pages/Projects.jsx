import { Link } from "react-router-dom";

function Projects() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 mb-9 text-white text-center">
        <h2 className="text-8xl font-bold mb-4  text-white">Our Projects</h2>
        <p className="mb-6 text-lg">Choose a category to explore:</p>
        <div className="flex justify-center gap-6">
          <Link
            to="/projects/commercial"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Commercial
          </Link>
          <Link
            to="/projects/residential"
            className="bg-green-600 text-white px-6 py-3 rounded"
          >
            Residential
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
