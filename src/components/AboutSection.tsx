import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative bg-black text-gray-300">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-purple/20 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-tech-blue/20 rounded-tr-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl" ref={ref}>
        <motion.h2 
          className="section-heading text-center text-white mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-tech-purple">Me</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <h3 className="text-2xl font-bold font-display mb-4 text-white text-center md:text-left">
            B.Tech Computer Science Student with a passion for Cyber Security
          </h3> */}

          <p className="text-gray-400 mb-6">
            Results-driven B.Tech student in Computer Science Engineering with a strong foundation in Cyber Security and Web Development. 
            Proven ability in vulnerability assessment, penetration testing, and implementing security best practices.
          </p>

          <p className="text-gray-400 mb-6">
            Adept at front-end and back-end development with hands-on experience in developing user-centric applications.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-bold text-white mb-2">Location</h4>
              <p className="text-gray-400">Avanigadda, Andhra Pradesh, India</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Email</h4>
              <p className="text-gray-400">2200032668cseh@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Phone</h4>
              <p className="text-gray-400">+91 9963400955</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Degree</h4>
              <p className="text-gray-400">B.Tech in CSE</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <a 
              href="#contact" 
              className="py-3 px-6 bg-tech-purple text-white rounded-lg font-medium hover:bg-tech-dark-purple transition-colors inline-flex items-center"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
