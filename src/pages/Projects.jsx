import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, Search, Globe, Code, 
  ArrowLeft, ArrowRight, ExternalLink,
  Layers, Server, Database, Cpu,
  ShoppingCart, BookOpen, Users,
  TrendingUp, Shield, Zap
} from 'lucide-react';

const projects = [
  {
    title: "Enterprise Training Center",
    type: "Full Stack LMS",
    description: "Comprehensive learning management system for educational institutions with course management, student tracking, and real-time analytics.",
    tech: ["Laravel", "React", "MySQL", "Redis", "AWS"],
    live: "https://ent-center.com",
    github: "https://github.com/JohnJay10",
    icon: "🎓",
    category: "fullstack",
    featured: true
  },
  {
    title: "Engineering Business Portal",
    type: "Corporate Website",
    description: "Professional engineering business website with admin dashboard, project management system, and client portal.",
    tech: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    live: "https://ashipaelectric.com",
    github: "https://github.com/JohnJay10/SoilMenEngineering",
    icon: "🏗️",
    category: "fullstack",
    featured: true
  },
  {
    title: "Zion Study & Leadership Centre",
    type: "Educational Platform",
    description: "Complete educational platform for Zion Study Centre offering course registration, student management, and leadership training programs.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    live: "https://zionstudycentre.com.ng",
    github: "https://github.com/JohnJay10",
    icon: "📚",
    category: "fullstack",
    featured: true
  },
  {
    title: "AgroConnect Nigeria",
    type: "Agricultural Marketplace",
    description: "Comprehensive agricultural platform connecting farmers, sellers, and buyers across Nigeria with marketplace features and logistics.",
    tech: ["Next.js", "TypeScript", "Firebase", "Stripe", "Mapbox"],
    live: "https://agroconnectnigeria.vercel.app",
    github: "https://github.com/JohnJay10",
    icon: "🌱",
    category: "fullstack",
    featured: true
  },
  {
    title: "E-Commerce API Platform",
    type: "Backend System",
    description: "Scalable REST API for e-commerce with payment integration, order management, inventory tracking, and user authentication.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
    live: "https://api.example.com",
    github: "https://github.com/JohnJay10",
    icon: "🛒",
    category: "backend",
    featured: false
  },
  {
    title: "Real-time Chat Application",
    type: "Web Application",
    description: "WebSocket-based chat application with rooms, file sharing, real-time notifications, and user presence detection.",
    tech: ["React", "Socket.io", "Node.js", "PostgreSQL", "Redis"],
    live: "https://chat.example.com",
    github: "https://github.com/JohnJay10",
    icon: "💬",
    category: "fullstack",
    featured: false
  },
  {
    title: "Portfolio Template",
    type: "React Application",
    description: "Modern, responsive portfolio template with dark mode, animations, and SEO optimization.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    live: "https://portfolio-template.com",
    github: "https://github.com/JohnJay10",
    icon: "🎨",
    category: "frontend",
    featured: false
  },
  {
    title: "Task Management System",
    type: "Productivity Tool",
    description: "Kanban-style task management with drag & drop, team collaboration, time tracking, and reporting features.",
    tech: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Chart.js"],
    live: "https://tasks.example.com",
    github: "https://github.com/JohnJay10",
    icon: "✅",
    category: "fullstack",
    featured: false
  },
  {
    title: "Weather Dashboard",
    type: "Web Application",
    description: "Real-time weather dashboard with forecasts, alerts, and interactive maps using multiple weather APIs.",
    tech: ["React", "Chart.js", "Weather API", "Leaflet", "PWA"],
    live: "https://weather-demo.com",
    github: "https://github.com/JohnJay10",
    icon: "☁️",
    category: "frontend",
    featured: false
  },
  {
    title: "Healthcare Management System",
    type: "Enterprise Application",
    description: "Comprehensive healthcare management system for hospitals with patient records, appointments, and billing.",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Docker", "AWS"],
    live: "https://healthcare-demo.com",
    github: "https://github.com/JohnJay10",
    icon: "🏥",
    category: "fullstack",
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers, color: 'from-blue-500 to-cyan-500' },
  { id: 'fullstack', label: 'Full Stack', icon: Cpu, color: 'from-purple-500 to-pink-500' },
  { id: 'frontend', label: 'Frontend', icon: Code, color: 'from-green-500 to-emerald-500' },
  { id: 'backend', label: 'Backend', icon: Server, color: 'from-orange-500 to-red-500' },
];

// Glass Card Component
const GlassCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className={`
      relative overflow-hidden rounded-2xl p-6
      bg-gradient-to-br from-white/5 to-white/[0.02]
      border border-white/10 backdrop-blur-xl
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-white/5 before:via-transparent before:to-transparent
      ${className}
    `}
  >
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

// Animated Gradient Text
const GradientText = ({ children, className = "" }) => (
  <span className={`
    bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 
    bg-clip-text text-transparent bg-[length:200%_auto]
    animate-gradient
    ${className}
  `}>
    {children}
  </span>
);

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <GlassCard>
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{project.icon}</span>
                {project.featured && (
                  <span className="px-3 py-1 text-xs bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-cyan-400">{project.type}</p>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center pt-6 border-t border-white/10">
          <div className="flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Code className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white/5 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-4 py-2 rounded-lg transition-colors ${1 === currentPage ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition-colors ${page === currentPage ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
        >
          {page}
        </button>
      ))}
      
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-4 py-2 rounded-lg transition-colors ${totalPages === currentPage ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white/5 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                My <GradientText>Projects</GradientText>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                A showcase of my recent work, featuring full-stack applications, 
                backend systems, and modern web experiences.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <GlassCard className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </GlassCard>
              <GlassCard className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {projects.filter(p => p.featured).length}
                </div>
                <div className="text-sm text-gray-400">Featured</div>
              </GlassCard>
              <GlassCard className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {projects.filter(p => p.category === 'fullstack').length}
                </div>
                <div className="text-sm text-gray-400">Full Stack</div>
              </GlassCard>
              <GlassCard className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {new Set(projects.flatMap(p => p.tech)).size}
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </GlassCard>
            </div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, technology, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {category.label}
                      <span className="text-sm opacity-75">
                        ({projects.filter(p => category.id === 'all' ? true : p.category === category.id).length})
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Results Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} projects
                  </h3>
                  {searchTerm && (
                    <p className="text-gray-400 text-sm mt-1">
                      Search results for: "{searchTerm}"
                    </p>
                  )}
                </div>
                
                {/* Results Per Page */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Show:</span>
                  <select
                    value={projectsPerPage}
                    onChange={(e) => {
                      setProjectsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white"
                  >
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {currentProjects.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold mb-4">No projects found</h3>
                  <p className="text-gray-400 mb-8">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="projects-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {filteredProjects.length > projectsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="text-center p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Want to See More?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, contributions, and open-source work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/JohnJay10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold border border-white/10"
                >
                  <Code className="w-5 h-5" />
                  Visit GitHub
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
                >
                  <Users className="w-5 h-5" />
                  Discuss a Project
                </a>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;