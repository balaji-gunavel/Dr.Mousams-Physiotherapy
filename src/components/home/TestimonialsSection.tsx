import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh K.",
    text: "My back pain improved significantly within a few sessions. Dr. Mousam Shah, PT's approach is thorough and the exercises prescribed were very effective. Highly recommend to anyone struggling with chronic pain issues.",
    rating: 5,
  },
  {
    name: "Priya S.",
    text: "Every session felt truly personalized. The doctor takes time to understand the root cause and explains everything clearly. I felt confident in my recovery journey from the very first visit.",
    rating: 5,
  },
  {
    name: "Anand M.",
    text: "After my ACL surgery, I was worried about recovery. Dr. Mousam Shah, PT guided me step by step with patience and expertise. I'm back to my active lifestyle now thanks to the systematic rehabilitation plan.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    text: "As an IT professional, I had severe neck and shoulder pain. The ergonomic advice and treatment plan helped me get pain-free within weeks. Amazing care and very professional throughout.",
    rating: 5,
  },
  {
    name: "Vikas T.",
    text: "The clinic environment is very professional and calming. Doctor clearly explains each exercise and precaution. One of the best physiotherapy experiences I've had in Bangalore so far.",
    rating: 5,
  },
  {
    name: "Meera D.",
    text: "I visited for frozen shoulder treatment. The progress was visible within the first week itself. Very caring, professional, and supportive throughout the entire treatment period.",
    rating: 5,
  },
  {
    name: "Suresh N.",
    text: "Dr. Mousam Shah, PT is extremely knowledgeable and patient. My chronic lower back pain has reduced considerably after just a few weeks of consistent treatment and home exercises.",
    rating: 5,
  },
  {
    name: "Kavitha B.",
    text: "What I appreciate most is the personal attention. The doctor remembers your history and progress. Not just treating symptoms but actually addressing the root cause of the problem.",
    rating: 5,
  },
  {
    name: "Rajesh P.",
    text: "Came for sports injury rehabilitation. The treatment plan was systematic and results-oriented. Fully recovered and back to my regular training routine within the expected timeline.",
    rating: 5,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const ReviewCard = ({ t }: { t: (typeof testimonials)[number] }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.text.length > 160;
  return (
    <div className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col border border-border/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-warm text-warm" />
          ))}
        </div>
        <GoogleIcon />
      </div>
      <p className="text-foreground leading-relaxed text-[15px] flex-1">
        {isLong && !expanded ? `${t.text.slice(0, 160)}...` : t.text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground hover:text-foreground text-sm mt-3 self-start transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border/50">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
          {t.name.charAt(0)}
        </div>
        <p className="font-semibold text-foreground">{t.name}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  // Page sizes: mobile 1, tablet 3, desktop 6
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(3);
      else setPerPage(6);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [totalPages, page]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      setPage((p) => (diff < 0 ? (p + 1) % totalPages : (p - 1 + totalPages) % totalPages));
    }
    touchStartX.current = null;
  };

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

        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div key={pageIdx} className="w-full flex-shrink-0">
                <div
                  className={`grid gap-5 ${
                    perPage === 1
                      ? "grid-cols-1"
                      : perPage === 3
                      ? "grid-cols-3"
                      : "grid-cols-3 grid-rows-2"
                  }`}
                >
                  {testimonials
                    .slice(pageIdx * perPage, pageIdx * perPage + perPage)
                    .map((t, i) => (
                      <ReviewCard key={`${pageIdx}-${i}`} t={t} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2 w-full max-w-xs">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="h-1.5 flex-1 rounded-full bg-border overflow-hidden"
                aria-label={`Go to page ${i + 1}`}
              >
                <div
                  className={`h-full bg-primary transition-all ${
                    i === page ? "w-full duration-[5000ms] ease-linear" : i < page ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
