// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { motion } from 'framer-motion'
// // import { MoonIcon, SunIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

// // export default function Home() {
// //   const [darkMode, setDarkMode] = useState(false)

// //   useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add('dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //     }
// //   }, [darkMode]);
  
// //   const experiences = [
// //     {
// //       title: "Software Engineering Intern",
// //       company: "Middle East Council",
// //       date: "September 2024 - Current",
// //       description: [
// //         "Designed MongoDB database schemas for efficient data storage and retrieval across multiple applications.",
// //         "Utilized Python libraries to scrape numerous news outlets.",
// //         "Designed user-friendly interfaces using React and Tailwind CSS."
// //       ]
// //     },
// //     {
// //       title: "Researcher",
// //       company: "Qatar Research Development And Innovation - UERP",
// //       date: "March 2024 - January 2025",
// //       description: [
// //         "UREP31-013-3-004: Virtual Reality (VR) Simulated Interaction Between Micro-Mobility Vehicles and Pedestrians in Qatar",
// //         "Research Objective: Examine pedestrian responses to micro-mobility vehicles with a focus on speed and proximity.",
// //         "Hypothesis: Pedestrians demonstrate reflexive reactions in relation to vehicle speed and distance."
// //       ]
// //     },
// //     {
// //       title: "Software Engineering Intern",
// //       company: "Qatar Computing Research Institute (QCRI)",
// //       date: "May 2024 - July 2024",
// //       description: [
// //         "Utilized Python libraries to crawl information about scholars and scientists from Google.",
// //         "Utilized PostgreSQL database to store fetched data from Google Search and Wikipedia APIs.",
// //         "Integrated Large Language Model (LLama 3) to extract data.",
// //         "Developed a chatbot using the Retrieval-Augmented Generation (RAG) framework.",
// //         "Explored Virtual Reality (VR) and Augmented Reality (AR) technologies.",
// //         "Created 3D avatars for fetched nodes using Unity and Unreal Engine.",
// //         "Utilized Next.js to develop Full stack website in React."
// //       ]
// //     },
// //     {
// //       title: "Part-Time Technical Support",
// //       company: "Qatar University",
// //       date: "July 2023 - October 2023",
// //       description: [
// //         "Provided prompt and effective technical support to end-users, resolving hardware and software issues efficiently to minimize downtime."
// //       ]
// //     },
// //     {
// //       title: "Staff Member",
// //       company: "FIFA World Cup 2022 Fan Zone Network",
// //       date: "October 2022 - December 2022",
// //       description: [
// //         "Implemented and maintained network infrastructure to support high-volume data traffic.",
// //         "Implemented security measures to protect network resources and sensitive data from cyber threats.",
// //         "Monitored network performance and troubleshooted issues in real-time to minimize downtime and optimize user experience."
// //       ]
// //     }
// //   ]

// //   const skills = [
// //     "Python", "HTML", "CSS", "JavaScript", "React", "Prisma", "Java",
// //     "Object Oriented Programming", "Network", "SQL", "Data Structures",
// //     "Full Stack Web Development", "Postgres", "Teamwork", "Problem Solving",
// //     "Critical Thinking", "Linux"
// //   ]

// //   const projects = [
// //     {
// //       title: "AI-Powered News Aggregator",
// //       description: "Developed a web application that uses AI to aggregate and summarize news articles from various sources.",
// //       technologies: ["Python", "React", "MongoDB", "Machine Learning"]
// //     },
// //     {
// //       title: "Cybersecurity Threat Detection System",
// //       description: "Created a system that uses machine learning algorithms to detect and classify potential cybersecurity threats in real-time.",
// //       technologies: ["Python", "TensorFlow", "SQL", "Network Protocols"]
// //     },
// //     {
// //       title: "Virtual Reality Campus Tour",
// //       description: "Designed and implemented a VR application that provides an immersive tour of the Qatar University campus.",
// //       technologies: ["Unity", "C#", "3D Modeling", "VR Development"]
// //     }
// //   ]

