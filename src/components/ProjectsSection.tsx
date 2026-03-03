import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, checkout e painel admin.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    stars: 48,
    forks: 12,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Manager API",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    stars: 32,
    forks: 8,
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard de clima em tempo real com gráficos interativos e geolocalização.",
    tech: ["Next.js", "TypeScript", "Recharts", "OpenWeather API"],
    stars: 25,
    forks: 5,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Chat Realtime",
    description: "Aplicação de chat em tempo real com salas, emojis e notificações push.",
    tech: ["React", "Socket.io", "Node.js", "Redis"],
    stars: 67,
    forks: 20,
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Projetos"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Trabalhos recentes<span className="text-primary">()</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1">
                  <Star size={14} /> {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} /> {project.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
