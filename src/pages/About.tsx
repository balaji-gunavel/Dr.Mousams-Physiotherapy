import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Shield, BadgeCheck, Award, Heart, Users, Target, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Dr. Mousam Panchamia
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              14+ years of dedicated physiotherapy practice, helping thousands of patients recover, move better, and live pain-free.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-secondary/50 rounded-2xl p-10 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <span className="font-heading text-5xl font-bold text-primary">MP</span>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">Dr. Mousam Panchamia</h2>
                <p className="text-muted-foreground mt-1 mb-4">MPT · Orthopedic Rehabilitation Specialist</p>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { icon: GraduationCap, text: "Master's in Physiotherapy" },
                    { icon: Shield, text: "Ortho Rehab Specialist" },
                    { icon: BadgeCheck, text: "Certified Ergonomist" },
                    { icon: Award, text: "14+ Years Experience" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-foreground bg-card rounded-lg p-3">
                      <item.icon className="w-4 h-4 text-primary shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  A Physiotherapist Who Truly Cares
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Mousam S. Panchamia is a highly experienced physiotherapist with over 14 years of clinical and leadership expertise in orthopaedic and rehabilitative care. She currently leads her own practice, Dr. Mousam's Physiotherapy Clinic in Bangalore, where she combines patient-centric treatment with strategic clinic management. Throughout her career, she has held key roles across reputed hospitals and healthcare organizations, including serving as Chief Physiotherapist, Head of Department, and Consultant, demonstrating strong capabilities in clinical decision-making, team mentorship, and operational leadership.
                  </p>
                  <p>
                    In addition to her clinical work, Dr. Panchamia has significant experience in ergonomics, working with organizations to improve workplace safety, productivity, and injury prevention through assessments, training, and wellness initiatives. Her expertise spans musculoskeletal, neurological, and cardiopulmonary conditions, with a strong focus on rehabilitation and pain management.
                  </p>
                  <p>
                    With advanced qualifications in Orthopaedics and certification in Mulligan Therapy, she is committed to delivering evidence-based care and continuously enhancing patient outcomes through innovative techniques and holistic treatment approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Shield, title: "Orthopedic Rehabilitation", desc: "Back pain, neck pain, frozen shoulder, joint injuries, and post-surgical recovery." },
                { icon: Heart, title: "Pain Management", desc: "Chronic pain conditions including cervical spondylitis, lower back pain, and tailbone pain." },
                { icon: Target, title: "Sports Rehabilitation", desc: "Athletic injuries, ACL recovery, muscle rehabilitation, and return-to-sport programs." },
                { icon: Briefcase, title: "Ergonomic Consultation", desc: "Workplace ergonomics, posture correction, and pain prevention for desk workers and IT professionals." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Patients Trust Dr. Mousam
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { icon: Heart, title: "Compassionate Care", desc: "Every patient is treated with genuine care and personal attention." },
                { icon: Users, title: "Clear Communication", desc: "Exercises, precautions, and treatment plans explained in simple terms." },
                { icon: Award, title: "Proven Results", desc: "4.9★ Google rating with 234+ positive patient reviews." },
              ].map((item) => (
                <div key={item.title} className="p-6">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
