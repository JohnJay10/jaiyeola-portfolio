import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Jaiyeola John</h3>
            <p className="opacity-75">Building the future, one line of code at a time</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a
              href="https://github.com/JohnJay10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-secondary transition-colors group"
              aria-label="GitHub"
            >
              <FaGithub 
                size={20} 
                className="group-hover:scale-110 transition-transform" 
              />
            </a>
            <a
              href="https://linkedin.com/in/johnjaiyeola"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-colors group"
              aria-label="LinkedIn"
            >
              <FaLinkedin 
                size={20} 
                className="group-hover:scale-110 transition-transform" 
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-400 transition-colors group"
              aria-label="Twitter"
            >
              <FaTwitter 
                size={20} 
                className="group-hover:scale-110 transition-transform" 
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            &copy; {currentYear} Jaiyeola John. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 text-sm opacity-75">
            <a href="/privacy" className="hover:text-secondary transition">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-secondary transition">Terms</a>
            <span>•</span>
            <p className="flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;