// //   return (
// //     <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
// //       <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
// //         {/* Header */}
// //         <header className="fixed w-full bg-white dark:bg-gray-900 z-50">
// //           <nav className="container mx-auto px-6 py-3">
// //             <div className="flex justify-between items-center">
// //               <motion.a
// //                 href="#"
// //                 className="text-2xl font-bold"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 Anas Madkoor
// //               </motion.a>
// //               <div className="hidden md:flex space-x-4">
// //                 <a href="#about" className="hover:text-blue-500">About</a>
// //                 <a href="#experience" className="hover:text-blue-500">Experience</a>
// //                 <a href="#education" className="hover:text-blue-500">Education</a>
// //                 <a href="#skills" className="hover:text-blue-500">Skills</a>
// //                 <a href="#projects" className="hover:text-blue-500">Projects</a>
// //                 <a href="#contact" className="hover:text-blue-500">Contact</a>
// //               </div>
// //               <button
// //                 onClick={() => setDarkMode(!darkMode)}
// //                 className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
// //               >
// //                 {darkMode ? (
// //                   <SunIcon className="h-6 w-6 text-yellow-500" />
// //                 ) : (
// //                   <MoonIcon className="h-6 w-6 text-gray-800" />
// //                 )}
// //               </button>
// //             </div>
// //           </nav>
// //         </header>

// //         <main>
// //           {/* Hero Section */}
// //           <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
// //             <motion.div
// //               className="text-center"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <h1 className="text-5xl font-bold mb-4">Anas Madkoor</h1>
// //               <h2 className="text-3xl mb-6">Computer Science & Cybersecurity Student</h2>
// //               <p className="text-xl mb-8">Passionate about AI and its potential to advance society</p>
// //               <motion.a
// //                 href="#contact"
// //                 className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Get in Touch
// //               </motion.a>
// //             </motion.div>
// //           </section>

// //           {/* About Section */}
// //           <section id="about" className="py-20 bg-white dark:bg-gray-900">
// //             <div className="container mx-auto px-4">
// //               <motion.h2
// //                 className="text-3xl font-bold mb-8 text-center"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 About Me
// //               </motion.h2>
// //               <motion.p
// //                 className="text-lg mb-6"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 0.2 }}
// //               >
// //                 As a senior Computer Science student specializing in Cybersecurity at Qatar University, I am deeply passionate about the intersection of technology and society. With a keen interest in AI, I am driven to explore its potential contributions to societal advancement.
// //               </motion.p>
// //               <motion.p
// //                 className="text-lg"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 0.4 }}
// //               >
// //                 Currently, I am working as a Software Engineering Intern at the Middle East Council, where I am gaining valuable experience in designing database schemas, web scraping, and creating user-friendly interfaces.
// //               </motion.p>
// //             </div>
// //           </section>

// //           {/* Experience Section */}
// //           <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
// //             <div className="container mx-auto px-4">
// //               <motion.h2
// //                 className="text-3xl font-bold mb-8 text-center"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 Professional Experience
// //               </motion.h2>
// //               <div className="space-y-12">
// //                 {experiences.map((exp, index) => (
// //                   <motion.div
// //                     key={index}
// //                     className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.5, delay: index * 0.1 }}
// //                   >
// //                     <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
// //                     <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
// //                     <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.date}</p>
// //                     <ul className="list-disc list-inside space-y-2">
// //                       {exp.description.map((item, i) => (
// //                         <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
// //                       ))}
// //                     </ul>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           </section>

// //           {/* Education Section */}
// //           <section id="education" className="py-20 bg-white dark:bg-gray-900">
// //             <div className="container mx-auto px-4">
// //               <motion.h2
// //                 className="text-3xl font-bold mb-8 text-center"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 Education
// //               </motion.h2>
// //               <motion.div
// //                 className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 0.2 }}
// //               >
// //                 <h3 className="text-xl font-semibold mb-2">Qatar University</h3>
// //                 <p className="text-gray-600 dark:text-gray-300 mb-2">College of Engineering</p>
// //                 <p className="text-gray-500 dark:text-gray-400 mb-4">Computer Science, Concentration in Cyber Security</p>
// //                 <p className="text-gray-500 dark:text-gray-400 mb-4">September 2021 - June 2025</p>
// //                 <ul className="list-disc list-inside space-y-2">
// //                   <li className="text-gray-700 dark:text-gray-300">Member of AI club</li>
// //                   <li className="text-gray-700 dark:text-gray-300">Member of computing club</li>
// //                   <li className="text-gray-700 dark:text-gray-300">Member of TEDx club</li>
// //                   <li className="text-gray-700 dark:text-gray-300">Member of eSports club</li>
// //                 </ul>
// //               </motion.div>
// //             </div>
// //           </section>

