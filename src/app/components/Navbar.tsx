import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
        }
      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Magnetic hover effect
  const magnetic = (e: any) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;

  };

  const resetMagnetic = (e: any) => {
    e.currentTarget.style.transform = `translate(0px,0px)`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-cyan-500/10 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            : "bg-transparent"
        }`}
      >

        {/* Particle background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {[...Array(12)].map((_, i) => (

            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
              }}
              style={{
                left: `${i * 8}%`,
                top: `${Math.random() * 100}%`,
              }}
            />

          ))}

        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="federo text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Gowtham D
            </motion.div>

            {/* Desktop nav */}
            <div className="pt-sans hidden md:flex items-center gap-8 relative">

              {navItems.map((item) => (

                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  onMouseMove={magnetic}
                  onMouseLeave={resetMagnetic}
                  whileHover={{ y: -2 }}
                  className={`relative px-1 py-1 font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >

                  {item.label}

                  {/* Liquid underline */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400"
                    />
                  )}

                  {/* Glow ripple */}
                  <motion.span
                    className="absolute inset-0 rounded-md bg-cyan-400/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                </motion.button>

              ))}

            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >

            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-black/70 border-l border-white/10 p-6 pt-20"
            >

              <div className="flex flex-col gap-6">

                {navItems.map((item) => (

                  <motion.button
                    key={item.label}
                    whileHover={{ x: 6 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                  >
                    {item.label}
                  </motion.button>

                ))}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}