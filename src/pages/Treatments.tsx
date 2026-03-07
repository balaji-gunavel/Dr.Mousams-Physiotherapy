import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bone, Activity, ShieldCheck, Target, Dumbbell, Heart, Briefcase, Stethoscope, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Orthopedic Physiotherapy",
    desc: "Expert treatment for musculoskeletal conditions to restore movement and reduce pain.",
    icon: Bone,
    items: [
      { name: "Back Pain Treatment", desc: "Targeted therapy for lower back, mid-back, and upper back pain using manual techniques and corrective exercises." },
      { name: "Neck Pain Relief", desc: "Treatment for cervical strain, stiffness, and pain from poor posture or injury." },
      { name: "Frozen Shoulder Therapy", desc: "Progressive mobilization and strengthening to restore shoulder range of motion." },
      { name: "Tennis Elbow Treatment", desc: "Specialized exercises and manual therapy for lateral epicondylitis and forearm pain." },
    ],
  },
  {
    title: "Post-Surgery Rehabilitation",
    desc: "Structured recovery programs to help you heal safely and regain strength after surgery.",
    icon: Stethoscope,
    items: [
      { name: "ACL Recovery Program", desc: "Phase-based rehabilitation following ACL reconstruction for safe return to activity." },
      { name: "Ligament Injury Rehab", desc: "Controlled strengthening and mobility restoration after ligament repair." },
      { name: "Joint Replacement Recovery", desc: "Post-operative therapy for knee, hip, and shoulder replacement patients." },
    ],
  },
  {
    title: "Sports Injury Rehabilitation",
    desc: "Get back to your sport with expert guidance and performance-focused recovery.",
    icon: Dumbbell,
    items: [
      { name: "Athletic Injury Recovery", desc: "Comprehensive treatment for sprains, strains, and sports-related injuries." },
      { name: "Muscle Recovery", desc: "Targeted therapy for muscle tears, overuse injuries, and fatigue-related conditions." },
      { name: "Mobility Restoration", desc: "Functional movement training to restore flexibility and prevent re-injury." },
    ],
  },
  {
    title: "Chronic Pain Management",
    desc: "Long-term pain management strategies that address the root cause, not just symptoms.",
    icon: Heart,
    items: [
      { name: "Cervical Spondylitis", desc: "Evidence-based treatment for neck degeneration, stiffness, and radiating pain." },
      { name: "Lower Back Pain", desc: "Comprehensive approach for persistent lower back pain including postural correction." },
      { name: "Tailbone Pain (Coccydynia)", desc: "Specialized treatment for coccyx pain with ergonomic advice and targeted therapy." },
    ],
  },
  {
    title: "Ergonomic Consultation",
    desc: "Prevent workplace pain with expert ergonomic assessment and posture guidance.",
    icon: Briefcase,
    items: [
      { name: "Desk Worker Assessment", desc: "Workstation evaluation and adjustment recommendations for desk-bound professionals." },
      { name: "Corporate Ergonomics", desc: "Workplace pain prevention programs for IT companies and corporate offices." },
      { name: "Posture Correction", desc: "Postural assessment and corrective exercise programs for long-term improvement." },
      { name: "Workplace Pain Prevention", desc: "Proactive strategies to prevent repetitive strain and overuse injuries." },
    ],
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
          <div className="container-narrow space-y-16">
            {categories.map((cat, catIdx) => (
              <div key={cat.title} className={`${catIdx % 2 === 1 ? "" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all">
                      <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
