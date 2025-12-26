import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl glass-card"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {project.icon || '📁'}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm opacity-75">{project.type}</p>
              </div>
            </div>
            
            <p className="opacity-90 leading-relaxed">{project.description}</p>
          </div>
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
          <div className="flex items-center space-x-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 group"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 opacity-75 hover:opacity-100 transition-opacity"
              >
                <FaGithub />
                <span>Code</span>
              </a>
            )}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-blue-500 flex items-center justify-center"
          >
            <FaArrowRight className="text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;