import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projetos", value: "30+" },
  { icon: Globe, label: "Tecnologias", value: "15+" },
  { icon: Cpu, label: "Anos de Exp.", value: "5+" },
  { icon: Zap, label: "Commits", value: "2K+" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Sobre mim"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Quem sou eu<span className="text-primary">?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg border border-border bg-card p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <p className="text-muted-foreground mb-3">
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">desenvolvedor</span> = {"{"}
              </p>
              <p className="text-muted-foreground pl-4">
                <span className="text-foreground">nome</span>:{" "}
                <span className="text-primary">"Luã Hayalla Oliveira Silva"</span>,
              </p>
              <p className="text-muted-foreground pl-4">
                <span className="text-foreground">local</span>:{" "}
                <span className="text-primary">"Brasil"</span>,
              </p>
              <p className="text-muted-foreground pl-4">
                <span className="text-foreground">foco</span>:{" "}
                <span className="text-primary">"Full Stack"</span>,
              </p>
              <p className="text-muted-foreground pl-4">
                <span className="text-foreground">paixão</span>:{" "}
                <span className="text-primary">"Resolver problemas com código"</span>,
              </p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia, sempre buscando aprender
              novas ferramentas e frameworks para criar soluções inovadoras. Minha jornada
              começou com curiosidade e hoje se tornou minha profissão e hobby.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que bom código é aquele que resolve problemas de forma simples,
              legível e escalável. Estou sempre em busca de novos desafios.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-lg border border-border bg-card text-center"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={20} />
                  <p className="text-2xl font-bold font-heading text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