// //           {/* Skills Section */}
// //           <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
// //             <div className="container mx-auto px-4">
// //               <motion.h2
// //                 className="text-3xl font-bold mb-8 text-center"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 Skills
// //               </motion.h2>
// //               <div className="flex flex-wrap justify-center gap-4">
// //                 {skills.map((skill, index) => (
// //                   <motion.div
// //                     key={index}
// //                     className="bg-white dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold"
// //                     initial={{ opacity: 0, scale: 0.9 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ duration: 0.3, delay: index * 0.05 }}
// //                   >
// //                     {skill}
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           </section>

// //           {/* Projects Section */}
// //           <section id="projects" className="py-20 bg-white dark:bg-gray-900">
// //             <div className="container mx-auto px-4">
// //               <motion.h2
// //                 className="text-3xl font-bold mb-8 text-center"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 Projects
// //               </motion.h2>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                 {projects.map((project, index) => (
// //                   <motion.div
// //                     key={index}
// //                     className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.5, delay: index * 0.1 }}
// //                   >
// //                     <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
// //                     <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
// //                     <div className="flex flex-wrap gap-2">
// //                       {project.technologies.map((tech, i) => (
// //                         <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
// //                           {tech}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           </section>

// //           {/* Contact Section */}
// //           <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
// //             <div className="container mx-auto px-4">
// //               <motion.h2
// //                 className="text-3xl font-bold mb-8 text-center"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 Contact Me
// //               </motion.h2>
// //               <div className="max-w-2xl mx-auto">
// //                 <motion.div
// //                   className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 space-y-4"
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.5, delay: 0.2 }}
// //                 >
// //                   <div className="flex items-center">
// //                     <PhoneIcon className="h-6 w-6 text-blue-500 mr-4" />
// //                     <p className="text-gray-700 dark:text-gray-300">+974 3107 6188</p>
// //                   </div>
// //                   <div className="flex items-center">
// //                     <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-4" />
// //                     <p className="text-gray-700 dark:text-gray-300">ansamr76@gmail.com</p>
// //                   </div>
// //                   <div className="flex items-center">
// //                     <MapPinIcon className="h-6 w-6 text-blue-500 mr-4" />
// //                     <p className="text-gray-700 dark:text-gray-300">Doha, Qatar</p>
// //                   </div>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </section>
// //         </main>

// //         {/* Footer */}
// //         <footer className="bg-gray-900 text-white py-8">
// //           <div className="container mx-auto px-4 text-center">
// //             <p>&copy; 2024 Anas Madkoor. All rights reserved.</p>
// //           </div>
// //         </footer>
// //       </div>
// //     </div>
// //   )
// // }




// 'use client'

// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { MoonIcon, SunIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   const experiences = [
//     {
//       title: "Software Engineering Intern",
//       company: "Middle East Council",
//       date: "September 2024 - Current",
//       description: [
//         "Designed MongoDB database schemas for efficient data storage and retrieval across multiple applications.",
//         "Utilized Python libraries to scrape numerous news outlets.",
//         "Designed user-friendly interfaces using React and Tailwind CSS."
//       ]
//     },
//     {
//       title: "Researcher",
//       company: "Qatar Research Development And Innovation - UERP",
//       date: "March 2024 - January 2025",
//       description: [
//         "UREP31-013-3-004: Virtual Reality (VR) Simulated Interaction Between Micro-Mobility Vehicles and Pedestrians in Qatar",
//         "Research Objective: Examine pedestrian responses to micro-mobility vehicles with a focus on speed and proximity.",
//         "Hypothesis: Pedestrians demonstrate reflexive reactions in relation to vehicle speed and distance."
//       ]
//     },
//     {
//       title: "Software Engineering Intern",
//       company: "Qatar Computing Research Institute (QCRI)",
//       date: "May 2024 - July 2024",
//       description: [
//         "Utilized Python libraries to crawl information about scholars and scientists from Google.",
//         "Utilized PostgreSQL database to store fetched data from Google Search and Wikipedia APIs.",
//         "Integrated Large Language Model (LLama 3) to extract data.",
//         "Developed a chatbot using the Retrieval-Augmented Generation (RAG) framework.",
//         "Explored Virtual Reality (VR) and Augmented Reality (AR) technologies.",
//         "Created 3D avatars for fetched nodes using Unity and Unreal Engine.",
//         "Utilized Next.js to develop Full stack website in React."
//       ]
//     },
//     {
//       title: "Part-Time Technical Support",
//       company: "Qatar University",
//       date: "July 2023 - October 2023",
//       description: [
//         "Provided prompt and effective technical support to end-users, resolving hardware and software issues efficiently to minimize downtime."
//       ]
//     },
//     {
//       title: "Staff Member",
//       company: "FIFA World Cup 2022 Fan Zone Network",
//       date: "October 2022 - December 2022",
//       description: [
//         "Implemented and maintained network infrastructure to support high-volume data traffic.",
//         "Implemented security measures to protect network resources and sensitive data from cyber threats.",
//         "Monitored network performance and troubleshooted issues in real-time to minimize downtime and optimize user experience."
//       ]
//     }
//   ]

