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

const conditions = [
  { icon: Activity, title: "Neck Pain" },
  { icon: Dumbbell, title: "Shoulder Pain" },
  { icon: Bone, title: "Back Pain" },
  { icon: Footprints, title: "Knee Pain" },
  { icon: Wrench, title: "Fracture Rehabilitation" },
  { icon: Stethoscope, title: "Total Knee Replacement Rehabilitation" },
  { icon: HeartPulse, title: "Total Hip Replacement Rehabilitation" },
  { icon: Dumbbell, title: "ACL/Meniscus Repair Rehabilitation" },
  { icon: RotateCcw, title: "Arthroscopy Rehabilitation" },
  { icon: Smile, title: "Bell's Palsy Care" },
  { icon: Brain, title: "Stroke/Parkinson's Rehabilitation" },
  { icon: Shield, title: "Spondylitis Care" },
  { icon: Hand, title: "Arthritis Care" },
  { icon: Briefcase, title: "Ergonomic Consultation" },
  { icon: Monitor, title: "Workstation Setup Guidance" },
  { icon: PersonStanding, title: "Posture Analysis" },
];

const ConditionsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Conditions We Treat
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Specialized physiotherapy for a wide range of orthopaedic, neurological, and chronic pain conditions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {conditions.map((cond) => (
            <div
              key={cond.title}
              className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md hover:border-primary/30 transition-all group flex flex-col items-center justify-center"
            >
              <cond.icon className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">{cond.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
