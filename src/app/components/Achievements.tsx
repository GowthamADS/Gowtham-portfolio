import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Trophy, Award, Star } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    {
      icon: Trophy,
      title: "Winner – Shark Tank Technical Event, SRM",
      event: "AI-ZYPHER'24",
      description: "Secured First Place by presenting the Smart Helmet, an IoT-based road safety solution designed to enhance rider safety through intelligent monitoring and emergency response features.",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Award,
      title: "Runner - BLAZE A TRAIL 1.0, SJIT",
      event: "Hackothan",
      description: "Developed an innovative project solution and earned Runner-Up position along with an Internship Offer Letter.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: Star,
      title: "Finalist - HackIT 3.0, VIT",
      event: "Participant",
      description: "Reached the Finalist round by developing and presenting a technology-driven solution to real-world problems.",
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-11 mt-5"
        >
          <h2 className="federo text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="pt-sans grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {achievement.title}
              </h3>

              <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-3`}>
                {achievement.event}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
