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
              I'm a passionate visual storyteller with a keen eye for capturing moments that matter. 
              With years of experience in videography and photography, I specialize in creating 
              cinematic content that resonates with audiences.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From intimate weddings to large-scale commercial productions, I bring creativity, 
              professionalism, and technical excellence to every project. My work combines artistic 
              vision with cutting-edge techniques to deliver stunning visual narratives.
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
