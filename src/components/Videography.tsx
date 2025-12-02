import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import video1Thumb from "@/assets/videos/wedding-thumb.png";
import video2Thumb from "@/assets/videos/desert-thumb.png";
import video3Thumb from "@/assets/videos/dxb-thumb.png";
import video4Thumb from "@/assets/videos/random-thumb.png";
import video5Thumb from "@/assets/videos/jeep-thumb.png";
import video6Thumb from "@/assets/videos/product-thumb.jpg";

const videos = [
  {
    id: 1,
    title: "Wedding Cinematic Film",
    thumbnail: video1Thumb,
    description: "A beautiful love story captured",
    videoSrc: "mov/wedding.MP4",  // <---- ADD THIS
  },
  {
    id: 2,
    title: "short cinematic",
    thumbnail: video2Thumb,
    description: "A journey through the desert",
    videoSrc: "mov/desert.mp4",
  },
  {
    id: 3,
    title: "Travel Documentary",
    thumbnail: video3Thumb,
    description: "Exploring new horizons",
    videoSrc: "mov/dubai.mp4",
  },
  {
    id:4,
    title:"Expolore",
    thumbnail: video4Thumb,
    description:"explore the unseen",
    videoSrc: "mov/chill.mp4",
  },
  {
    id:5,
    title:"Jeep Adventure",
    thumbnail: video5Thumb,
    description:"Thrilling off-road experience",
    videoSrc: "mov/random.MOV",
  },
  {
    id:6,
    title:"brand video",
    thumbnail: video6Thumb,
    description:"brand promo video",
    videoSrc: "mov/perfume.mp4",
  }
];

const Videography = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number>(0);

  const openVideo = (index: number) => {
    setSelectedVideo(index);
    setModalOpen(true);
  };

  return (
    <section id="videography" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          Videography
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openVideo(index)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/60">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-muted-foreground">{video.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            {/* Note: Video files should be placed in <code className="bg-secondary px-2 py-1 rounded">/public/videos/</code> for local playback */}
          </p>
        </div>
      </div>
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoTitle={videos[selectedVideo]?.title}
        videoSrc={videos[selectedVideo]?.videoSrc}   // <---- ADD THIS
      />

    </section>
  );
};

export default Videography;
