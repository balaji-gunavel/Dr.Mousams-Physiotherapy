import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Bone,
  Activity,
  Footprints,
  Wrench,
  HeartPulse,
  Stethoscope,
  Dumbbell,
  RotateCcw,
  Smile,
  Brain,
  Shield,
  Hand,
  Briefcase,
  Monitor,
  PersonStanding,
} from "lucide-react";

const services = [
  {
    title: "Neck Pain",
    icon: Activity,
    desc: "Relieve stiffness, muscle tension, and discomfort caused by poor posture, stress, or injury. Personalized physiotherapy helps improve mobility, posture, and daily comfort.",
  },
  {
    title: "Shoulder Pain",
    icon: Dumbbell,
    desc: "Effective treatment for frozen shoulder, rotator cuff injuries, and muscle strain. Restore strength, flexibility, and pain-free movement with guided therapy.",
  },
  {
    title: "Back Pain",
    icon: Bone,
    desc: "Comprehensive care for lower back, upper back, and posture-related pain conditions. Our therapy focuses on pain relief, spinal mobility, and long-term prevention.",
  },
  {
    title: "Knee Pain",
    icon: Footprints,
    desc: "Targeted rehabilitation for ligament injuries, arthritis, and sports-related knee pain. Improve joint stability, reduce pain, and regain confident movement.",
  },
  {
    title: "Fracture Rehabilitation",
    icon: Wrench,
    desc: "Structured recovery programs to restore mobility and strength after fractures. We help patients safely return to daily activities with guided rehabilitation.",
  },
  {
    title: "Total Knee Replacement Rehabilitation",
    icon: Stethoscope,
    desc: "Post-surgical rehabilitation designed to improve knee movement and functional recovery. Focused exercises help regain strength, balance, and walking confidence.",
  },
  {
    title: "Total Hip Replacement Rehabilitation",
    icon: HeartPulse,
    desc: "Specialized therapy to support faster and safer recovery after hip replacement surgery. Enhance flexibility, muscle strength, and overall mobility with expert guidance.",
  },
  {
    title: "ACL/Meniscus Repair Rehabilitation",
    icon: Dumbbell,
    desc: "Advanced rehabilitation programs for sports injuries and post-surgical recovery. Restore knee stability, agility, and performance through progressive therapy.",
  },
  {
    title: "Arthroscopy Rehabilitation",
    icon: RotateCcw,
    desc: "Personalized recovery plans following minimally invasive joint surgeries. Reduce stiffness, improve movement, and regain normal joint function effectively.",
  },
  {
    title: "Bell's Palsy Care",
    icon: Smile,
    desc: "Therapeutic exercises and stimulation techniques to improve facial muscle function. Our treatment supports faster recovery and better facial coordination.",
  },
  {
    title: "Stroke/Parkinson's Rehabilitation",
    icon: Brain,
    desc: "Focused neuro-rehabilitation to improve balance, coordination, and movement control. We help patients regain independence and improve quality of life.",
  },
  {
    title: "Spondylitis Care",
    icon: Shield,
    desc: "Specialized physiotherapy for spinal stiffness, inflammation, and chronic pain management. Improve posture, flexibility, and spinal mobility with tailored exercises.",
  },
  {
    title: "Arthritis Care",
    icon: Hand,
    desc: "Gentle and effective therapy to reduce joint pain, swelling, and stiffness. Maintain mobility and improve daily function through personalized care plans.",
  },
  {
    title: "Ergonomic Consultation",
    icon: Briefcase,
    desc: "Professional assessment to improve workplace posture and reduce strain-related injuries. Optimize comfort and productivity with customized ergonomic recommendations.",
  },
  {
    title: "Workstation Setup Guidance",
    icon: Monitor,
    desc: "Expert guidance for creating a healthy and posture-friendly workstation setup. Prevent neck, back, and wrist discomfort caused by prolonged desk work.",
  },
  {
    title: "Posture Analysis",
    icon: PersonStanding,
    desc: "Detailed assessment of posture and movement patterns to identify imbalances. Corrective exercises and guidance help improve alignment and prevent pain.",
  },
];

const Treatments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Treatments
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              Comprehensive physiotherapy services tailored to your condition, from assessment to full recovery.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-primary-foreground/85 max-w-lg mx-auto mb-6">
              Book a consultation with Dr. Mousam for a thorough assessment and personalized treatment recommendation.
            </p>
            <Button variant="ctaWhite" size="xl" asChild>
              <a href="https://wa.me/919742839299?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
