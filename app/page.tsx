'use client'

import React, { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Updated transforms for smoother animation and scaling
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1.6])
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      transition={{ duration: 0.8, ease: "easeOut" }} // Updated timing and easing
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(true)

  React.useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-600" />}
      </button>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
      <FadeInSection>
          <section className="mb-24 backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 p-8 rounded-2xl border border-white/20 dark:border-gray-800/20 shadow-xl transition-all duration-500">
            <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-700 text-transparent bg-clip-text animate-gradient">Anas Madkoor</h1>
            <p className="text-2xl mb-3 text-gray-700 dark:text-gray-300">BSc Computer Science & Cybersecurity, Qatar University</p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <a href="mailto:ansamr76@gmail.com" className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                ansamr76@gmail.com
              </a>{' '}
              | +97431076188 | Doha, Qatar
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="https://www.linkedin.com/in/anas-madkoor-035224298/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>
              <a href="https://github.com/C974" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <FaGithub className="text-2xl text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="text-gray-700 dark:text-gray-300">GitHub</span>
              </a>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Professional Summary</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 ">
            As a fresh graduate in Computer Science from Qatar University, with a concentration in Cybersecurity, I am deeply passionate about the intersection of technology and society. 
            With a strong foundation in securing digital systems and a keen interest in AI, I am driven to explore its potential contributions to societal advancement while ensuring robust protection against cyber threats.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Languages</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {['English', 'Arabic'].map((language) => (
    <li 
      key={language} 
      className="backdrop-blur-md bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10 border border-white/40 dark:border-gray-700/40 px-5 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:scale-105 hover:border-blue-300/50 dark:hover:border-blue-500/50 flex items-center justify-center text-center text-gray-800 dark:text-gray-200 group"
    >
      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{language}</span>
    </li>
  ))}
</ul>
          </section>
        </FadeInSection>

        <FadeInSection>
        <section className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 backdrop-blur-lg border border-white/20 dark:border-gray-800/30 shadow-xl">
  <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block relative">
    Skills
  </h2>
  
  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {[
      'Python',
      'Java',
      'C',
      'HTML',
      'TailwindCSS',
      'JavaScript',
      'React',
      'SQL',
      'PyTorch',
      'RESTful APIs',
      'Prisma',
      'MongoDB',
      'Postgres',
      'Full Stack Web Development',
      'Object Oriented Programming',
      'Data Structures',
      'Network',
      'Agile',
      'Cybersecurity Best Practices',
      'Software Development',
      'Git/GitHub',
      'Quality Assurance',
      'Communication',
      'Time Management',
      'Teamwork',
      'Problem Solving',
      'Critical Thinking',
      'Linux',
    ].map((skill) => (
      <li 
        key={skill} 
        className="backdrop-blur-md bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10 border border-white/40 dark:border-gray-700/40 px-5 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:scale-105 hover:border-blue-300/50 dark:hover:border-blue-500/50 flex items-center justify-center text-center text-gray-800 dark:text-gray-200 group"
      >
        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill}</span>
      </li>
    ))}
  </ul>
