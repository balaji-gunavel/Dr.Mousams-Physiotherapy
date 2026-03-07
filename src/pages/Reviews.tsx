import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Ramesh K.", text: "My recovery improved significantly within a few sessions. The treatment approach is thorough and Dr. Mousam takes time to explain every exercise. Highly professional clinic.", rating: 5, date: "2 months ago" },
  { name: "Priya S.", text: "Every session felt truly personalized. Dr. Mousam understood my condition deeply and the exercises prescribed were very effective. My neck pain reduced drastically.", rating: 5, date: "3 months ago" },
  { name: "Anand M.", text: "After my ACL surgery, I was nervous about recovery. Dr. Mousam guided me step by step with patience and expertise. I'm back to playing sports now!", rating: 5, date: "1 month ago" },
  { name: "Sneha R.", text: "As an IT professional working long hours, I had terrible shoulder and neck pain. The ergonomic advice and targeted treatment helped me become pain-free. Truly grateful.", rating: 5, date: "4 months ago" },
  { name: "Vikas T.", text: "Very professional and calming clinic environment. Doctor clearly explains each exercise and precaution. One of the best physiotherapy experiences in Bangalore.", rating: 5, date: "2 months ago" },
  { name: "Meera D.", text: "Visited for frozen shoulder. The progress was visible within the first week itself. Very caring, professional, and supportive throughout the treatment.", rating: 5, date: "5 months ago" },
  { name: "Suresh N.", text: "Dr. Mousam is extremely knowledgeable and patient. My chronic lower back pain has reduced considerably after just a few weeks of treatment.", rating: 5, date: "3 months ago" },
  { name: "Kavitha B.", text: "What I appreciate most is the personal attention. The doctor remembers your history and progress. Not just treating symptoms — treats the root cause.", rating: 5, date: "1 month ago" },
  { name: "Rajesh P.", text: "Came for sports injury rehabilitation. The treatment plan was systematic and results-oriented. Fully recovered and back to my regular training routine.", rating: 5, date: "6 months ago" },
  { name: "Deepa G.", text: "My elderly mother was having difficulty walking due to knee pain. After a few sessions with Dr. Mousam, her mobility has improved greatly. Wonderful care.", rating: 5, date: "2 months ago" },
  { name: "Arun V.", text: "The clinic is well-maintained and hygienic. Dr. Mousam's approach is evidence-based and the results speak for themselves. Very trustworthy practitioner.", rating: 5, date: "4 months ago" },
  { name: "Lakshmi R.", text: "Had cervical spondylitis for over a year. Other treatments didn't help. Dr. Mousam's approach was different — focused on understanding the cause. Feeling so much better now.", rating: 5, date: "3 months ago" },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary section-padding">
          <div className="container-narrow text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Patient Reviews
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              Real feedback from real patients. Our results speak through their words.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 text-center mb-12">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-warm text-warm" />
                ))}
              </div>
              <div className="text-5xl font-bold text-foreground font-heading mb-2">4.9</div>
              <p className="text-muted-foreground text-lg">out of 5 · Based on 234+ Google Reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-warm text-warm" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-4">"{r.text}"</p>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">See all our reviews on Google</p>
              <Button variant="cta" size="lg" asChild>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                  View All Google Reviews
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
