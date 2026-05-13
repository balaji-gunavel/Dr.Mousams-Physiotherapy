import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Start Your Recovery?
        </h2>
        <p className="text-primary-foreground/85 max-w-lg mx-auto mb-8 text-lg">
          Take the first step towards a pain-free life. Book your appointment with Dr. Mousam today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="ctaWhite" size="xl" asChild>
            <a href="https://wa.me/919742839299?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </a>
          </Button>
          <Button variant="ctaOutline" size="xl" className="border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-solid opacity-85 text-teal-700 bg-white" asChild>
            <a href="tel:+919742839299">
              <Phone className="w-5 h-5" />
              Call Clinic
            </a>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/919742839299" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Enquiry
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