</section>
        </FadeInSection>

   {/* Professional Experience Section */}
   <FadeInSection>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block relative">
              Professional Experience
              <span className="absolute -bottom-2 left-0 w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <div className="space-y-8">
              
              {/* Research Assistant */}
              <FadeInSection>
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Research Assistant</h3>
                  <a className="relative inline-block text-gray-600 dark:text-gray-400 text-lg mb-2">
                    UREP 32-0227-250242: IoT- and AI-enabled smart irrigation system.
                  </a>
                  <a 
                    href="https://connect.qrdi.org.qa/scientific-research/p/opportunities" 
                    className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Qatar Research, Development and Innovation (QRDI) Council - Doha, Qatar
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 inline-flex items-center">
                    <br></br>
                    <span className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                    March 2025 - Present
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    {[
                      "UREP 32-0227-250242: IoT- and Al-Enabled Smart Irrigation System for Sustainable Greenhouse Farming.",
                      "Research Objective: Enhance agricultural efficiency and food security by integrating IoT and AI to optimize irrigation, resource management, and environmental control within greenhouses."
                     
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
              
            
              {/* Software Engineering Intern at Middle East Council */}
              <FadeInSection>
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Software Engineering Intern</h3>
                  <a 
                    href="https://mecouncil.org/" 
                    className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Middle East Council on Global Affairs - Doha, Qatar
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 flex-row items-center">
                    <span className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                    September 2024 - Present
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    {[
                      "Designed MongoDB database schemas for efficient data storage and retrieval.",
                      "Utilized Python libraries for web scraping from various news outlets.",
                      "Utilized NewsAPI for real-time news updates.",
                      "Developed a web application that aggregates and summarizes news articles using React, Tailwind CSS and MongoDB."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              {/* Researcher */}
              <FadeInSection>
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Researcher Assistant</h3>
                  <a
                    href="https://connect.qrdi.org.qa/scientific-research/p/opportunities/p/25"
                    className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    Qatar Research Development And Innovation - UERP - Doha, Qatar
                  </a>
                  <br></br>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 inline-flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                    March 2024 - Present
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      UREP31-013-3-004: Virtual Reality (VR) Simulated Interaction Between Micro-Mobility Vehicles and Pedestrians in Qatar.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Research Objective: Examine pedestrian responses to micro-mobility vehicles with a focus on speed and proximity.
                    </li>
                  </ul>
                </div>
              </FadeInSection>

              {/* Research Intern */}

              <FadeInSection>
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Research Intern</h3>
                <a 
                  href="https://www.hbku.edu.qa/en/qcri" 
                  className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Qatar Computing Research Institute (QCRI) - Doha, Qatar
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4  items-center flex-row">
                  September 2024 - February 2025
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  {[
                    "Designed prompts for Fanar model to boost output relevance.",
                    "Optimized prompts to improve model accuracy.",
                    "Worked in Agile team to enhance project development.",
                    "Improved NLP for standard Arabic and dialects."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
              

              {/* Research participant */}
              <FadeInSection>
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Research participant</h3>
                  <a
                    href="https://qatar-weill.cornell.edu/"
                    className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    Weill Cornell Medicine - Doha, Qatar
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 flex-row items-center">
                    November 2024 - January 2025
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Contributed to a research study on minimal burden wearables for assessing student stress.

                    </li>
                  </ul>
                   <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                  Assisted in data collection and analysis to evaluate physiological and behavioral stress indicators

                    </li>
                  </ul>
                </div>
              </FadeInSection>

              {/* Software Engineering Intern at QCRI */}
              <FadeInSection>
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Software Engineering Intern</h3>
                  <a
                    href="https://www.hbku.edu.qa/en/qcri"
                    className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    Qatar Computing Research Institute (QCRI) - Doha, Qatar
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 flex-row items-center">
                    May 2024 - August 2024
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Utilized Python libraries for web crawling and data extraction.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Integrated Large Language Model (LLama 3) for data extraction.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Developed a chatbot using the Retrieval-Augmented Generation (RAG) framework.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Explored VR and AR technologies, creating 3D avatars using Unity and Unreal Engine.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Developed a full-stack website using Next.js and React.
                    </li>
                  </ul>
                </div>
              </FadeInSection>

              {/* Network Staff Member */}
              <FadeInSection>
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Network Staff Member</h3>
                  <a
                    href="https://www.fifa.com/"
                    className="relative inline-block text-blue-600 dark:text-blue-400 text-lg transition-transform duration-300 hover:text-blue-700 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    FIFA World Cup 2022 Fan Zone Network
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 flex-row items-center">
                    October 2022 - December 2022
                  </p>
                  <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Implemented and maintained network infrastructure to support high-volume data traffic.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Implemented security measures to protect network resources and sensitive data from cyber threats.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Monitored network performance and troubleshooted issues in real-time to minimize downtime and optimize user experience.
                    </li>
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </section>
        </FadeInSection>
        
        {/* Extracurricular Activities Section */}
        <FadeInSection>
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block relative">
      Extracurricular Activities
      <span className="absolute -bottom-2 left-0 w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Microsoft QU Student Club */}
      <FadeInSection>
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-6 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] h-full flex flex-col">
          <a href="https://www.linkedin.com/company/microsoft-qu" className="relative inline-block group mb-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
              Co-Founder & Treasurer of Microsoft QU Student Club
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </h3>
          </a>
          <div className="mt-auto flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-600 dark:text-gray-400">February 2025 - Present</p>
          </div>
        </div>
      </FadeInSection>
      
      {/* ACM Club */}
      <FadeInSection>
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-6 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] h-full flex flex-col">
          <a href="https://www.linkedin.com/company/acm-qu/" className="relative inline-block group mb-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
              Member of Association for Computing Machinery (ACM) club events management team
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </h3>
          </a>
          <div className="mt-auto flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-600 dark:text-gray-400">December 2024 - Present</p>
          </div>
        </div>
      </FadeInSection>
      
      {/* MENA ML */}
      <FadeInSection>
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-6 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] h-full flex flex-col">
          <a href="https://www.mena.ml/" className="relative inline-block group mb-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
           MENA ML
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </h3>
          </a>
          <p className="text-lg text-gray-600 dark:text-gray-400 ">Volunteer </p>
          <div className="mt-auto flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-600 dark:text-gray-400">February 2025</p>
          </div>
        </div>
      </FadeInSection>

        {/* International Conference On Web Information Systems Engineering (WISE) */}
        <FadeInSection>
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-6 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] h-full flex flex-col">
          <a href="https://wise2024-qatar.com/" className="relative inline-block group mb-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
              International Conference On Web Information Systems Engineering (WISE)
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </h3>
          </a>
          <p className="text-lg text-gray-600 dark:text-gray-400 ">Volunteer </p>
          <div className="mt-auto flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-600 dark:text-gray-400">December 2025</p>
          </div>
        </div>
      </FadeInSection>
      
      
      {/* Qatar University Open Day */}
      <FadeInSection>
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-6 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] h-full flex flex-col">
          <a href="https://qu.edu.qa" className="relative inline-block group mb-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
              Qatar University Open Day
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </h3>
          </a>
          <p className="text-lg text-gray-600 dark:text-gray-400 ">Volunteer </p>

          <div className="mt-auto flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-600 dark:text-gray-400">February 2024</p>
          </div>
        </div>
      </FadeInSection>

      {/* Fifa Arab Cup 2021 */}
      <FadeInSection>
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-6 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] h-full flex flex-col">
          <a href="https://www.fifa.com/" className="relative inline-block group mb-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
              Fifa Arab Cup 2021
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </h3>
          </a>
          <p className="text-lg text-gray-600 dark:text-gray-400 ">Volunteer </p>
          <div className="mt-auto flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-600 dark:text-gray-400">November 2021 - December 2021</p>
          </div>
        </div>
      </FadeInSection>
      
      
    
      
    </div>
  </section>
</FadeInSection>
        
        {/* Education Section */}
        <FadeInSection>
          <section>
            <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block relative">
              Education
              <span className="absolute -bottom-2 left-0 w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-900/10 p-8 rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <a href="https://qu.edu.qa" className="relative inline-block group">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-transform duration-300 group-hover:text-blue-600 group-hover:scale-105 relative">
                      Qatar University
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                    </h3>
                  </a>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-medium mb-4">
                    BSc Computer Science, Concentration in Cyber Security
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                    2021 - 2025
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {["AI club", "Computing Club", "TEDx club", "eSports club"].map((club, index) => (
                  <div key={index} className="flex items-center p-3 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 rounded-lg border border-white/10 dark:border-gray-700/20">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">Member of {club}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
    </div>
  )
}
