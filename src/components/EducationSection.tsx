
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Tech',
      institution: 'Koneru Lakshmaiah Education Foundation',
      period: '08 2022 – 05 2026',
      location: 'Vijayawada, India',
      achievement: 'CGPA: 9.58 (up to the 4th semester)'
    },
    {
      degree: 'Intermediate',
      institution: 'Narayana Junior College',
      period: '07 2020 – 04 2022',
      location: 'Vijayawada, India',
      achievement: 'CGPA: 8.96'
    },
    {
      degree: 'SSC',
      institution: 'Sri Chaitanya School',
      period: '06 2019 – 03 2020',
      location: 'Avanigadda, India',
      achievement: 'CGPA: 9.7'
    }
  ];
  
  const certifications = [
    {
      title: 'Red Hat Certified Enterprise Application Developer',
      issuer: 'REDHAT EX183',
      link: 'https://www.credly.com/badges/466e4748-d2ff-4a45-906a-23edeedc89c2/public_url'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'AWS CLFC02',
      link: 'https://www.credly.com/badges/62204d1b-529d-4eb4-b770-dabaa4bf9e28/public_url'
    },
    {
      title: 'Automation Anywhere Certified Essentials RPA Professional',
      issuer: 'A360',
      link: 'https://certificates.automationanywhere.com/bc987dcb-40df-4787-8290-c1fa78acfe0d#acc.hr3PIdAq'
    }
  ];
  
  const internships = [
    {
      title: 'Cyber Security with Kali Linux with IBM',
      type: 'Virtual'
    },
    {
      title: 'Ethical Hacking Virtual Internship with EduSkills',
      type: 'Virtual'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-black text-gray-300" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Education & <span className="text-tech-purple">Certification</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              className="text-2xl font-bold font-display mb-6 text-white"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-tech-purple after:content-[''] after:absolute after:left-[7px] after:top-6 after:w-0.5 after:h-full after:bg-tech-purple/50 last:after:hidden"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="p-6 bg-gray-900 rounded-xl shadow-md card-hover">
                    <h4 className="text-xl font-bold font-display text-white">{item.degree}</h4>
                    <p className="text-lg text-gray-300 mb-2">{item.institution}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {item.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {item.location}
                    </div>
                    <div className="mt-2 py-2 px-3 bg-tech-purple/20 text-tech-purple rounded-lg inline-block">
                      {item.achievement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications & Internships */}
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <motion.h3
                className="text-2xl font-bold font-display mb-6 text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Certifications
              </motion.h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="rounded-full bg-tech-purple/20 p-3 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-purple">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                        <p className="text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Internships */}
            <div>
              <motion.h3
                className="text-2xl font-bold font-display mb-6 text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Internships
              </motion.h3>
              
              <div className="space-y-4">
                {internships.map((internship, index) => (
                  <motion.div
                    key={internship.title}
                    className="p-5 bg-gray-900 rounded-xl shadow-md"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="rounded-full bg-tech-blue/20 p-3 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-blue">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{internship.title}</h4>
                        <p className="text-gray-400">{internship.type}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

