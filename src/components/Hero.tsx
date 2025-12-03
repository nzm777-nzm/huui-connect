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

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <p className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight text-white text-shadow-strong">
          Hey there,
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight text-white text-shadow-strong">
          Muflih Ibrahim
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#EDEDED] mb-10 font-light" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}>
          Videographer • Photographer • Content Creator
        </p>

        <Button
          onClick={scrollToWork}
          size="lg"
          variant="cinematic"
        >
          View Work
        </Button>

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
