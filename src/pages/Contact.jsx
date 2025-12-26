import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaCheckCircle,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'jaiyeolah.john@gmail.com',
      link: 'mailto:jaiyeolah.john@gmail.com',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Lagos, Nigeria (Remote)',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaPhone />,
      title: 'Availability',
      value: 'Available for new projects',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/JohnJay10', color: 'hover:bg-gray-800' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/johnjaiyeola', color: 'hover:bg-blue-700' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com', color: 'hover:bg-blue-400' },
  ];

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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="opacity-90 mb-8">
                  Feel free to reach out through any of the following channels. 
                  I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                        <div className="text-white text-xl">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="opacity-90 hover:text-secondary transition"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="opacity-90">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-6">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl glass-card ${social.color} transition-colors group`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl group-hover:scale-110 transition-transform">
                          {social.icon}
                        </div>
                        <span className="font-medium">{social.label}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                    <p className="opacity-90 mb-8">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl glass-card border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } focus:outline-none focus:ring-2 focus:ring-secondary`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl glass-card border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } focus:outline-none focus:ring-2 focus:ring-secondary`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block mb-2 font-medium">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Project discussion, Job opportunity, etc."
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-2 font-medium">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full px-4 py-3 rounded-xl glass-card border ${
                          errors.message ? 'border-red-500' : 'border-white/10'
                        } focus:outline-none focus:ring-2 focus:ring-secondary resize-none`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Note */}
                    <p className="text-sm opacity-75 text-center">
                      All fields marked with * are required
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Background */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's work together to create something amazing. 
                Whether it's a website, web application, or consultation, I'm here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:jaiyeolah.john@gmail.com" className="btn-primary">
                  Email Me Now
                </a>
                <a href="/resume.pdf" className="btn-secondary" download>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;