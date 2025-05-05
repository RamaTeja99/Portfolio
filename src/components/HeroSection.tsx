
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20 pt-28 bg-black text-gray-300">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-tech-purple/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-tech-blue/30 blur-3xl"></div>
        <div className="absolute top-40 left-1/3 w-96 h-96 rounded-full bg-tech-teal/30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-tech-purple/30 text-tech-purple font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Software Developer
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm <span className="text-tech-purple">Rama Teja</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-8 text-gray-400 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Results-driven B.Tech student in Computer Science Engineering with a strong foundation in Cyber Security and Web Development.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a 
              href="#contact" 
              className="py-3 px-6 bg-tech-purple text-white rounded-lg font-medium hover:bg-tech-dark-purple transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects"
              className="py-3 px-6 border border-tech-purple text-tech-purple rounded-lg font-medium hover:bg-tech-purple/30 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-tech-blue relative z-10">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-blue animate-spin-slow rounded-full"></div> */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-black">
                
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-400"><img src="images/RamaTeja.jpg"></img></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-5 -right-5 p-3 rounded-lg glass-card flex items-center gap-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ x:50 ,y: -30, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="font-medium text-sm text-white">Available for Work</span>
            </motion.div>
            
            {/* <motion.div 
              className="absolute -bottom-5 -left-5 p-3 rounded-lg glass-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 30, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="font-medium text-sm text-white">CGPA: 9.58/10</span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