//   const skills = [
//     "Python", "HTML", "CSS", "JavaScript", "React", "Prisma", "Java",
//     "Object Oriented Programming", "Network", "SQL", "Data Structures",
//     "Full Stack Web Development", "Postgres", "Teamwork", "Problem Solving",
//     "Critical Thinking", "Linux"
//   ]

//   const projects = [
//     {
//       title: "AI-Powered News Aggregator",
//       description: "Developed a web application that uses AI to aggregate and summarize news articles from various sources.",
//       technologies: ["Python", "React", "MongoDB", "Machine Learning"]
//     },
//     {
//       title: "Cybersecurity Threat Detection System",
//       description: "Created a system that uses machine learning algorithms to detect and classify potential cybersecurity threats in real-time.",
//       technologies: ["Python", "TensorFlow", "SQL", "Network Protocols"]
//     },
//     {
//       title: "Virtual Reality Campus Tour",
//       description: "Designed and implemented a VR application that provides an immersive tour of the Qatar University campus.",
//       technologies: ["Unity", "C#", "3D Modeling", "VR Development"]
//     }
//   ]

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
//       <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         {/* Header */}
//         <header className="fixed w-full bg-white dark:bg-gray-900 z-50 shadow-md">
//           <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
//             <motion.a
//               href="#"
//               className="text-2xl font-bold"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Anas Madkoor
//             </motion.a>
//             <div className="hidden md:flex space-x-4">
//               <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
//               <a href="#experience" className="hover:text-blue-500 transition duration-300">Experience</a>
//               <a href="#education" className="hover:text-blue-500 transition duration-300">Education</a>
//               <a href="#skills" className="hover:text-blue-500 transition duration-300">Skills</a>
//               <a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a>
//               <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
//             </div>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
//             >
//               {darkMode ? (
//                 <SunIcon className="h-6 w-6 text-yellow-500" />
//               ) : (
//                 <MoonIcon className="h-6 w-6 text-gray-800" />
//               )}
//             </button>
//           </nav>
//         </header>

//         <main>
//           {/* Hero Section */}
//           <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
//             <motion.div
//               className="text-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-5xl font-bold mb-4">Anas Madkoor</h1>
//               <h2 className="text-3xl mb-6">Computer Science & Cybersecurity Student</h2>
//               <p className="text-xl mb-8">Passionate about AI and its potential to advance society</p>
//               <motion.a
//                 href="#contact"
//                 className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get in Touch
//               </motion.a>
//             </motion.div>
//           </section>

