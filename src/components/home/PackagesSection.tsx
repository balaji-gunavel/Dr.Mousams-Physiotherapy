import { Check, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Consultation",
    price: 450,
    description: "One-time assessment with the doctor",
    features: ["Detailed evaluation", "Personalized recommendations"],
  },
  {
    name: "Single Session",
    price: 450,
    description: "One physiotherapy session",
    features: ["1 treatment session", "Pay-as-you-go"],
  },
  {
    name: "7 Sessions",
    originalPrice: 3150,
    price: 3000,
    discount: 7,
    validity: "10 working days",
    features: ["7 treatment sessions", "7% package discount", "Continuous progress tracking"],
  },
  {
    name: "10 Sessions",
    originalPrice: 4500,
    price: 4100,
    discount: 10,
    validity: "15 working days",
    popular: true,
    features: ["10 treatment sessions", "10% package discount", "Best value for recovery"],
  },
  {
    name: "15 Sessions",
    originalPrice: 6750,
    price: 5700,
    discount: 15,
    validity: "20 working days",
    features: ["15 treatment sessions", "15% package discount", "Ideal for full rehabilitation"],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col ${
                pkg.popular ? "border-primary ring-2 ring-primary/20 lg:scale-105" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">{pkg.name}</h3>
                {pkg.description && (
                  <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                )}
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  {pkg.originalPrice && (
                    <span className="text-base text-muted-foreground line-through">
                      ₹{pkg.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary">
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </span>
                </div>
                {pkg.discount && (
                  <span className="inline-block mt-2 bg-accent/15 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                    {pkg.discount}% Discount
                  </span>
                )}
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {pkg.validity && (
                <div className="text-xs text-muted-foreground italic mb-4 border-l-2 border-primary/30 pl-3">
                  *Sessions need to be completed within {pkg.validity}.
                </div>
              )}

              <Button asChild variant={pkg.popular ? "cta" : "ctaOutline"} size="default" className="w-full mt-auto">
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-foreground uppercase tracking-wide text-sm">
                All days are considered as working days except Sunday
              </p>
              <p className="font-semibold text-foreground uppercase tracking-wide text-sm">
                No refund available on package charges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
