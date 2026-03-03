import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Linux", "CI/CD", "AWS", "Vercel"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative grid-bg">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Habilidades"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Tech Stack<span className="text-primary">;</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm font-mono bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
