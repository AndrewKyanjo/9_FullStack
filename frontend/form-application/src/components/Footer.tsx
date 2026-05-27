export default function Footer() {
  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Settings", href: "#" },
  ];

  return (
    <footer className="w-full py-md mt-auto bg-surface-container-low border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin max-w-7xl mx-auto w-full">
        <div className="font-label-sm text-label-sm font-semibold text-secondary mb-sm md:mb-0">
          © 2024 Enterprise SaaS Inc.
        </div>
        <div className="flex flex-wrap justify-center gap-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}