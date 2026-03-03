const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          {"// Feito com ❤️ e muito ☕ — "}
          <span className="text-primary">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
