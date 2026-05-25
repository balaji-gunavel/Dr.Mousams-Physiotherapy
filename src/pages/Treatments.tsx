import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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

const services = [
  {
    title: "Neck Pain",
    icon: neckPainIcon,
    desc: "Relieve stiffness, muscle tension, and discomfort caused by poor posture, stress, or injury. Personalized physiotherapy helps improve mobility, posture, and daily comfort.",
  },
  {
    title: "Shoulder Pain",
    icon: shoulderIcon,
    desc: "Effective treatment for frozen shoulder, rotator cuff injuries, and muscle strain. Restore strength, flexibility, and pain-free movement with guided therapy.",
  },
  {
    title: "Back Pain",
    icon: backIcon,
    desc: "Comprehensive care for lower back, upper back, and posture-related pain conditions. Our therapy focuses on pain relief, spinal mobility, and long-term prevention.",
  },
  {
    title: "Knee Pain",
    icon: kneeIcon,
    desc: "Targeted rehabilitation for ligament injuries, arthritis, and sports-related knee pain. Improve joint stability, reduce pain, and regain confident movement.",
  },
  {
    title: "Fracture Rehabilitation",
    icon: fractureIcon,
    desc: "Structured recovery programs to restore mobility and strength after fractures. We help patients safely return to daily activities with guided rehabilitation.",
  },
  {
    title: "Total Knee Replacement Rehabilitation",
    icon: kneeReplacementIcon,
    desc: "Post-surgical rehabilitation designed to improve knee movement and functional recovery. Focused exercises help regain strength, balance, and walking confidence.",
  },
  {
    title: "Total Hip Replacement Rehabilitation",
    icon: hipReplacementIcon,
    desc: "Specialized therapy to support faster and safer recovery after hip replacement surgery. Enhance flexibility, muscle strength, and overall mobility with expert guidance.",
  },
  {
    title: "ACL/Meniscus Repair Rehabilitation",
    icon: aclMeniscusIcon,
    desc: "Advanced rehabilitation programs for sports injuries and post-surgical recovery. Restore knee stability, agility, and performance through progressive therapy.",
  },
  {
    title: "Arthroscopy Rehabilitation",
    icon: arthroscopyIcon,
    desc: "Personalized recovery plans following minimally invasive joint surgeries. Reduce stiffness, improve movement, and regain normal joint function effectively.",
  },
  {
    title: "Bell's Palsy Care",
    icon: bellsPalsyIcon,
    desc: "Therapeutic exercises and stimulation techniques to improve facial muscle function. Our treatment supports faster recovery and better facial coordination.",
  },
  {
    title: "Stroke/Parkinson's Rehabilitation",
    icon: strokeParkinsonsIcon,
    desc: "Focused neuro-rehabilitation to improve balance, coordination, and movement control. We help patients regain independence and improve quality of life.",
  },
  {
    title: "Spondylitis Care",
    icon: spondylitisIcon,
    desc: "Specialized physiotherapy for spinal stiffness, inflammation, and chronic pain management. Improve posture, flexibility, and spinal mobility with tailored exercises.",
  },
  {
    title: "Arthritis Care",
    icon: arthritisIcon,
    desc: "Gentle and effective therapy to reduce joint pain, swelling, and stiffness. Maintain mobility and improve daily function through personalized care plans.",
  },
  {
    title: "Ergonomic Consultation",
    icon: ergonomicIcon,
    desc: "Professional assessment to improve workplace posture and reduce strain-related injuries. Optimize comfort and productivity with customized ergonomic recommendations.",
  },
  {
    title: "Workstation Setup Guidance",
    icon: workstationIcon,
    desc: "Expert guidance for creating a healthy and posture-friendly workstation setup. Prevent neck, back, and wrist discomfort caused by prolonged desk work.",
  },
  {
    title: "Posture Analysis",
    icon: postureIcon,
    desc: "Detailed assessment of posture and movement patterns to identify imbalances. Corrective exercises and guidance help improve alignment and prevent pain.",
  },
];

const Treatments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Treatments
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              Comprehensive physiotherapy services tailored to your condition, from assessment to full recovery.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
                >
                  <div className={`rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${
                    s.title === "Workstation Setup Guidance" ? "w-14 h-14" : "w-12 h-12"
                  }`}>
                    <img
                      src={s.icon}
                      alt={s.title}
                      className={`object-contain ${
                        s.title === "Workstation Setup Guidance" ? "w-[60px] h-[60px]" : "w-[50px] h-[50px]"
                      }`}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-primary-foreground/85 max-w-lg mx-auto mb-6">
              Book a consultation with Dr. Mousam Shah, PT for a thorough assessment and personalized treatment recommendation.
            </p>
            <Button variant="ctaWhite" size="xl" asChild>
              <a href="https://wa.me/919742839299?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
