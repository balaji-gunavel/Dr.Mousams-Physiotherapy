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
          <h1
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up"
            style={{
              filter:
                "drop-shadow(0 3px 6px rgba(0,0,0,0.18)) drop-shadow(0 8px 20px rgba(0,0,0,0.20)) drop-shadow(0 1px 0 rgba(255,255,255,0.4))",
            }}
          >
            <span
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #E5E7EB 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
              }}
            >
              Expert Physiotherapy Care for Pain Relief & Recovery
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            14+ years of experience helping patients recover from orthopedic injuries, chronic pain, posture-related issues, and post-surgery rehabilitation.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up text-cyan-800 bg-transparent text-base" style={{ animationDelay: "0.3s" }}>
            <Button variant="ctaWhite" size="lg" asChild>
              <a href="https://wa.me/919742839299?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
            <Button variant="ctaOutline" size="lg" className="border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-teal-900 bg-white" asChild>
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
