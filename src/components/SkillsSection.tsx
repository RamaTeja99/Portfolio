
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const programmingSkills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name:'TypeScript', level:85 },
    { name: 'JSX', level: 80 },
    { name: 'Bash', level: 75 },
  ];
  
  const databaseSkills = [
    { name: 'MySQL', level: 85 },
    { name:'Postgres', level:80 },
    { name: 'MongoDB', level: 80 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MERN',level:70 },
    { name: 'Django',level:75},
  ];
  
  const coreSkills = [
    'Data Structures and Algorithms',
    'Web Development',
    'Database Management Systems',
    'Docker Containerization',
    'Machine Learning',
    'Ethical Hacking',

  ];
  
  const softSkills = [
    'Leadership',
    'Communication',
    'Problem-Solving',
    'Teamwork',
    'Adaptability',
    'Creativity'
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-black text-gray-300" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-tech-purple">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <motion.div
            className="bg-gray-900 p-8 rounded-2xl shadow-lg card-hover"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6 text-white">Programming Skills</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    {/* <span className="text-sm text-tech-purple">{skill.level}%</span> */}
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-tech-purple to-tech-blue rounded-full"
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      custom={skill.level}
                      variants={barVariants}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Database Skills */}
          <motion.div
            className="bg-gray-900 p-8 rounded-2xl shadow-lg card-hover"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6 text-white">Database & Frameworks</h3>
            <div className="space-y-6">
              {databaseSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    {/* <span className="text-sm text-tech-purple">{skill.level}%</span> */}
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-tech-blue to-tech-teal rounded-full"
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      custom={skill.level}
                      variants={barVariants}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Core Skills */}
          <motion.div
            className="bg-gray-900 p-8 rounded-2xl shadow-lg card-hover"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6 text-white">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-tech-purple"></div>
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            className="bg-gray-900 p-8 rounded-2xl shadow-lg card-hover"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6 text-white">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="py-3 px-4 bg-black rounded-lg border border-gray-700 flex items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <span className="text-gray-300 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

