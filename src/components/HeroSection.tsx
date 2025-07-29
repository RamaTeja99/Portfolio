import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mainLabels = [
  "Rama Teja",
  "Software Developer",
  "Full Stack Developer",
  "Cybersecurity Enthusiast"
];
const labelPool = mainLabels.slice(1);

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");
  const typingSpeed = 1000;
  const erasingSpeed = 30;
  const pauseDuration = 6000;

  const text = mainLabels[currentTextIndex];

  useEffect(() => {
    let timeout;
    if (phase === "typing") {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 250);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), pauseDuration);
    } else if (phase === "erasing") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setPhase("typing");
        setCurrentTextIndex(prev => (prev + 1) % mainLabels.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, phase, text]);

  useEffect(() => {
    if (phase === "typing") setDisplayText("");
  }, [phase, currentTextIndex]);
  const currentLabelIndex = labelPool.indexOf(text);
  let badges = [];
  if (currentTextIndex === 0) {
    badges = labelPool;
  } else {
    const start = (currentLabelIndex + 1) % labelPool.length;
    badges = [
      labelPool[start],
      labelPool[(start + 1) % labelPool.length]
    ];
  }

  const labelVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0.12, 0.34, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.35, ease: [0.65, 0, 0.18, 1] } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20 pt-28 bg-black text-gray-300"
    >
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
          <div className="flex flex-row space-x-2 mb-6">
            {badges.map((label, idx) => (
              <AnimatePresence key={label + idx}>
                <motion.span
                  key={label + idx}
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block py-1 px-3 rounded-full bg-tech-purple/30 text-tech-purple font-medium text-sm"
                >
                  {label}
                </motion.span>
              </AnimatePresence>
            ))}
          </div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I&apos;m{" "}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={displayText}
                className="text-tech-purple"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.39, 0.575, 0.565, 1] }}
              >
                {displayText}
                <span className="blinking-cursor">|</span>
              </motion.span>
            </AnimatePresence>
          </motion.h1>
          <motion.p
            className="text-lg mb-8 text-gray-400 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Results-driven B.Tech student in Computer Science Engineering with strong expertise in
            DSA,
            <br />
            Web Development and Cybersecurity principles.
            <br />
            Skilled in Backend Development, API Integration, Secure Application Design, and Agile Project
            Management.
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
              <div className="absolute inset-2 rounded-full overflow-hidden bg-black">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-400">
                  <img src="images/RamaTeja.jpg" alt="Rama Teja" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blinking cursor styling */}
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-start infinite;
          color: #a855f7;
        }
        @keyframes blink {
          0%, 90% { opacity: 1; }
          90.01%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
