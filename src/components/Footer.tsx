import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Dr. Mousam's Physiotherapy</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Trusted physiotherapy clinic in Bommanahalli, Bengaluru. 14+ years of expert care in pain relief, rehabilitation, and recovery.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Doctor", path: "/about" },
                { label: "Treatments", path: "/treatments" },
                { label: "Reviews", path: "/reviews" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Clinic Info</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>105/1, near SBI Prime Officers Residency, Kodichikknahalli, Bommanahalli, Bengaluru 560076</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+919742839299" className="hover:opacity-100">+91 97428 39299</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Opens 9 AM · Appointment recommended</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Dr. Mousam's Physiotherapy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
