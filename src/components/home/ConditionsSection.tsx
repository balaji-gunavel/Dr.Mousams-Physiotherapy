import { Activity, Bone, Brain, Dumbbell, Heart, ShieldCheck, Zap, Target, Stethoscope, Wrench } from "lucide-react";

const conditions = [
  { icon: Bone, title: "Back Pain" },
  { icon: Activity, title: "Neck Pain" },
  { icon: Brain, title: "Cervical Spondylitis" },
  { icon: ShieldCheck, title: "Frozen Shoulder" },
  { icon: Target, title: "Tennis Elbow" },
  { icon: Stethoscope, title: "ACL Rehabilitation" },
  { icon: Wrench, title: "Ligament Injuries" },
  { icon: Dumbbell, title: "Sports Injuries" },
  { icon: Heart, title: "Post-Surgery Rehab" },
  { icon: Zap, title: "Chronic Pain" },
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
            Specialized physiotherapy for a wide range of orthopedic, neurological, and chronic pain conditions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {conditions.map((cond) => (
            <div
              key={cond.title}
              className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <cond.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">{cond.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
