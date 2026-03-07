import { Users, Heart, MessageSquare } from "lucide-react";

const FacebookSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Users className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Join Our Community
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            800+ followers trust our Facebook community for helpful physiotherapy tips, exercise guidance, and health updates. Join a growing community of patients committed to their recovery.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[
              { icon: Users, label: "800+ Followers" },
              { icon: Heart, label: "Active Community" },
              { icon: MessageSquare, label: "Regular Updates" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
