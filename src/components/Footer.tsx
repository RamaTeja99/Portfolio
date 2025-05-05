
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-14">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-display mb-2 text-white">
              <span className="text-tech-purple">R</span>ama<span className="text-tech-teal">T</span>eja
            </h3>
            <p className="text-gray-400">Software Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            {/* <p className="text-gray-400">© {new Date().getFullYear()} Rama Teja. All rights reserved.</p> */}
            <div className="mt-1 flex items-center justify-center md:justify-end space-x-4">
              <a 
                href="https://www.linkedin.com/in/batchuvenkatadharmaramateja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://github.com/RamaTeja99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="mailto:2200032668cseh@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

