import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const nodes: {x:number,y:number,vx:number,vy:number}[] = [];

    const NODE_COUNT = 180; // reduced for performance

    for(let i=0;i<NODE_COUNT;i++){

      nodes.push({
        x: Math.random()*width,
        y: Math.random()*height,
        vx:(Math.random()-0.5)*0.25,
        vy:(Math.random()-0.5)*0.25
      });

    }

    let mouseX = width/2;
    let mouseY = height/2;

    window.addEventListener("mousemove",(e)=>{
      mouseX=e.clientX;
      mouseY=e.clientY;
    });

    function animate(){

      ctx.clearRect(0,0,width,height);

      nodes.forEach(n=>{

        n.x+=n.vx;
        n.y+=n.vy;

        if(n.x<0||n.x>width) n.vx*=-1;
        if(n.y<0||n.y>height) n.vy*=-1;

        const dx = n.x - mouseX;
        const dy = n.y - mouseY;
        const dist = Math.sqrt(dx*dx+dy*dy);

        // light cursor interaction
        if(dist<120){
          n.vx += dx * -0.00006;
          n.vy += dy * -0.00006;
        }

        // glow animation
        const glow = (Math.sin(Date.now()*0.002 + n.x) + 1)/2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 2 + glow * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.5 + glow})`;
        ctx.fill();

      });

      // connections
      for(let i=0;i<nodes.length;i++){
        for(let j=i+1;j<nodes.length;j++){

          const dx = nodes[i].x-nodes[j].x;
          const dy = nodes[i].y-nodes[j].y;
          const dist = Math.sqrt(dx*dx+dy*dy);

          if(dist<90){

            ctx.beginPath();
            ctx.moveTo(nodes[i].x,nodes[i].y);
            ctx.lineTo(nodes[j].x,nodes[j].y);

            ctx.strokeStyle=`rgba(255,255,255,${1-dist/90})`;
            ctx.lineWidth=0.4;
            ctx.stroke();

          }

        }
      }

      requestAnimationFrame(animate);

    }

    animate();

    window.addEventListener("resize",()=>{
      width=window.innerWidth;
      height=window.innerHeight;
      canvas.width=width;
      canvas.height=height;
    });

  },[]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">

      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-950/40 to-blue-950/70 z-0"/>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <motion.p
          className="text-cyan-400 text-lg mb-4"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.2}}
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          transition={{delay:0.3,duration:0.8}}
        >
          Gowtham D
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-4"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.5}}
        >
          AI & Data Science Student
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.6}}
        >
          Building intelligent systems and modern web applications
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.8}}
        >

          <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}
            className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
          </motion.button>

          <motion.a
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            href="/gowtham-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform"/>
            Download Resume
          </motion.a>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{y:[0,10,0]}}
        transition={{duration:2,repeat:Infinity}}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full mt-2"
            animate={{y:[0,20,0]}}
            transition={{duration:2,repeat:Infinity}}
          />
        </div>
      </motion.div>

    </section>
  );

}