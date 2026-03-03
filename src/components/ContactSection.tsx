import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 relative grid-bg">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Contato"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Vamos conversar<span className="text-primary">?</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Estou sempre aberto a novos projetos, colaborações ou apenas uma boa conversa
            sobre tecnologia. Não hesite em entrar em contato!
          </p>

          <motion.a
            href="mailto:seuemail@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg hover:shadow-[var(--glow-primary)] transition-shadow"
          >
            <Send size={20} />
            Enviar Email
          </motion.a>

          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://github.com/luanhayalla2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:seuemail@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
