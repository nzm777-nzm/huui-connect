import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
}

const VideoModal = ({ isOpen, onClose, videoTitle }: VideoModalProps) => {
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
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Video Player Placeholder */}
      <div className="max-w-6xl w-full mx-4">
        <div className="aspect-video bg-secondary/50 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{videoTitle}</h3>
          <p className="text-muted-foreground mb-4">
            Place your video file in <code className="bg-background px-2 py-1 rounded">/public/videos/</code>
          </p>
          <p className="text-sm text-muted-foreground">
            Then update this component to use: <code className="bg-background px-2 py-1 rounded">&lt;video src="/videos/your-video.mp4" /&gt;</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
