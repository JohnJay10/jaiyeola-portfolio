import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCertificate
} from 'react-icons/fa';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Turing",
    period: "2022 - Present",
    location: "Remote (Global)",
    type: "Full-time",
    description: [
      "Developed and maintained scalable web applications for international clients",
      "Built RESTful APIs with Laravel and Node.js, improving performance by 40%",
      "Implemented real-time features using WebSockets and Redis",
      "Led a team of 3 developers in Agile/Scrum environment",
      "Reduced server costs by 30% through optimization and cloud architecture"
    ],
    tech: ["Laravel", "React", "AWS", "Docker", "MySQL", "Redis", "WebSocket"],
    achievements: ["Top 10% Performer", "Client Satisfaction: 98%"]
  },
  {
    title: "Frontend Developer",
    company: "Center for Liberty",
    period: "2020 - 2022",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: [
      "Developed responsive React applications serving 10,000+ monthly users",
      "Integrated with Laravel backend APIs and improved load times by 60%",
      "Implemented design systems and component libraries",
      "Mentored 2 junior developers and conducted code reviews",
      "Collaborated with UX designers to improve user experience"
    ],
    tech: ["React", "JavaScript", "Laravel", "Bootstrap", "Sass", "Git"],
    achievements: ["Employee of the Month", "Project Delivery Excellence"]
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2018 - 2020",
    location: "Remote",
    type: "Contract",
    description: [
      "Built custom websites and web applications for 20+ clients",
      "Specialized in Laravel and WordPress development",
      "Managed project timelines, client communication, and delivery",
      "Achieved 100% client satisfaction rate",
      "Developed e-commerce platforms and business management systems"
    ],
    tech: ["Laravel", "WordPress", "PHP", "JavaScript", "MySQL", "jQuery"],
    achievements: ["100% Client Retention", "5-star Reviews"]
  }
];

const education = [
  {
    degree: "B.Sc Computer Science",
    institution: "University of Lagos",
    period: "2015 - 2019",
    grade: "First Class Honors"
  },
  {
    degree: "AWS Certified Developer",
    institution: "Amazon Web Services",
    period: "2023",
    grade: "Associate Level"
  }
];

const Experience = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience & <span className="gradient-text">Education</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              5+ years of professional experience building scalable applications 
              and leading development teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary via-blue-500 to-transparent" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-6' : 'md:pl-1/2 md:pr-6'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-4 md:left-1/2' : 'left-4 md:left-1/2'
                } transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-dark dark:border-light z-10`} />
                
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-card p-8 rounded-2xl">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm opacity-80">
                          <span className="flex items-center gap-2">
                            <FaBriefcase /> {exp.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt /> {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt /> {exp.period}
                          </span>
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-secondary mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-bold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    {exp.achievements && (
                      <div>
                        <h4 className="font-bold mb-3">Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement) => (
                            <span key={achievement} className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-blue-500">
                    {index === 0 ? (
                      <FaGraduationCap className="text-white text-2xl" />
                    ) : (
                      <FaCertificate className="text-white text-2xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="opacity-90">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 opacity-75">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;