import { useState, useRef } from 'react';
import { useActiveBreakpoint } from "figma:react";
import { motion } from 'motion/react';
import { defineProperties } from "figma:react";

// Sample portfolio data - replace with your actual projects
const portfolioItems = [
  {
    id: 1,
    title: "Web Design Project",
    category: "web",
    description: "A modern responsive website with clean UI/UX design",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "mobile",
    description: "User interface design for iOS and Android application",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "branding",
    description: "Complete brand identity design including logo and guidelines",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Photography Collection",
    category: "photography",
    description: "Series of artistic photographs for commercial use",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "web",
    description: "Full-stack development of an online shopping platform",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Social Media App",
    category: "mobile",
    description: "Social networking app with unique interaction features",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Filter categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Design" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "branding", name: "Branding" },
  { id: "photography", name: "Photography" }
];

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false)
  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  )
}

function ProjectCard({ project, onClick, animationDelay, hoverEffect }) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      whileHover={hoverEffect ? { scale: 1.03 } : {}}
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <ImageWithFallback 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-sm opacity-90">{project.description}</p>
          <span className="inline-block mt-2 px-2 py-1 text-xs bg-white/20 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[40vh]">
          <ImageWithFallback 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {project.category}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PortfolioDesktop({ animationSpeed = 0.3, hoverEffect = true }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="w-full h-full flex flex-col p-8">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed }}
      >
        Portfolio
      </motion.h2>
      
      <motion.div 
        className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed, delay: 0.1 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === category.id
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={(project) => setSelectedProject(project)}
            animationDelay={0.2 + (index * 0.1)}
            hoverEffect={hoverEffect}
          />
        ))}
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

function PortfolioTablet({ animationSpeed = 0.3, hoverEffect = true }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="w-full h-full flex flex-col p-6">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed }}
      >
        Portfolio
      </motion.h2>
      
      <motion.div 
        className="flex justify-center mb-6 space-x-3 overflow-x-auto pb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed, delay: 0.1 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              filter === category.id
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-y-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={(project) => setSelectedProject(project)}
            animationDelay={0.2 + (index * 0.1)}
            hoverEffect={hoverEffect}
          />
        ))}
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

function PortfolioMobile({ animationSpeed = 0.3, hoverEffect = false }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  
  const filteredProjects = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <motion.h2 
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed }}
      >
        Portfolio
      </motion.h2>
      
      <motion.div 
        className="flex mb-4 space-x-2 overflow-x-auto pb-2"
        ref={scrollRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed, delay: 0.1 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${
              filter === category.id
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 gap-4 overflow-y-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={(project) => setSelectedProject(project)}
            animationDelay={0.2 + (index * 0.1)}
            hoverEffect={hoverEffect}
          />
        ))}
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

function Portfolio({ animationSpeed = 0.3, hoverEffect = true }) {
  const { width } = useActiveBreakpoint();
  if (width < 640) {
    return <PortfolioMobile animationSpeed={animationSpeed} hoverEffect={false} />;
  }
  if (width < 1024) {
    return <PortfolioTablet animationSpeed={animationSpeed} hoverEffect={hoverEffect} />;
  }
  return <PortfolioDesktop animationSpeed={animationSpeed} hoverEffect={hoverEffect} />;
}

export default Portfolio;

defineProperties(Portfolio, {
  animationSpeed: {
    label: "Animation speed",
    type: "number",
    defaultValue: 0.3
  },
  hoverEffect: {
    label: "Enable hover effects",
    type: "boolean",
    defaultValue: true
  }
});