import { Button } from "@/components/ui/button";
import { Cloud, Folder } from "lucide-react";

const GoogleCloudSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000000] text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 border border-primary/20">
          <Cloud className="w-10 h-10 text-primary" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Complete Work Collection (Google Drive)
        </h2>

        {/* Description */}
        <p className="text-[#B0B0B0] text-lg mb-10 max-w-2xl mx-auto">
          Access your complete collection of high-quality videos and final deliverables. All files are securely stored and ready to download.
        </p>

        {/* Button */}
        <Button
          asChild
          size="lg"
          variant="cinematic"
          className="group"
        >
          <a
            href="https://drive.google.com/drive/folders/1J-AIA23xAd5jNKArZpy0Saaqbuf3RTbF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Folder className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Open Video Library
          </a>
        </Button>
      </div>
    </section>
  );
};

export default GoogleCloudSection;
