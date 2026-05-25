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
import spondylitisIcon from "@/assets/spondylitis.png";
import arthritisIcon from "@/assets/arthritis.png";
import ergonomicIcon from "@/assets/ergonomic-consultation.png";
import workstationIcon from "@/assets/workstation-setup.png";
import postureIcon from "@/assets/posture-analysis.png";

const conditions = [
  { icon: neckPainIcon, title: "Neck Pain" },
  { icon: shoulderIcon, title: "Shoulder Pain" },
  { icon: backIcon, title: "Back Pain" },
  { icon: kneeIcon, title: "Knee Pain" },
  { icon: fractureIcon, title: "Fracture Rehabilitation" },
  { icon: kneeReplacementIcon, title: "Total Knee Replacement Rehabilitation" },
  { icon: hipReplacementIcon, title: "Total Hip Replacement Rehabilitation" },
  { icon: aclMeniscusIcon, title: "ACL/Meniscus Repair Rehabilitation" },
  { icon: arthroscopyIcon, title: "Arthroscopy Rehabilitation" },
  { icon: bellsPalsyIcon, title: "Bell's Palsy Care" },
  { icon: strokeParkinsonsIcon, title: "Stroke/Parkinson's Rehabilitation" },
  { icon: spondylitisIcon, title: "Spondylitis Care" },
  { icon: arthritisIcon, title: "Arthritis Care" },
  { icon: ergonomicIcon, title: "Ergonomic Consultation" },
  { icon: workstationIcon, title: "Workstation Setup Guidance" },
  { icon: postureIcon, title: "Posture Analysis" },
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
            Specialized physiotherapy for a wide range of orthopaedic, neurological, and chronic pain conditions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {conditions.map((cond) => (
            <div
              key={cond.title}
              className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md hover:border-primary/30 transition-all group flex flex-col items-center justify-center"
            >
              <img
                src={cond.icon}
                alt={cond.title}
                className={`mb-3 object-contain group-hover:scale-110 transition-transform ${
                  cond.title === "Workstation Setup Guidance" ? "w-14 h-14" : "w-10 h-10"
                }`}
              />
              <span className="text-sm font-medium text-foreground">{cond.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
