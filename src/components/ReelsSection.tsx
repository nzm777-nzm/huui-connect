import { useState } from "react";
import { Play } from "lucide-react";
import ReelsPlayer from "./ReelsPlayer";

import reel1Thumb from "@/assets/reels/dynamate-thumb.jpg";
import reel2Thumb from "@/assets/reels/promotion-thumb.png";
import reel3Thumb from "@/assets/reels/sunburn-thumb.png";
import reel4Thumb from "@/assets/reels/random-thumb.png";

const reels = [
  {
    id: 1,
    thumbnail: reel1Thumb,
    title: "product promo",
    src: "/reel/dynamate.mp4",
  },
  {
    id: 2,
    thumbnail: reel2Thumb,
    title: "Business Promotion",
    src: "/reel/promotion.mp4",
  },
  {
    id: 3,
    thumbnail: reel3Thumb,
    title: "Event Highlights",
    src: "/reel/sunburn.mp4",
  },
  {
    id: 4,
    thumbnail: reel4Thumb,
    title: "food vlog",
    src: "/reel/random.mp4",
  },
];

const ReelsSection = () => {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(0);

  const openReel = (index: number) => {
    setSelectedReel(index);
    setPlayerOpen(true);
  };

  return (
    <section id="reels" className="py-24 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          Instagram Reels
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openReel(index)}
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-semibold">{reel.title}</p>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            {/* Place reel videos in <code className="bg-secondary px-2 py-1 rounded">/public/reels/</code> */}
          </p>
        </div>
      </div>

      <ReelsPlayer
        isOpen={playerOpen}
        onClose={() => setPlayerOpen(false)}
        reels={reels}
        initialIndex={selectedReel}
      />
    </section>
  );
};

export default ReelsSection;
