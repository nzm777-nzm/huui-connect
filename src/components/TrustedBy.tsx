import React from "react";

const brandLogos = [
  "/brands/first.jpg",
  "/brands/hala.jpg",
  "/brands/mandi.jpg",
  "/brands/paris.jpg",
  "/brands/shake.jpg",
  "/brands/sun.jpg",
];

const TrustedBy = () => {
  return (
    <section
      id="trustedby"
      className="py-24 px-4 md:px-8 lg:px-16 bg-[#000000] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          Trusted By
        </h2>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee">
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index}`}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm"></p>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite; /* faster scroll */
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
