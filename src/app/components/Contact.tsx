import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Instagram, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gowthamads1216@gmail.com",
      href: "mailto:gowthamads1216@gmail.com",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7338833544",
      href: "tel:+917338833544",
      color: "from-blue-400 to-purple-400",
    },
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/GowthamADS",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gowtham-d-25a8a3259/",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/g0wthamx97/",
      color: "hover:text-pink-400",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tz53ues",
        "template_882ktpm",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "gN4VMA3yfQeZDNCRo"
      )
      .then(() => {
        setStatus("Message sent successfully ✔");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >

            <div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>

              <p className="text-gray-400 mb-8">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
              </p>

              <div className="space-y-4">

                {contactInfo.map((info, index) => (

                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 group"
                  >

                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>

                  </motion.a>

                ))}

              </div>
            </div>

            {/* Social Links */}

            <div>

              <h4 className="text-lg font-semibold text-white mb-4">
                Connect on Social Media
              </h4>

              <div className="flex gap-4">

                {socials.map((social, index) => (

                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-4 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 ${social.color}`}
                  >

                    <social.icon className="w-6 h-6" />

                  </motion.a>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8"
          >

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>

                <label className="block text-gray-300 mb-2">Name</label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  placeholder="Your name"
                  required
                />

              </div>

              <div>

                <label className="block text-gray-300 mb-2">Email</label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  placeholder="your.email@example.com"
                  required
                />

              </div>

              <div>

                <label className="block text-gray-300 mb-2">Message</label>

                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  placeholder="Your message..."
                  required
                />

              </div>

              {/* Animated Button */}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold flex items-center justify-center gap-2 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]"
              >

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -4 }}
                >
                  Send Message
                </motion.span>

                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>

              </motion.button>

              {status && (
                <p className="text-center text-green-400 mt-2">
                  {status}
                </p>
              )}

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}