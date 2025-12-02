import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Reel {
  id: number;
  thumbnail: string;
  title: string;
  src: string; // video file
}

interface ReelsPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  reels: Reel[];
  initialIndex: number;
}

const ReelsPlayer = ({ isOpen, onClose, reels, initialIndex }: ReelsPlayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  const currentReel = reels[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center animate-fade-in">
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Previous */}
      {reels.length > 1 && (
        <Button
          onClick={goToPrevious}
          variant="ghost"
          size="icon"
          className="absolute left-4 text-white hover:bg-white/10"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      )}

      {/* Video Player */}
      <div className="relative w-full max-w-md h-full max-h-[90vh] flex items-center justify-center px-4">
        <video
          src={currentReel.src}
          controls
          autoPlay
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>

      {/* Next */}
      {reels.length > 1 && (
        <Button
          onClick={goToNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 text-white hover:bg-white/10"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {reels.length}
      </div>
    </div>
  );
};

export default ReelsPlayer;
