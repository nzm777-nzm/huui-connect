import { Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/mufli_.h", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/+971569616494", label: "WhatsApp" },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-[#000000] text-white border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">Muflih Ibrahim</h3>
            <p className="text-muted-foreground text-sm mt-1">Visual Storyteller</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Muflih Ibrahim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
