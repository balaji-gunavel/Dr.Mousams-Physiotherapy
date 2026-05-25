import packagesImage from "@/assets/physiotherapy-packages.jpeg";

const PackagesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Physiotherapy Packages
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing with discounted multi-session packages tailored to your recovery journey.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={packagesImage}
            alt="Dr. Mousam Shah, PT's Physiotherapy Clinic packages and pricing"
            className="w-full max-w-2xl rounded-2xl shadow-md border border-border object-contain"
          />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          Contact us for personalized treatment recommendations and package guidance.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
