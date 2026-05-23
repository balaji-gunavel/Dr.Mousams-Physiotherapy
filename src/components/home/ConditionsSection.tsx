import {
  Smile,
  Shield,
  Hand,
  Briefcase,
  Monitor,
  PersonStanding,
} from "lucide-react";
import neckPainIcon from "@/assets/neck-pain.png";
import shoulderIcon from "@/assets/shoulder.png";
import backIcon from "@/assets/back.png";
import kneeIcon from "@/assets/knee.png";
import fractureIcon from "@/assets/fracture.png";
import kneeReplacementIcon from "@/assets/knee-replacement.png";
import hipReplacementIcon from "@/assets/hip-replacement.png";
import aclMeniscusIcon from "@/assets/acl-meniscus.png";
import arthroscopyIcon from "@/assets/arthroscopy.png";
import bellsPalsyIcon from "@/assets/bells-palsy.png";
import strokeParkinsonsIcon from "@/assets/stroke-parkinsons.png";

const conditions = [
  { icon: neckPainIcon, title: "Neck Pain", isImage: true },
  { icon: shoulderIcon, title: "Shoulder Pain", isImage: true },
  { icon: backIcon, title: "Back Pain", isImage: true },
  { icon: kneeIcon, title: "Knee Pain", isImage: true },
  { icon: fractureIcon, title: "Fracture Rehabilitation", isImage: true },
  { icon: kneeReplacementIcon, title: "Total Knee Replacement Rehabilitation", isImage: true },
  { icon: hipReplacementIcon, title: "Total Hip Replacement Rehabilitation", isImage: true },
  { icon: aclMeniscusIcon, title: "ACL/Meniscus Repair Rehabilitation", isImage: true },
  { icon: arthroscopyIcon, title: "Arthroscopy Rehabilitation", isImage: true },
  { icon: bellsPalsyIcon, title: "Bell's Palsy Care", isImage: true },
  { icon: strokeParkinsonsIcon, title: "Stroke/Parkinson's Rehabilitation", isImage: true },
  { icon: Shield, title: "Spondylitis Care" },
  { icon: Hand, title: "Arthritis Care" },
  { icon: Briefcase, title: "Ergonomic Consultation" },
  { icon: Monitor, title: "Workstation Setup Guidance" },
  { icon: PersonStanding, title: "Posture Analysis" },
] as Array<{ icon: any; title: string; isImage?: boolean }>;

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
              {cond.isImage ? (
                <img src={cond.icon} alt={cond.title} className="w-10 h-10 mb-3 object-contain group-hover:scale-110 transition-transform" />
              ) : (
                <cond.icon className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
              )}
              <span className="text-sm font-medium text-foreground">{cond.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
