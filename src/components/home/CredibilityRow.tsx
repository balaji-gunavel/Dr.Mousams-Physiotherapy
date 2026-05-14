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
    <section className="-mt-8 md:-mt-12 pb-6 md:pb-8">
      <div className="container-narrow">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8 lg:gap-x-10 border-y border-border py-3 md:py-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-foreground">
              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" strokeWidth={1.75} />
              <span className="whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityRow;
