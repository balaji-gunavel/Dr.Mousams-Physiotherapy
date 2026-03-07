import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, CalendarCheck, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Dr. Mousam, my name is ${formData.name}. ${formData.message}. Please contact me at ${formData.phone}.`;
    window.open(`https://wa.me/919742839299?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              Get in touch to book an appointment or ask about our treatments. We're here to help.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Clinic Information</h2>
                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        105/1, near SBI Prime Officers Residency,<br />
                        next to PM Jan Aushadhi Kendra,<br />
                        Muneshwara Layout, Kodichikknahalli,<br />
                        Bommanahalli, Bengaluru, Karnataka 560076
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+919742839299" className="text-sm text-primary hover:underline">+91 97428 39299</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-sm text-muted-foreground">Opens 9 AM · Appointment recommended</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="cta" size="lg" asChild>
                    <a href="https://wa.me/919742839299?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                      <CalendarCheck className="w-5 h-5" />
                      Book Appointment
                    </a>
                  </Button>
                  <Button variant="ctaOutline" size="lg" asChild>
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

                <div className="mt-8 rounded-xl overflow-hidden border border-border">
                  <iframe
                    title="Dr. Mousam's Physiotherapy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.62!3d12.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzI0LjAiTiA3N8KwMzcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your condition or enquiry"
                    />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    This form sends your enquiry via WhatsApp for a quick response.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
