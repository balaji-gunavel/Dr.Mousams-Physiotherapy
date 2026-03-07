import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh K.",
    text: "My back pain improved significantly within a few sessions. Dr. Mousam's approach is thorough and the exercises prescribed were very effective. Highly recommend.",
    rating: 5,
  },
  {
    name: "Priya S.",
    text: "Every session felt truly personalized. The doctor takes time to understand the root cause and explains everything clearly. I felt confident in my recovery journey.",
    rating: 5,
  },
  {
    name: "Anand M.",
    text: "After my ACL surgery, I was worried about recovery. Dr. Mousam guided me step by step with patience and expertise. I'm back to my active lifestyle now.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    text: "As an IT professional, I had severe neck and shoulder pain. The ergonomic advice and treatment plan helped me get pain-free within weeks. Amazing care!",
    rating: 5,
  },
  {
    name: "Vikas T.",
    text: "The clinic environment is very professional and calming. Doctor clearly explains each exercise and precaution. One of the best physiotherapy experiences I've had.",
    rating: 5,
  },
  {
    name: "Meera D.",
    text: "I visited for frozen shoulder treatment. The progress was visible within the first week itself. Very caring, professional, and supportive throughout.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warm text-warm" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">· 234+ Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
