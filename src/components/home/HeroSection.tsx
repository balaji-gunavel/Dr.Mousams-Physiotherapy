import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-physio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern physiotherapy clinic" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>
      <div className="relative z-10 container-narrow px-4 md:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Expert Physiotherapy Care for Pain Relief & Recovery
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            14+ years of experience helping patients recover from orthopedic injuries, chronic pain, posture-related issues, and post-surgery rehabilitation.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="ctaWhite" size="lg" asChild>
              <a href="https://wa.me/919742839299?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
            <Button variant="ctaOutline" size="lg" className="border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="tel:+919742839299">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/919742839299" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
