import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Code, Server, Database, 
  Rocket, Users, Globe, Sparkles, Zap,
  Cpu, Cloud, Shield, Workflow,
  Target, CheckCircle, Clock, TrendingUp
} from 'lucide-react';

// Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
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
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
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

// Floating Tech Orb Component
const TechOrb = ({ icon: Icon, color, delay, size = "medium" }) => {
  const sizeClass = size === "large" ? "w-24 h-24" : size === "small" ? "w-12 h-12" : "w-16 h-16";
  
  return (
    <motion.div
      className={`absolute ${sizeClass} rounded-full flex items-center justify-center`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}40, ${color}10)`,
        boxShadow: `0 0 40px ${color}40`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className={`${sizeClass} rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm`}>
        <Icon className={size === "large" ? "w-8 h-8" : "w-6 h-6"} />
      </div>
    </motion.div>
  );
};

// Glass Morphism Card Component
const GlassCard = ({ children, className = "", hover = true }) => (
  <motion.div
    whileHover={hover ? { 
      y: -8, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    } : {}}
    className={`
      relative overflow-hidden rounded-2xl p-8
      bg-gradient-to-br from-white/5 to-white/[0.02]
      border border-white/10 backdrop-blur-xl
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-white/5 before:via-transparent before:to-transparent
      ${className}
    `}
    style={{
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `,
    }}
  >
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

// Animated Gradient Text
const GradientText = ({ children, className = "", speed = "slow" }) => {
  const speedClass = speed === "fast" ? "animate-gradient-fast" : "animate-gradient";
  
  return (
    <span className={`
      bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 
      bg-clip-text text-transparent bg-[length:200%_auto]
      ${speedClass}
      ${className}
    `}>
      {children}
    </span>
  );
};

