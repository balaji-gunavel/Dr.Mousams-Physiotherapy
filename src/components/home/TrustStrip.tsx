import { Star, Award, GraduationCap, Clock, Shield, BadgeCheck } from "lucide-react";

const items = [
  { icon: Star, label: "4.9★ Google Rating", color: "text-warm" },
  { icon: Award, label: "234+ Reviews", color: "text-primary" },
  { icon: Clock, label: "14+ Years Experience", color: "text-primary" },
  { icon: GraduationCap, label: "Master's in Physiotherapy", color: "text-primary" },
  { icon: Shield, label: "Ortho Rehab Specialist", color: "text-primary" },
  { icon: BadgeCheck, label: "Certified Ergonomist", color: "text-primary" },
];

const TrustStrip = () => {
  return (
    <section className="bg-trust py-6 md:py-8 border-y border-border">
      <div className="container-narrow px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 justify-center text-center">
              <item.icon className={`w-5 h-5 shrink-0 ${item.color}`} />
              <span className="text-xs md:text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
