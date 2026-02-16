import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string[];
  technologies: string[];
  image: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Formula Student Suspension Upright',
      category: 'Dissertation Project',
      description: 'Topology optimization and FEA analysis of a Formula Student suspension upright, comparing software approaches and validating structural performance',
      details: [
        'Reverse-engineered existing upright geometry for baseline analysis',
        'Conducted FEA validation in SolidWorks Simulation with realistic load cases',
        'Performed topology optimization comparing SolidWorks and Fusion 360 approaches',
        'Analysed weight reduction vs structural integrity trade-offs for race conditions',
        'Documented full methodology suitable for academic dissertation submission',
      ],
      technologies: ['SolidWorks', 'Fusion 360', 'FEA', 'Topology Optimization', 'CAD'],
      image: 'linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%)',
    },
    {
      id: 2,
      title: 'Computer Vision Object Tracker',
      category: 'Software & AI',
      description: 'Real-time object detection and tracking system built in MATLAB using image processing and computer vision techniques',
      details: [
        'Developed real-time tracking algorithms for moving object detection',
        'Implemented image processing pipeline with filtering and segmentation',
        'Built classification system for object identification from video feeds',
        'Optimised processing speed for near real-time performance',
        'Applied techniques from coursework to a practical engineering context',
      ],
      technologies: ['MATLAB', 'Computer Vision', 'Image Processing', 'Object Tracking'],
      image: 'linear-gradient(135deg, #8b00ff 0%, #b000ff 100%)',
    },
    {
      id: 3,
      title: 'Mechatronic Robot System',
      category: 'Robotics & Embedded',
      description: 'Autonomous robot integrating mechanical design, sensor systems, actuators, and embedded control for coordinated movement',
      details: [
        'Designed and built mechanical chassis with integrated sensor mounting',
        'Programmed embedded control system for autonomous operation',
        'Integrated multiple sensor types for environmental awareness and feedback',
        'Implemented motor control with real-time position and speed regulation',
        'Combined mechanical, electrical, and software engineering in a single system',
      ],
      technologies: ['Arduino', 'C++', 'Sensors', 'Motor Control', 'CAD', '3D Printing'],
      image: 'linear-gradient(135deg, #00bfff 0%, #1e90ff 100%)',
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of work spanning mechanical design, software development, and embedded systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-orange-500/50 transition-all duration-300"
            >
              <div
                className="h-48 relative"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div
              className="h-64 relative"
              style={{ background: selectedProject.image }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm text-orange-500 mb-4">
                {selectedProject.category}
              </div>

              <h3 className="text-4xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-xl text-gray-400 mb-8">{selectedProject.description}</p>

              <h4 className="text-xl font-bold mb-4">Key Details</h4>
              <ul className="space-y-3 mb-8">
                {selectedProject.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
