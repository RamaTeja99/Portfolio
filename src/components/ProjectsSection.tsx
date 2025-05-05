
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Student Extracurricular Achievement Platform (SEAP)',
      description: 'Designed to leverage advanced management tools for tracking and maintaining student extracurricular achievements. It enables institutions to add, update, and modify student records seamlessly.',
      tech: ['Spring Boot', 'Java', 'MySQL'],
      link: 'https://github.com/RamaTeja99/Student_Extracurricular_Achievements_Platform',
      deploylink:'https://seap.netlify.app/',
      image: 'images/seap.png'
    },
    {
      title: 'CloudBasedVPN',
      description: 'A cloud-based VPN platform using WireGuard, with dynamic config and QR code generation, built on a modern fullstack setup.',
      tech: ['Spring Boot', 'Java', 'MySQL'],
      link: 'https://github.com/RamaTeja99/CloudBasedVPN',
      deploylink:'https://cloudbasedvpn.netlify.app/',
      image: 'images/cloudvpn.png'
    },
    {
      title: 'E-Survey Web Application',
      description: 'The E-Survey Web Application is a Mern Stack Project and ESurvey is a user-friendly and efficient platform designed to create, distribute, and collect survey responses online.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/RamaTeja99/E-Survey-Web-Application',
      deploylink:'https://e-survey-react.netlify.app/',
      image: 'images/e-survey.png' 
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-20 bg-black text-gray-300" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-tech-purple">Projects</span>
        </motion.h2>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-48 overflow-hidden bg-gray-800">
                <a href={project.deploylink} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
                </a>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-display mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs py-1 px-2 bg-tech-purple/30 text-tech-purple rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-tech-blue font-medium hover:text-tech-purple flex items-center"
                >
                  View Project
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <a 
            href="https://github.com/RamaTeja99" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-3 px-6 border-2 border-tech-purple text-tech-purple rounded-lg font-medium hover:bg-tech-purple hover:text-white transition-colors inline-flex items-center"
          >
            View More on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

