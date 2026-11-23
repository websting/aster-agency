
import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Dribbble", href: "#" },
  ];

  return (
    <footer className="bg-neutral-950 text-white px-6 lg:px-12 pt-20 pb-8">
      <div className="max-w-350 mx-auto">

        {/* Top section */}
        <div className="grid md:grid-cols-12 gap-12 pb-20">

          {/* Brand */}
          <div className="md:col-span-6">
            <a
              href="#"
              className="inline-block text-4xl font-semibold tracking-[-0.08em]"
            >
              aster<span className="text-lime-400">.</span>
            </a>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mt-6">
              Independent thinking. Creative solutions. Digital experiences
              that help ambitious brands move forward.
            </p>

            <a
              href="mailto:hello@asterstudio.com"
              className="inline-flex items-center gap-2 text-sm font-medium mt-8 hover:text-lime-400 transition-colors"
            >
              hello@asterstudio.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Explore
            </p>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-lime-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Follow Along
            </p>

            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-lime-400 transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large brand name */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-[clamp(5rem,18vw,16rem)] leading-[0.75] font-semibold -tracking-widest text-white">
            aster<span className="text-lime-400">.</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <p className="text-xs text-neutral-500">
            © {currentYear} Aster Studio. All rights reserved.
          </p>

          <p className="text-xs text-neutral-500">
            Designed with intention.
          </p>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-lime-400 transition-colors"
          >
            Back to top
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


