import { useEffect, useRef, useState } from "react";

type Metric = {
  value: number;
  suffix: string;
  label: string;
  format?: (n: number) => string;
};

const metrics: Metric[] = [
  { value: 16, suffix: "+", label: "Years of Experience" },
  { value: 2000, suffix: "+", label: "Patients Served", format: (n) => n.toLocaleString() },
  { value: 10000, suffix: "+", label: "Physio Sessions", format: (n) => n.toLocaleString() },
];

const CountUp = ({ target, duration = 2000, format }: { target: number; duration?: number; format?: (n: number) => string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
              else setCount(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{format ? format(count) : count}</span>;
};

const TrustStrip = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border p-5 md:p-6 text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-3">
                <CountUp target={m.value} format={m.format} />
                {m.suffix}
              </div>
              <p className="text-base md:text-lg text-muted-foreground font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
