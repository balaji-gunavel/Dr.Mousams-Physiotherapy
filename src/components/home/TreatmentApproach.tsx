import { ClipboardCheck, Search, FileText, Dumbbell, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Detailed Assessment", desc: "Comprehensive evaluation of your condition, pain points, and movement patterns." },
  { icon: Search, title: "Root Cause Understanding", desc: "Identifying the underlying cause, not just treating symptoms." },
  { icon: FileText, title: "Personalized Therapy Plan", desc: "A treatment plan tailored to your specific needs and recovery goals." },
  { icon: Dumbbell, title: "Guided Exercises", desc: "Clear exercise instructions with proper form and precautions." },
  { icon: TrendingUp, title: "Recovery Monitoring", desc: "Tracking your progress and adjusting treatment for the best outcome." },
];

const TreatmentApproach = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-14">
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

        {/* Mobile: vertical stacked */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="w-full flex flex-col items-center animate-fade-in" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>
              <div className="group w-full bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <ArrowDown className="w-5 h-5 text-accent animate-bounce" style={{ animationDuration: "2s" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: zig-zag flow */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-6">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              // zig-zag: alternate column placement
              const colStart = isEven ? "col-start-1" : "col-start-7";
              return (
                <div
                  key={step.title}
                  className={`col-span-6 ${colStart} relative animate-fade-in`}
                  style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
                >
                  <div className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-md ring-4 ring-muted">
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector to next step */}
                  {i < steps.length - 1 && (
                    <div
                      className={`absolute top-1/2 ${isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} -translate-y-1/2 pointer-events-none`}
                      aria-hidden="true"
                    >
                      <div className="flex items-center gap-1 text-accent/70">
                        {isEven ? (
                          <>
                            <span className="block w-8 h-px bg-gradient-to-r from-transparent to-accent/60" />
                            <ArrowRight className="w-5 h-5 animate-pulse" />
                          </>
                        ) : (
                          <>
                            <ArrowRight className="w-5 h-5 rotate-180 animate-pulse" />
                            <span className="block w-8 h-px bg-gradient-to-l from-transparent to-accent/60" />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;