// Interactive Code Block Component
const CodeBlock = () => {
  const [activeLine, setActiveLine] = useState(0);
  const lines = [
    { code: "<FullStackDeveloper>", color: "text-blue-400" },
    { code: "  <Frontend>React, TypeScript</Frontend>", color: "text-cyan-400" },
    { code: "  <Backend>Node.js, Laravel</Backend>", color: "text-green-400" },
    { code: "  <Database>MongoDB, PostgreSQL</Database>", color: "text-purple-400" },
    { code: "  <DevOps>AWS, Docker, CI/CD</DevOps>", color: "text-orange-400" },
    { code: "</FullStackDeveloper>", color: "text-blue-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % lines.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-900/50 p-6 border border-gray-800">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="font-mono text-sm space-y-2">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${line.color}`}
            animate={{
              backgroundColor: activeLine === index ? "rgba(59, 130, 246, 0.1)" : "transparent",
              paddingLeft: activeLine === index ? "1rem" : "0",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-gray-500 w-8">{index + 1}</span>
            <span>{line.code}</span>
            {activeLine === index && (
              <motion.div
                className="ml-2 w-2 h-5 bg-cyan-400"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTech, setActiveTech] = useState(0);
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = -(clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };
  
  const techStack = [
    { 
      name: "React", 
      color: "#0ea5e9", 
      icon: Code,
      description: "Modern UI Development"
    },
    { 
      name: "Laravel", 
      color: "#ef4444", 
      icon: Server,
      description: "Robust Backend Solutions"
    },
    { 
      name: "Node.js", 
      color: "#10b981", 
      icon: Cpu,
      description: "Scalable API Development"
    },
    { 
      name: "Python", 
      color: "#f59e0b", 
      icon: Database,
      description: "Data & Automation"
    },
    { 
      name: "AWS", 
      color: "#f97316", 
      icon: Cloud,
      description: "Cloud Infrastructure"
    },
  ];
  
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second load times",
      gradient: "from-blue-500 to-cyan-400",
      delay: 0,
      stats: "90% faster"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with auto-scaling",
      gradient: "from-purple-500 to-pink-400",
      delay: 0.1,
      stats: "Zero breaches"
    },
    {
      icon: Workflow,
      title: "Modern Workflow",
      description: "CI/CD pipelines and automated testing",
      gradient: "from-green-500 to-emerald-400",
      delay: 0.2,
      stats: "100% coverage"
    },
    {
      icon: Target,
      title: "Pixel Perfect",
      description: "Attention to detail in every implementation",
      gradient: "from-orange-500 to-red-400",
      delay: 0.3,
      stats: "99.9% accuracy"
    }
  ];

  const projects = [
    { 
      name: "Enterprise Platform", 
      tech: "Laravel + React", 
      progress: 100,
      timeline: "3 months",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "E-Commerce API", 
      tech: "Node.js + MongoDB", 
      progress: 85,
      timeline: "2 months",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Real-time Dashboard", 
      tech: "React + WebSocket", 
      progress: 90,
      timeline: "1.5 months",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Mobile App Backend", 
      tech: "Python + FastAPI", 
      progress: 75,
      timeline: "2.5 months",
      color: "from-orange-500 to-red-500"
    },
  ];

  const stats = [
    { icon: CheckCircle, value: "50+", label: "Projects Completed", color: "text-cyan-400" },
    { icon: Clock, value: "5+", label: "Years Experience", color: "text-blue-400" },
    { icon: Users, value: "30+", label: "Happy Clients", color: "text-green-400" },
    { icon: TrendingUp, value: "100%", label: "Satisfaction Rate", color: "text-purple-400" },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <ParticleBackground />
      
      {/* Floating Tech Orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%' }}>
        <TechOrb icon={Code} color="#0ea5e9" delay={0} size="large" />
      </div>
      <div style={{ position: 'absolute', top: '60%', left: '85%' }}>
        <TechOrb icon={Server} color="#ef4444" delay={2} />
      </div>
      <div style={{ position: 'absolute', top: '80%', left: '15%' }}>
        <TechOrb icon={Database} color="#10b981" delay={4} size="small" />
      </div>
      <div style={{ position: 'absolute', top: '30%', left: '90%' }}>
        <TechOrb icon={Cloud} color="#f97316" delay={6} />
      </div>
      
      {/* Mouse Follow Glow */}
      <div 
        className="fixed z-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          left: `calc(50% + ${mousePosition.x * 100}px)`,
          top: `calc(50% + ${mousePosition.y * 100}px)`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle at center, 
            rgba(59, 130, 246, 0.15) 0%,
            rgba(37, 99, 235, 0.1) 30%,
            transparent 70%
          )`,
          filter: 'blur(40px)',
        }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    🚀 Available for Remote Positions
                  </span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </motion.div>
                
                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="block">Crafting</span>
                    <span className="block">
                      <GradientText className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        Digital Excellence
                      </GradientText>
                    </span>
                    <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl mt-4">
                      Full Stack Developer
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Building scalable web applications with 
                    <span className="text-cyan-400 font-semibold"> React</span>, 
                    <span className="text-red-400 font-semibold"> Laravel</span>, and 
                    <span className="text-green-400 font-semibold"> Node.js</span>. 
                    Passionate about creating elegant solutions to complex problems.
                  </p>
                </div>
                
                {/* Tech Stack Carousel */}
                <div className="relative h-20 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0"
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${techStack[activeTech].color}20, ${techStack[activeTech].color}05)`,
                            border: `1px solid ${techStack[activeTech].color}30`,
                          }}
                        >
                          {(() => {
                            const IconComponent = techStack[activeTech].icon;
                            return <IconComponent className="w-8 h-8" style={{ color: techStack[activeTech].color }} />;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold" style={{ color: techStack[activeTech].color }}>
                            {techStack[activeTech].name}
                          </h3>
                          <p className="text-gray-400">{techStack[activeTech].description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 rounded-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                        boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-3 text-white font-semibold">
                        Explore Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                  
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all backdrop-blur-sm"
                    >
                      Let's Connect →
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Right Column - Code Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <CodeBlock />
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="glass-card p-4"
                    >
                      <div className="flex items-center gap-3">
                        {(() => {
                          const IconComponent = stat.icon;
                          return <IconComponent className={`w-6 h-6 ${stat.color}`} />;
                        })()}
                        <div>
                          <div className={`text-2xl font-bold ${stat.color}`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Why <GradientText>Choose Me</GradientText>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                Delivering exceptional value through cutting-edge technology and proven methodologies
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay }}
                  viewport={{ once: true }}
                >
                  <GlassCard>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                      {(() => {
                        const IconComponent = feature.icon;
                        return <IconComponent className="w-7 h-7 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                    <div className="text-cyan-400 font-semibold text-sm">
                      {feature.stats}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Featured <GradientText>Projects</GradientText>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                Showcasing innovative solutions and technical excellence
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-400">{project.tech}</p>
                      </div>
                      <Rocket className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    {/* Timeline */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Timeline</span>
                        <span className="text-cyan-400">{project.timeline}</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                        />
                      </div>
                    </div>
                    
                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-cyan-400">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.7 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                      <Link to="/projects">
                        <button className="text-sm text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2">
                          View Details <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                      <div className="flex gap-2">
                        {['React', 'Node', 'AWS'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    View All Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;