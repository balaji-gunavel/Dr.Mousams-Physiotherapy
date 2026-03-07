import { ClipboardCheck, Search, FileText, Dumbbell, TrendingUp } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Detailed Assessment", desc: "Comprehensive evaluation of your condition, pain points, and movement patterns." },
  { icon: Search, title: "Root Cause Understanding", desc: "Identifying the underlying cause, not just treating symptoms." },
  { icon: FileText, title: "Personalized Therapy Plan", desc: "A treatment plan tailored to your specific needs and recovery goals." },
  { icon: Dumbbell, title: "Guided Exercises", desc: "Clear exercise instructions with proper form and precautions." },
  { icon: TrendingUp, title: "Recovery Monitoring", desc: "Tracking your progress and adjusting treatment for the best outcome." },
];

const TreatmentApproach = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Treatment Approach
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A structured, evidence-based approach to help you recover faster and stay pain-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-7 left-1/2 w-full h-px bg-border hidden md:block" style={{ display: i === steps.length - 1 ? "none" : undefined }} />
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 leading-6 mb-2">
                {i + 1}
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;
