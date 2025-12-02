import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  videoSrc: string;   // <-- IMPORTANT
}

const VideoModal = ({ isOpen, onClose, videoTitle, videoSrc }: VideoModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Video Player */}
      <div className="max-w-5xl w-full mx-4">
        <video
          src={videoSrc}
          controls
          autoPlay
          className="rounded-2xl w-full"
        />
        <h3 className="text-center text-xl text-white mt-4">{videoTitle}</h3>
      </div>
    </div>
  );
};

export default VideoModal;