//           {/* About Section */}
//           <section id="about" className="py-20 bg-white dark:bg-gray-900">
//             <div className="container mx-auto px-4">
//               <motion.h2
//                 className="text-3xl font-bold mb-8 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 About Me
//               </motion.h2>
//               <motion.p
//                 className="text-lg mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 As a senior Computer Science student specializing in Cybersecurity at Qatar University, I am deeply passionate about the intersection of technology and society. With a keen interest in AI, I am driven to explore its potential contributions to societal advancement.
//               </motion.p>
//               <motion.p
//                 className="text-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               >
//                 Currently, I am working as a Software Engineering Intern at the Middle East Council, where I am gaining valuable experience in designing database schemas, web scraping, and creating user-friendly interfaces.
//               </motion.p>
//             </div>
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
//             <div className="container mx-auto px-4">
//               <motion.h2
//                 className="text-3xl font-bold mb-8 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Professional Experience
//               </motion.h2>
//               <div className="space-y-12">
//                 {experiences.map((exp, index) => (
//                   <motion.div
//                     key={index}
//                     className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                   >
//                     <h3 className="text-xl font-semibold">{exp.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
//                     <p className="text-gray-500 dark:text-gray-500">{exp.date}</p>
//                     <ul className="list-disc list-inside mt-4">
//                       {exp.description.map((desc, i) => (
//                         <li key={i}>{desc}</li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Education Section */}
//           <section id="education" className="py-20 bg-white dark:bg-gray-900">
//             <div className="container mx-auto px-4">
//               <motion.h2
//                 className="text-3xl font-bold mb-8 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Education
//               </motion.h2>
//               <motion.div
//                 className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
//                 <p className="text-gray-600 dark:text-gray-400">Qatar University</p>
//                 <p className="text-gray-500 dark:text-gray-500">Expected Graduation: 2025</p>
//               </motion.div>
//             </div>
//           </section>

//           {/* Skills Section */}
//           <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
//             <div className="container mx-auto px-4">
//               <motion.h2
//                 className="text-3xl font-bold mb-8 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Skills
//               </motion.h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {skills.map((skill, index) => (
//                   <motion.div
//                     key={index}
//                     className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                   >
//                     <p>{skill}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section id="projects" className="py-20 bg-white dark:bg-gray-900">
//             <div className="container mx-auto px-4">
//               <motion.h2
//                 className="text-3xl font-bold mb-8 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Projects
//               </motion.h2>
//               <div className="space-y-12">
//                 {projects.map((project, index) => (
//                   <motion.div
//                     key={index}
//                     className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                   >
//                     <h3 className="text-xl font-semibold">{project.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {project.technologies.map((tech, i) => (
//                         <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
//             <div className="container mx-auto px-4">
//               <motion.h2
//                 className="text-3xl font-bold mb-8 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Contact
//               </motion.h2>
//               <div className="flex flex-col items-center">
//                 <a href="tel:+1234567890" className="flex items-center text-lg mb-4">
//                   <PhoneIcon className="h-6 w-6 mr-2 text-blue-500 dark:text-blue-300" />
//                   +1234567890
//                 </a>
//                 <a href="mailto:anas.madkoor@example.com" className="flex items-center text-lg mb-4">
//                   <EnvelopeIcon className="h-6 w-6 mr-2 text-blue-500 dark:text-blue-300" />
//                   anas.madkoor@example.com
//                 </a>
//                 <a href="https://maps.google.com/?q=Qatar" className="flex items-center text-lg">
//                   <MapPinIcon className="h-6 w-6 mr-2 text-blue-500 dark:text-blue-300" />
//                   Qatar
//                 </a>
//               </div>
//             </div>
//           </section>
//         </main>

