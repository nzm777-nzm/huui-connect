import React from "react";

const brandLogos = [
  "/brands/first.jpg",
  "/brands/hala.jpg",
  "/brands/mandi.jpg",
  "/brands/paris.jpg",
  "/brands/shake.jpg",
  "/brands/sun.jpg",
  "/brands/taste-india.jpg",
  "/brands/tely-stories.jpg",
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

        {/* Row 1 - Scrolls Left */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex items-center gap-12 animate-marquee-right">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <img
                key={`row1-${index}`}
                src={logo}
                alt={`Brand ${index}`}
                className="h-14 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee-left">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <img
                key={`row2-${index}`}
                src={logo}
                alt={`Brand ${index}`}
                className="h-14 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
