import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Brain, Code, Eye, Database, Sparkles } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const interests = [
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: Sparkles, label: "Machine Learning" },
    { icon: Eye, label: "Computer Vision" },
    { icon: Code, label: "Web Development" },
    { icon: Database, label: "Data Science" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 mt-5"
        >
          <h2 className="federo text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="pt-sans backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-lg">
                Highly motivated Artificial Intelligence and Data Science student passionate about building intelligent systems and modern web applications. I enjoy solving real-world problems using machine learning, computer vision, and full-stack development.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Interests</h3>
              <div className="grid grid-cols-1 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <interest.icon className="w-5 h-5 text-cyan-400" />
                    <span>{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="pt-sans text-gray-400 italic">
              I constantly explore new technologies and build innovative projects to improve my technical skills.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-400/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="pt-sans text-xl font-semibold text-white mb-1">
                    B.Tech Artificial Intelligence and Data Science
                  </h3>
                  <p className="pt-sans text-cyan-400 font-medium">St. Joseph's Institute of Technology</p>
                  <p className="pt-sans text-gray-400 text-sm mt-2">2022 – 2026</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-black/20 rounded-lg p-4 mt-4">
                <span className="pt-sans text-gray-300">CGPA</span>
                <span className="pt-sans text-2xl font-bold text-cyan-400">8.2</span>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="pt-sans font-semibold text-white mb-2">12th Grade</h4>
              <p className="pt-sans text-gray-400 text-sm">David Matric Higher Secondary School</p>
              <p className="pt-sans text-cyan-400 font-semibold mt-2">90%</p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="pt-sans font-semibold text-white mb-2">10th Grade</h4>
              <p className="pt-sans text-gray-400 text-sm">David Matric Higher Secondary School</p>
              <p className="pt-sans text-cyan-400 font-semibold mt-2">71%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