//         {/* Footer */}
//         <footer className="bg-gray-200 dark:bg-gray-900 py-6 text-center">
//           <p className="text-gray-600 dark:text-gray-400">
//             &copy; 2024 Anas Madkoor. All rights reserved.
//           </p>
//         </footer>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Middle East Council",
      date: "September 2024 - Current",
      description: [
        "Designed MongoDB database schemas for efficient data storage and retrieval across multiple applications.",
        "Utilized Python libraries to scrape numerous news outlets.",
        "Designed user-friendly interfaces using React and Tailwind CSS."
      ]
    },
    {
      title: "Researcher",
      company: "Qatar Research Development And Innovation - UERP",
      date: "March 2024 - January 2025",
      description: [
        "UREP31-013-3-004: Virtual Reality (VR) Simulated Interaction Between Micro-Mobility Vehicles and Pedestrians in Qatar",
        "Research Objective: Examine pedestrian responses to micro-mobility vehicles with a focus on speed and proximity.",
        "Hypothesis: Pedestrians demonstrate reflexive reactions in relation to vehicle speed and distance."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Qatar Computing Research Institute (QCRI)",
      date: "May 2024 - July 2024",
      description: [
        "Utilized Python libraries to crawl information about scholars and scientists from Google.",
        "Utilized PostgreSQL database to store fetched data from Google Search and Wikipedia APIs.",
        "Integrated Large Language Model (LLama 3) to extract data.",
        "Developed a chatbot using the Retrieval-Augmented Generation (RAG) framework.",
        "Explored Virtual Reality (VR) and Augmented Reality (AR) technologies.",
        "Created 3D avatars for fetched nodes using Unity and Unreal Engine.",
        "Utilized Next.js to develop Full stack website in React."
      ]
    },
    {
      title: "Part-Time Technical Support",
      company: "Qatar University",
      date: "July 2023 - October 2023",
      description: [
        "Provided prompt and effective technical support to end-users, resolving hardware and software issues efficiently to minimize downtime."
      ]
    },
    {
      title: "Staff Member",
      company: "FIFA World Cup 2022 Fan Zone Network",
      date: "October 2022 - December 2022",
      description: [
        "Implemented and maintained network infrastructure to support high-volume data traffic.",
        "Implemented security measures to protect network resources and sensitive data from cyber threats.",
        "Monitored network performance and troubleshooted issues in real-time to minimize downtime and optimize user experience."
      ]
    }
  ]

  const skills = [
    "Python", "HTML", "CSS", "JavaScript", "React", "Prisma", "Java",
    "Object Oriented Programming", "Network", "SQL", "Data Structures",
    "Full Stack Web Development", "Postgres", "Teamwork", "Problem Solving",
    "Critical Thinking", "Linux"
  ]

  const projects = [
    {
      title: "AI-Powered News Aggregator",
      description: "Developed a web application that uses AI to aggregate and summarize news articles from various sources.",
      technologies: ["Python", "React", "MongoDB", "Machine Learning"]
    },
    {
      title: "Cybersecurity Threat Detection System",
      description: "Created a system that uses machine learning algorithms to detect and classify potential cybersecurity threats in real-time.",
      technologies: ["Python", "TensorFlow", "SQL", "Network Protocols"]
    },
    {
      title: "Virtual Reality Campus Tour",
      description: "Designed and implemented a VR application that provides an immersive tour of the Qatar University campus.",
      technologies: ["Unity", "C#", "3D Modeling", "VR Development"]
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Anas Madkoor
          </motion.a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Experience</a>
            <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Education</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 transition-colors duration-300"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Anas Madkoor</h1>
            <h2 className="text-3xl mb-6 text-gray-700 dark:text-gray-300">Computer Science & Cybersecurity Student</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">Passionate about AI and its potential to advance society</p>
            <motion.a
              href="#contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-lg mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As a senior Computer Science student specializing in Cybersecurity at Qatar University, I am deeply passionate about the intersection of technology and society. With a keen interest in AI, I am driven to explore its potential contributions to societal advancement.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Currently, I am working as a Software Engineering Intern at the Middle East Council, where I am gaining valuable experience in designing database schemas, utilizing Python for data scraping, and developing user-friendly interfaces.
            </motion.p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Experience
            </motion.h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-300">{exp.date}</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h2>
            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-400">Qatar University</p>
              <p className="text-gray-500 dark:text-gray-300">Expected Graduation: 2025</p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <p className="text-gray-900 dark:text-gray-100">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.h2>
            <div className="flex flex-col items-center">
              <a href="tel:+1234567890" className="flex items-center text-lg mb-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <PhoneIcon className="h-6 w-6 mr-2 text-blue-500 dark:text-blue-300" />
                +1234567890
              </a>
              <a href="mailto:anas.madkoor@example.com" className="flex items-center text-lg mb-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <EnvelopeIcon className="h-6 w-6 mr-2 text-blue-500 dark:text-blue-300" />
                anas.madkoor@example.com
              </a>
              <a href="https://maps.google.com/?q=Qatar" className="flex items-center text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <MapPinIcon className="h-6 w-6 mr-2 text-blue-500 dark:text-blue-300" />
                Qatar
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 py-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; 2024 Anas Madkoor. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
