import { Video, Camera, Users, Megaphone, PlayCircle } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Videography",
    description: "Professional cinematic videos for weddings, brands, commercials and storytelling.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "High-quality photography for events, portraits, products, lifestyle and commercial use.",
  },
  {
    icon: Users,
    title: "Event Coverage",
    description: "Complete event coverage including weddings, shows, corporate functions and celebrations.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Creating social-media ready photo/video content designed for growth and engagement.",
  },
  {
    icon: PlayCircle,
    title: "Vlog & Storytelling",
    description: "Creative vlog shooting and storytelling edits that highlight emotions and real moments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
