import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Globe, Brain, Wrench } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-cyan-400 to-blue-400",
      skills: [
        { name: "Python", level: 70 },
        { name: "SQL", level: 75 },
        { name: "JavaScript", level: 60 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-blue-400 to-purple-400",
      skills: [
        { name: "HTML", level: 75 },
        { name: "CSS", level: 80 },
        { name: "React", level: 70 },
      ],
    },
    {
      title: "AI / Data Science",
      icon: Brain,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "CNN", level: 75 },
        { name: "OpenCV", level: 70 },
        { name: "Data Analysis", level: 75 },
      ],
    },
    {
      title: "Other Skills",
      icon: Wrench,
      color: "from-pink-400 to-red-400",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "UI/UX Design", level: 70 },
        { name: "Git & GitHub", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="pt-sans max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-11 mt-5"
        >
          <h2 className="federo text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
