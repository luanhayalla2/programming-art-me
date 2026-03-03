import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Frontend Specialist",
  "Backend Engineer",
  "Open Source Contributor",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.slice(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            {"// Olá, mundo! Eu sou"}
          </p>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-foreground">
            Luã Hayalla Oliveira Silva<span className="text-primary">.</span>
          </h1>

          <div className="h-12 md:h-14 mb-6">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {">"} <span className="text-accent">{displayText}</span>
              <span className="terminal-cursor" />
            </span>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
            Desenvolvedor apaixonado por criar soluções elegantes e performáticas.
            Transformo ideias em código limpo e interfaces incríveis.
          </p>

          <div className="flex gap-4 items-center">
            <motion.a
              href="https://github.com/luanhayalla2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              href="mailto:seuemail@email.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
