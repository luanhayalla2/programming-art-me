import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PowerFit",
    description: "Sistema de gerenciamento para academias com controle de alunos, treinos e planos.",
    tech: ["TypeScript", "React", "Supabase"],
    github: "https://github.com/luanhayalla2/PowerFit",
  },
  {
    title: "MERCADO-FULLSTACK",
    description: "Aplicação fullstack de mercado com backend em Python e interface completa.",
    tech: ["Python", "Full Stack", "API REST"],
    github: "https://github.com/luanhayalla2/MERCADO-FULLSTACK",
  },
  {
    title: "Trivia Trek Academy",
    description: "Plataforma educacional gamificada com quizzes interativos e sistema de pontuação.",
    tech: ["TypeScript", "React", "Gamificação"],
    github: "https://github.com/luanhayalla2/trivia-trek-academy",
  },
  {
    title: "MICROSERVICES-DEMO",
    description: "Demonstração de arquitetura de microsserviços com comunicação entre serviços.",
    tech: ["JavaScript", "Node.js", "Microservices", "RabbitMQ"],
    github: "https://github.com/luanhayalla2/MICROSERVICES-DEMO",
  },
  {
    title: "Blog Científico",
    description: "Blog para publicação de artigos científicos com interface moderna e responsiva.",
    tech: ["Vue.js", "CSS", "Markdown"],
    github: "https://github.com/luanhayalla2/blog-cientifico",
  },
  {
    title: "CATALOG-API",
    description: "API de catálogo de produtos com CRUD completo e validação com Zod.",
    tech: ["JavaScript", "Node.js", "API REST", "Zod"],
    github: "https://github.com/luanhayalla2/CATALOG-API",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {'demo' in project && (project as any).demo && (
                    <a
                      href={(project as any).demo}
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

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
