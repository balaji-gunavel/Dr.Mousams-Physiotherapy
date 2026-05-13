import { Star, MessageSquare, GraduationCap, Shield, BadgeCheck } from "lucide-react";

const items = [
  { icon: Star, text: "4.9 Google Rating" },
  { icon: MessageSquare, text: "234+ Reviews" },
  { icon: GraduationCap, text: "Master's in Physiotherapy" },
  { icon: Shield, text: "Ortho Rehab Specialist" },
  { icon: BadgeCheck, text: "Certified Ergonomist" },
];

const CredibilityRow = () => {
  return (
    <section className="pb-8 md:pb-12">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8 border-y border-border py-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-xs md:text-sm text-foreground">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" strokeWidth={1.75} />
              <span className="whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityRow;
