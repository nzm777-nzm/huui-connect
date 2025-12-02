import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import Videography from "@/components/Videography";
import ReelsSection from "@/components/ReelsSection";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoogleCloudSection from "@/components/GoogleCloud";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PhotoGallery />
      <Videography />
      <ReelsSection />
      <GoogleCloudSection />
      <Services />
      <TrustedBy />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
