import { Check } from "lucide-react";

const packages = [
  {
    name: "Consultation",
    sessions: "One-time",
    price: 450,
  },
  {
    name: "1 Session",
    sessions: "Single session",
    price: 450,
  },
  {
    name: "7 Sessions",
    sessions: "Complete within 10 working days",
    originalPrice: 3150,
    price: 3000,
    discount: 7,
  },
  {
    name: "10 Sessions",
    sessions: "Complete within 15 working days",
    originalPrice: 4500,
    price: 4100,
    discount: 10,
    featured: true,
  },
  {
    name: "15 Sessions",
    sessions: "Complete within 20 working days",
    originalPrice: 6750,
    price: 5700,
    discount: 15,
  },
];

const PackagesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Physiotherapy Packages
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing with discounted multi-session packages tailored to your recovery journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-center">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative w-full max-w-sm bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${
                pkg.featured ? "border-primary shadow-md" : "border-border"
              }`}
            >
              {pkg.discount && (
                <div className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
                  {pkg.discount}% OFF
                </div>
              )}

              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {pkg.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-1">
                {pkg.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{pkg.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  ₹{pkg.price.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-5 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-accent shrink-0" />
                {pkg.sessions}
              </p>

              {pkg.originalPrice && (
                <p className="mt-auto text-xs text-accent font-medium bg-accent/10 rounded-md px-3 py-2">
                  You save ₹{(pkg.originalPrice - pkg.price).toLocaleString("en-IN")}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <p className="text-center text-sm text-muted-foreground italic">
            All days are considered as working days except Sunday. No Refund Available On Package Charges.
          </p>
        </div>

        <p className="mt-8 text-center text-base font-bold text-foreground">
          Contact us for personalized treatment recommendations and package guidance.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
