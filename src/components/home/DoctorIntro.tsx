import { Star, MessageSquare, GraduationCap, Shield, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DoctorIntro = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="font-heading text-4xl font-bold text-primary">MP</span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">Dr. Mousam Panchamia</h3>
            <p className="text-sm text-muted-foreground mt-1">MPT · Ortho Rehab Specialist</p>
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Your Physiotherapist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dr. Mousam S. Panchamia is a senior physiotherapist with 16+ years of expertise in orthopaedic rehabilitation, pain management, and ergonomics. As founder of Dr. Mousam’s Physiotherapy Clinic in Bangalore, she provides evidence-based care for musculoskeletal, neurological, and cardiopulmonary conditions, combining advanced clinical expertise, leadership experience, and specialized training in Orthopaedics and Mulligan Therapy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { icon: Star, text: "4.9 Google Rating" },
                { icon: MessageSquare, text: "234+ Reviews" },
                { icon: GraduationCap, text: "Master's in Physiotherapy" },
                { icon: Shield, text: "Ortho Rehab Specialist" },
                { icon: BadgeCheck, text: "Certified Ergonomist" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-foreground">
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link to="/about">Learn More About Dr. Mousam</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;
