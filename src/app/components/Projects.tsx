import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  borderColor: string;
  status: string;
  buttonText: string;
  link?: string;
}

export default function Projects() {
  const ref = useRef(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const projects = [
    {
      title: "Smart Helmet",
      description:
        "An intelligent helmet designed for road safety with alcohol detection, overspeed detection, GPS tracking, and emergency alerts.",

      tags: ["IoT", "Sensors", "GPS", "Safety"],

      gradient: "from-cyan-500/20 to-blue-500/20",

      borderColor: "border-cyan-400/30",

      status: "In Progress",

      buttonText: "In Progress",

      //link: "https://github.com/yourusername/smart-helmet",

    },

    {
      title: "QuickTube – YouTube Video Summarizer",

      description:
            "AI-powered YouTube video summarizer that extracts transcripts and generates concise summaries using NLP techniques.",

      tags: ["Python", "Flask", "NLP", "YouTube API", "AI"],

      gradient: "from-blue-500/20 to-purple-500/20",

      borderColor: "border-blue-400/30",

      status: "Completed",

      buttonText: "View Project",

      link: "https://quicktube-ai.netlify.app/",

    },

    {
      title: "Plant Disease Detection using CNN",

      description:
        "A deep learning model that detects plant diseases from leaf images using convolutional neural networks.",

      tags: ["Python", "TensorFlow", "CNN", "OpenCV"],

      gradient: "from-purple-500/20 to-pink-500/20",

      borderColor: "border-purple-400/30",

      status: "In Progress",

      buttonText: "In Progress",

      // link: "https://drive.google.com/yourpaper",

    },

    {
      title: "Phishing URL Detector",

      description:
        "A machine learning model that detects phishing URLs based on their characteristics and behavior.",

      tags: ["Machine Learning", "Python", "Web Security"],

      gradient: "from-pink-500/20 to-red-500/20",

      borderColor: "border-pink-400/30",

      status: "Completed",

      buttonText: "View Project",

      link: "https://urldetector1.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />

      <div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-11 mt-5"
        >
          <h2 className="federo text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="pt-sans w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="pt-sans grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
                className={`
                group
                relative
                overflow-hidden
                backdrop-blur-lg
                bg-gradient-to-br
                ${project.gradient}
                border
                ${project.borderColor}
                rounded-2xl
                p-8
                hover:scale-[1.03]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
                transition-all
                duration-500
                `}   >

              {/* Dynamic AI Circuit Background */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">

              {/* Horizontal Circuits */}
              {[15, 40, 70].map((top, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full h-[1px] bg-cyan-400/15"
                  style={{ top: `${top}%` }}
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Vertical Circuits */}
              {[20, 55, 80].map((left, i) => (
                <motion.div
                  key={i}
                  className="absolute top-0 h-full w-[1px] bg-cyan-400/15"
                  style={{ left: `${left}%` }}
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Moving Data Packets */}
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  className="
                    absolute
                    top-[20%]
                    w-16
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                  "
                  animate={{
                    x: [-100, 700],
                  }}
                  transition={{
                    duration: 2 + item,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item * 0.8,
                  }}
                />
              ))}

              {/* AI Nodes */}
              {[
                { top: "20%", left: "20%" },
                { top: "40%", left: "60%" },
                { top: "75%", left: "45%" },
                { top: "60%", left: "80%" },
                { top: "15%", left: "75%" },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="
                    absolute
                    w-1
                    h-1
                    rounded-full
                    bg-blue-300
                    shadow-[0_0_12px_#22d3ee]
                  "
                  style={node}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Scanner Sweep */}
              <motion.div
                className="
                  absolute
                  inset-y-0
                  w-20
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/10
                  to-transparent
                  blur-md
                "
                animate={{
                  x: [-100, 700],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

            </div>
                  
              {/* Top Section */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-400/20 text-green-400"
                      : "bg-yellow-400/20 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Button */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95 group/button"
                >
                  <ExternalLink className="w-4 h-4 group-hover/button:animate-bounce" />

                  <span className="text-sm font-semibold relative">
                    {project.buttonText}

                    {/* Underline Animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full animate-pulse"></span>
                  </span>

                  {/* Arrow Effect */}
                  <i className="fa-solid fa-angle-left opacity-0 group-hover/button:opacity-100 text-cyan-300 animate-pulse transition duration-300"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] border border-cyan-400/30 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl"
          >
            {/* Popup Title */}
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {selectedProject.title}
            </h2>

            {/* Popup Message */}
            <p className="text-gray-300 mb-6">
              Ready to open{" "}
              <span className="text-cyan-400 font-semibold">
                {selectedProject.buttonText}
              </span>
              ?
            </p>

            {/* Popup Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
              >
                Cancel
              </button>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
              >
                Open
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}