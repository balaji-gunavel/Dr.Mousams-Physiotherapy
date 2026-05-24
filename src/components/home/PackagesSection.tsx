import packagesImg from "@/assets/packages.jpeg";

const PackagesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Physiotherapy Packages
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing with discounts on multi-session packages.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={packagesImg}
            alt="Dr. Mousam's Physiotherapy Clinic packages and pricing"
            className="w-full max-w-2xl rounded-xl border border-border shadow-sm"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
