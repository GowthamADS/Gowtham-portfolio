import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: "Robotics & Intelligent Automation",
      provider: "Zuntra Digital",
      description: "Completed hands-on training in Robotics and Intelligent Automation, focusing on automation workflows, problem-solving, and modern industry technologies.",
      color: "from-blue-300 to-green-500",
    },
    {
      title: "Google Developer Student Clubs",
      provider: "Google Workspace",
      description: "Participated in Google Developer Student Clubs technical programs.",
      color: "from-blue-300 to-purple-400",
    },
    {
      title: "AWS Certified Developer",
      provider: "Infosys Springboard",
      description: "Earned AWS Developer certification, covering cloud application development, deployment, serverless computing, and AWS core services.",
      color: "from-blue-500 to-green-300",
    },
    {
      title: "IEEE Publication",
      provider: "ICRAME 2026",
      description: "Presented research on a ' CNN-based plant disease detection system ', demonstrating the application of deep learning for accurate agricultural disease classification.",
      color: "from-cyan-400 to-blue-400",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-11 mt-5"
        >
          <h2 className="federo text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="pt-sans w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="pt-sans grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-4`}>
                  {cert.provider}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
