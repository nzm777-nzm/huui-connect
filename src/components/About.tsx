import profileImg from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={profileImg}
                alt="Muflih Ibrahim"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10 blur-xl"></div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Hi, I’m Muflih Ibrahim — a Dubai-based photographer, videographer, and rising content creator with a passion for real, cinematic storytelling. I started with curiosity and a goal to master visuals, and now I’m building my path toward becoming a full-time creator through continuous learning and creativity.

            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I work with a versatile setup: Canon EOS R with 24–105mm IS II and 85mm prime lens, Sony A7 mark IV with 24-70 GM ii and a DJI RS4 gimbal for smooth professional video, my iPhone 17 Pro for mobile/travel content, and a drone for dynamic aerial shots.

            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I collaborate with social media vloggers and real estate agents, capturing architecture, food, culture, and unique experiences across the UAE. My style is simple, honest, and cinematic — focusing on clean composition, natural emotions, and visually pleasing colors.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">

              Whether it’s reels, portraits, travel visuals, product shots, or behind-the-scenes storytelling, I aim to create content that feels alive and memorable.
              If you’re looking for someone who brings passion and dedication to every project
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
