import { ClipboardCheck, Search, FileText, Dumbbell, TrendingUp, ChevronDown } from "lucide-react";

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
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
            Your Recovery Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Treatment Approach
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A structured, evidence-based approach to help you recover faster and stay pain-free.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {steps.map((step, i) => (
            <div key={step.title} className="w-full flex flex-col items-center">
              <div
                className="w-full bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shadow-md ring-4 ring-muted">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="py-3 sm:py-4" aria-hidden="true">
                  <ChevronDown
                    className="w-7 h-7 sm:w-8 sm:h-8 text-accent animate-pulse"
                    strokeWidth={2.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;
