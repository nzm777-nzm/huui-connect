import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Instagram, Youtube, Twitter } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('photography')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="mov/hero.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight text-white drop-shadow-xl">
          Muflih Ibrahim
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light drop-shadow">
          Videographer • Photographer • Content Creator
        </p>

        <Button 
          onClick={scrollToWork}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] transition-all duration-300"
        >
          View Work
        </Button>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToWork}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
