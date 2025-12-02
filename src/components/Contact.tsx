import { MessageCircle, Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  // WhatsApp Handle
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Muflih! I'm interested in your services.");
    window.open(`https://wa.me/+971569616494?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 animate-fade-in-up">
          Let's Work Together
        </h2>

        {/* Contact Icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-14">

          {/* Email */}
          <div
            onClick={() => (window.location.href = "mailto:nimuflih@gmail.com")}
            className="cursor-pointer flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <p className="font-semibold group-hover:text-primary transition">Email</p>
            <p className="text-muted-foreground text-sm">nimuflih@gmail.com</p>
          </div>

          {/* Phone */}
          <div
            onClick={() => (window.location.href = "tel:+971569616494")}
            className="cursor-pointer flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <p className="font-semibold group-hover:text-primary transition">Call</p>
            <p className="text-muted-foreground text-sm">+971 56 961 6494</p>
          </div>

          {/* Instagram */}
          <div
            onClick={() => window.open("https://instagram.com/mufli_.h", "_blank")}
            className="cursor-pointer flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Instagram className="w-7 h-7 text-primary" />
            </div>
            <p className="font-semibold group-hover:text-primary transition">Instagram</p>
            <p className="text-muted-foreground text-sm">mufli_.h</p>
          </div>

        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsApp}
          className="mx-auto w-full md:w-auto bg-[#25D366] hover:bg-[#1ebe5e] text-white px-10 py-6 rounded-xl text-lg flex items-center gap-2 justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          Message on WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Contact;
