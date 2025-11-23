const brands = [
  "Brand One",
  "Brand Two", 
  "Brand Three",
  "Brand Four",
  "Brand Five",
  "Brand Six",
  "Brand Seven",
  "Brand Eight",
];

const TrustedBy = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          Trusted By
        </h2>

        {/* Scrolling Marquee */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 glass-card px-12 py-8 rounded-2xl"
              >
                <p className="text-2xl font-semibold whitespace-nowrap">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Add brand logos to <code className="bg-secondary px-2 py-1 rounded">/public/brands/</code>
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
