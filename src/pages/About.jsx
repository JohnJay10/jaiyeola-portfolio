import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Code, Server, Database, Cpu, Cloud, Zap, Shield,
  Target, Users, Rocket, Lightbulb, Handshake,
  CheckCircle, Globe, Layers, Terminal,
  Award, Briefcase, BookOpen, Heart,
  ArrowRight
} from 'lucide-react';

// Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

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

const About = () => {
  const containerRef = useRef();
  const [activeStrength, setActiveStrength] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const strengths = [
    {
      icon: Terminal,
      title: "Problem Solver",
      description: "Expert at breaking down complex problems into elegant solutions",
      color: "#0ea5e9",
      stats: "100+ problems solved"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communicator who thrives in collaborative environments",
      color: "#10b981",
      stats: "20+ team projects"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and methodologies",
      color: "#f59e0b",
      stats: "15+ frameworks mastered"
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Always exploring better ways to solve problems",
      color: "#8b5cf6",
      stats: "10+ innovative solutions"
    },
    {
      icon: Handshake,
      title: "Reliable Partner",
      description: "Committed to delivering quality work on time",
      color: "#ef4444",
      stats: "100% on-time delivery"
    }
  ];
  
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code,
      color: "#0ea5e9",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      category: "Backend",
      icon: Server,
      color: "#10b981",
      skills: ["Laravel", "Node.js", "Python", "Express", "Django"]
    },
    {
      category: "Database",
      icon: Database,
      color: "#8b5cf6",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      category: "DevOps",
      icon: Cloud,
      color: "#f59e0b",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Nginx"]
    }
  ];
  
  const timelineData = [
    { year: "2018", title: "Started Coding Journey", description: "Began learning web development fundamentals" },
    { year: "2019", title: "First Professional Role", description: "Joined as Junior Developer at tech startup" },
    { year: "2020", title: "Full Stack Specialization", description: "Mastered React and Laravel stack" },
    { year: "2021", title: "Team Leadership", description: "Led development team on major projects" },
    { year: "2022", title: "Remote Work Expert", description: "Joined Turing for international remote work" },
    { year: "2023", title: "Scale & Optimization", description: "Focus on scalable architecture and performance" },
    { year: "2024", title: "Current Focus", description: "Building enterprise-grade applications" }
  ];
  
  const stats = [
    { icon: Briefcase, value: "5+", label: "Years Experience", color: "text-blue-400" },
    { icon: Award, value: "50+", label: "Projects Delivered", color: "text-cyan-400" },
    { icon: Users, value: "30+", label: "Happy Clients", color: "text-green-400" },
    { icon: Globe, value: "100%", label: "Remote Success", color: "text-purple-400" },
    { icon: Layers, value: "10K+", label: "Lines of Code", color: "text-orange-400" },
    { icon: Heart, value: "24/7", label: "Passion Level", color: "text-pink-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStrength((prev) => (prev + 1) % strengths.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [strengths.length]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black pt-20"
    >
      {/* Background Effects */}
      <ParticleBackground />
      
      {/* Grid Pattern */}
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
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-black/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">JJ</span>
                  </div>
                </div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                About <GradientText>Me</GradientText>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Passionate Full Stack Developer with 5+ years of experience building 
                scalable web applications and leading development teams.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Biography & Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Biography */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <h2 className="text-3xl sm:text-4xl font-bold">
                  My <GradientText>Journey</GradientText>
                </h2>
                
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I started my journey as a self-taught developer, fascinated by how 
                    technology can solve real-world problems. What began as curiosity 
                    turned into a passion for creating meaningful digital experiences.
                  </p>
                  <p>
                    Over the years, I've honed my skills through various roles, from 
                    freelancing to working with international teams at Turing. Each 
                    project taught me something new and pushed me to grow.
                  </p>
                  <p>
                    My expertise lies in creating full-stack applications that are not 
                    only functional but also scalable and maintainable. I believe in 
                    writing clean code, following best practices, and continuously 
                    learning new technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to open-source 
                    projects, writing technical articles, or exploring new frameworks 
                    and tools to add to my toolkit.
                  </p>
                </div>
                
                <GlassCard>
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h4 className="font-bold mb-1">Continuous Learner</h4>
                      <p className="text-sm text-gray-400">
                        Always exploring new technologies and methodologies
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Career <GradientText>Timeline</GradientText>
                </h2>
                
                <div className="relative">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative pl-10 pb-12">
                      {index !== timelineData.length - 1 && (
                        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-transparent" />
                      )}
                      
                      <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{item.year}</span>
                        </div>
                      </div>
                      
                      <GlassCard className="ml-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </GlassCard>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Technical <GradientText>Expertise</GradientText>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                Mastery across the full stack, from pixel-perfect UI to robust backend systems
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard>
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}20, ${category.color}05)`,
                          border: `1px solid ${category.color}30`,
                        }}
                      >
                        <category.icon className="w-6 h-6" style={{ color: category.color }} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: category.color }}>
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, idx) => (
                        <div key={skill} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" style={{ color: category.color }} />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 sm:p-12">
                <div className="text-center">
                  <Zap className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Development <GradientText>Philosophy</GradientText>
                  </h2>
                  <div className="relative">
                    <svg className="absolute -top-8 -left-8 w-16 h-16 text-blue-500/20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                    <blockquote className="text-lg sm:text-xl text-gray-400 italic leading-relaxed mb-8">
                      "Great software is not just about writing code; it's about solving 
                      problems efficiently, collaborating effectively, and delivering value 
                      consistently. I believe in building solutions that stand the test of time."
                    </blockquote>
                    <svg className="absolute -bottom-8 -right-8 w-16 h-16 text-blue-500/20 transform rotate-180" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold">JJ</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">Jaiyeola John</div>
                      <div className="text-sm text-cyan-400">Full Stack Developer</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Let's collaborate on your next project. Whether it's a web application, 
                  API, or complete digital transformation, I'm here to help.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all"
                  >
                    View My Work
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;