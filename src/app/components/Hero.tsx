import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaCode, FaRobot, FaDatabase, FaMemory, FaBrain, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const context: CanvasRenderingContext2D = ctx;

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const letters = "01";

  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  let drops = Array(columns).fill(1);

  let frame = 0;

  function animate() {

    frame++;

    context.fillStyle = "rgba(0, 5, 15, 0.03)";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgba(255, 235, 215, 0.04)";
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {

      const text =
        letters[Math.floor(Math.random() * letters.length)];

      context.fillText(
        text,
        i * fontSize,
        drops[i] * fontSize
      );

      if (
        drops[i] * fontSize > height &&
        Math.random() > 0.98
      ) {
        drops[i] = 0;
      }

      // SPEED CONTROL HERE
      if (frame % 6 === 0) {
        drops[i]++;
      }

    }

    requestAnimationFrame(animate);
  }

  animate();

  const handleResize = () => {

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(1);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };

}, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">

      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 pointer-events-none">

        {["AI", "ML", "Python", "SQL", "AWS", "Web Development"].map(
          (item, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-200/10 text-4xl font-bold"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
              }}
            >
              {item}
            </motion.div>
          )
        )}

      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-950/40 to-blue-950/70 z-0"/>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-left">

            <motion.p
              className="pt-sans text-cyan-400 text-xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className=" federo text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Gowtham D
            </motion.h1>

            <TypeAnimation
              sequence={[
                "AI & Data Science Graduate",
                1500,
                "Machine Learning Enthusiast",
                1500,
                "Data Science",
                1500,
                "Web Development",
                1500,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            />

            <motion.p
              className="pt-sans text-gray-300 text-lg leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Building intelligent systems, machine learning solutions,
              and modern web applications.
            </motion.p>

            <div className="flex flex-wrap gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="pt-sans group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Gowtham_D Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10"
              >
                <Download className=" pt-sans w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </motion.a>

            </div>

            {/* SOCIAL ICONS */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/GowthamADS"
                target="_blank"
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-cyan-400 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/gowtham-d-25a8a3259/"
                target="_blank"
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-cyan-400 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/g0wthamx97/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-cyan-400 transition"
              >
                <FaInstagram size={20} />
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="relative flex justify-center items-center">

            {/* Background Glow */}
            <div className="absolute w-[50px] h-[50px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Inner Glow */}
            <div className="absolute w-[100px] h-[100px] rounded-full bg-cyan-400/20 blur-[80px]" />

            {/* Rotating Ring */}
            <motion.div
              className="absolute w-[470px] h-[460px] rounded-full border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Floating Image */}
            <motion.div
              className="relative z-10 -translate-y-4.5"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              
              <div className="group relative">
                

              {/* Profile Image */}
              <img
                src="/1.png"
                alt="Gowtham"
                className="
                  w-[510px]
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:drop-shadow-[0_0_80px_rgba(34,211,238,0.7)]
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  overflow-hidden
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >
                
                {/* AI Grid */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),
                    linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)]
                    bg-[size:25px_25px]
                  "
                />

              </div>


              {/* Skill Card */}
             {/* Machine Learning Card */}
              <motion.div
                className="
                  absolute
                  top-24
                  -right-12
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="bg-black/80 border border-cyan-400 px-4 py-2 rounded-lg backdrop-blur-md">
                  <p className="text-cyan-400 text-sm flex items-center gap-2"> <FaBrain /> Machine Learning </p>
                </div>
              </motion.div>

              {/* SQL Card */}
              <motion.div
                className="
                  absolute
                  bottom-32
                  -right-10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="bg-black/80 border border-cyan-400 px-4 py-2 rounded-lg backdrop-blur-md">
                  <p className="text-cyan-400 text-sm flex items-center gap-2"> <FaDatabase /> SQL </p>
                </div>
              </motion.div>

              {/* React Card */}
              <motion.div
                className="
                  absolute
                  top-1/2
                  -left-16
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="bg-black/80 border border-cyan-400 px-4 py-2 rounded-lg backdrop-blur-md">
                  <p className="text-cyan-400 text-sm flex items-center gap-2"> <FaGlobe /> Web Development</p>
                </div>
              </motion.div>

              {/* Data Science Card */}
              <motion.div
                className="
                  absolute
                  top-10
                  left-8
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <div className="bg-black/80 border border-cyan-400 px-4 py-2 rounded-lg backdrop-blur-md">
                  <p className="text-cyan-400 text-sm flex items-center gap-2"> <FaEnvelope /> Data Science </p>
                </div>
              </motion.div>

              {/* AWS Card */}
              <motion.div
                className="
                  absolute
                  bottom-10
                  left-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
              >
                <div className="bg-black/80 border border-cyan-400 px-4 py-2 rounded-lg backdrop-blur-md">
                  <p className="text-cyan-400 text-sm flex items-center gap-2"> <FaCode /> Problem Solving </p>
                </div>
              </motion.div>

              {/* AI Card */}
              <motion.div
                className="
                  absolute
                  top-1/3
                  -right-20
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="bg-black/80 border border-cyan-400 px-4 py-2 rounded-lg backdrop-blur-md">
                  <p className="text-cyan-400 text-sm flex items-center gap-2"> <FaRobot /> Artificial Intelligence </p>
                </div>
              </motion.div>

            </div>


              
            </motion.div>

            {/* Badge */}
            <motion.div
              className="
                absolute
                bottom-2
                z-20
                px-7
                py-4
                rounded-full
                bg-black/80
                backdrop-blur-md
                border
                border-cyan-400/40
                shadow-[0_0_25px_rgba(34,211,238,0.4)]
              "
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-cyan-400 font-semibold text-lg whitespace-nowrap">
                {"</>"} Code. Learn. Build. Repeat.
              </span>
            </motion.div>

          </div>
              

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
  className="absolute bottom-10 left-1/2 -translate-x-1/2"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="text-cyan-400 text-3xl">
    ⌄
  </div>
</motion.div>

    </section>
  );

}


