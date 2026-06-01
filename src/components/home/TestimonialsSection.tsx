import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatarColor?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anand Kamate (CLARXZES)",
    date: "3 weeks ago",
    rating: 4,
    text: "The best place for physiotherapy. My tennis elbow improved significantly after taking sessions here.",
  },
  {
    name: "Aanchal Sharma",
    date: "a month ago",
    rating: 5,
    text: "Dr. Mousam is really a very good doctor. I was struggling with cervical pain very badly and since a very long time, she identified the root cause and treated it in a very good way, huge difference in my pain and discomfort after the sessions from her. I really thank her for treating me the right way. Highly recommend!!",
  },
  {
    name: "Aheesh Bhat",
    date: "a month ago",
    rating: 5,
    text: "I sustained a SLAP injury on my right shoulder and being a cricket player, I was worried a lot on whether I can return to sports. Physiotherapy from Dr. Mousam helped a lot to me to recover within 2 months. Even after the regular physio sessions, follow ups by the doctor on the recovery progress is a major plus. Easily recommendable.",
  },
  {
    name: "Srinath chandrasekar",
    date: "a month ago",
    rating: 5,
    text: "Excellent work by Dr Mousam. Very well diagnosed and excellent work by her and the team. I am almost pain free now",
  },
  {
    name: "sid bhusan",
    date: "2 months ago",
    rating: 5,
    text: "I had a great experience with madam Dr Mausam. I have taken approx 35 sessions and the treatment was very effective. She carefully listened to my problem, explained the home exercises and guided me.\n\nI really appreciate patience, knowledge, and supportive approach and definitely recommend to people looking for quality physiotherapy treatment.",
  },
  {
    name: "Ratan Ravichandran",
    date: "2 months ago",
    rating: 5,
    text: "I was treated for neck pain here, and the doctors were both friendly and highly knowledgeable. The treatment process was methodical, and they took the time to explain everything I needed to know.",
  },
  {
    name: "Shivani Mahajan",
    date: "3 months ago",
    rating: 5,
    text: "We are extremely thankful to Dr. Mausam Panchamia for her exceptional care and support. When my mother-in-law was unable to walk even a single step, we were very worried and doctors had advised immediate surgery.\n\nWith Dr. Mausam's expert treatment, clear guidance, and constant encouragement, there was a remarkable improvement. Along with the support ,her personalised exercises helped my mother-in-law regain strength and confidence step by step. Today, she is walking properly and feels so much better that she no longer feels the need for surgery.\n\nHer patience, positivity, and genuine care made all the difference. We are truly grateful and highly recommend Dr. Mausam Panchamia to anyone looking for a skilled and compassionate physiotherapist.",
  },
  {
    name: "Meher Taj",
    date: "4 months ago",
    rating: 5,
    text: "Dr.Mousam,s is abest doctor. She treated me well and my neck and back pain is better during the therapy .She guided me to do my exercises daily and I understand easily .And she also advise me to take rest as a mother. Once again thank u mam .",
  },
  {
    name: "Arjoon Sorcar",
    date: "4 months ago",
    rating: 5,
    text: "I highly recommend Dr. Mousam's Physiotherapy! They handled my recovery with incredible care and genuine attention to detail. Every session felt like a personalized consultation rather than a one-size-fits-all approach. I truly felt heard and supported throughout my treatment.",
  },
  {
    name: "Pavankalyan Ichapurapu",
    date: "4 months ago",
    rating: 5,
    text: "I visited Dr. Mousam post-cervical surgery for therapy. She thoroughly analyzed the issue and suggested the best course of action, outlining clear precautions and providing a very welcoming atmosphere. She explained the potential future developments, symptoms to watch out for at trigger points, and the treatment options.",
  },
  {
    name: "Anita Kumari",
    date: "6 months ago",
    rating: 5,
    text: "Dr. Mausam is very kind, understanding, and truly listens to her patients. I used to believe that most doctors were only money-minded and wanted patients to keep visiting their clinic for profit. But Dr. Mausam completely changed my perspective. She is genuinely different.... she pays close attention to her patients' problems and cares deeply about their well-being. I have taken seven therapy sessions with her, and now I'm feeling much better. If you need therapy, I highly recommend visiting her — your perspective may change too.",
  },
  {
    name: "Bhagyashree Desai",
    date: "6 months ago",
    rating: 5,
    text: "My physiotherapy sessions have been extremely helpful. The therapist listened carefully to my problems and designed a treatment plan that suited my condition. The exercises were explained clearly, and regular follow-up helped me recover faster. I'm very satisfied with the improvement and care I received.",
  },
  {
    name: "Bhumi Shah",
    date: "Edited 8 months ago",
    rating: 5,
    text: "I travel all the way from Mumbai to Bangalore just to see Dr. Mousam, and that alone speaks volumes. I have always had multiple bone and posture issues and Dr. Mousam was my go-to physiotherapist when she was living in Mumbai. After she shifted to Bangalore, I continued treatment from her only as I am confident that only her approach works best for me. Most recently, I was treated for both cervical spondylitis and lumbar (L4-L5) spondylosis, and I've experienced remarkable relief. After regularly following her line of treatment and exercise, I no longer feel the pain in my neck or lower back, thus enabling me to go on with my life effortlessly. Her deep understanding of the body, tailored therapy sessions, and genuine care make all the difference. I trust her completely and wouldn't go anywhere else. Truly one of the best in her field!",
  },
  {
    name: "Shashank .S Shashi",
    date: "9 months ago",
    rating: 5,
    text: "I had an excellent experience with my physiotherapy sessions. From the beginning, the staff was welcoming, professional, and attentive. My physiotherapist was knowledgeable, patient, and truly dedicated to helping me recover. Iam grateful to Dr Mousam shah ma'am Thank you.",
  },
  {
    name: "Roopa Madhuri",
    date: "10 months ago",
    rating: 4,
    text: "Dr Mousam is very professional and passionate about her work. She helped me with my long term chronically cervical spondylitis pain relief and thought me techniques to manage the pain to improve the quality of everyday life.\n\nShe is very good with her diagnosis and follows up with the patient and tailored the treatment for specific needs of improvements, she gave me the confidence for long distance travel and continue my daily workouts.",
  },
  {
    name: "hari narayanan Venkataramanan",
    date: "10 months ago",
    rating: 5,
    text: "We consulted Mausam, and she was quick to gather all the necessary details and accurately identify the issue. I had been struggling with severe heel pain, and her expertise was evident right from the start. She's highly experienced and provided effective guidance that made a real difference.",
  },
  {
    name: "shilpa patil",
    date: "11 months ago",
    rating: 5,
    text: "Dr Mousam is very good. We consulted for my mother in law . The physiotherapy sessions eased a lot of pain for her. Dr.Mousam communicated in Kannada with her even though it's not her first language. This created a lot of confidence in her both about the therapy and the doctor as she could understand what course of action the doctor was taking .",
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

const avatarColors = [
  "bg-primary",
  "bg-accent",
  "bg-secondary",
  "bg-muted-foreground",
];

const getInitial = (name: string) => {
  const trimmed = name.trim();
  return trimmed.charAt(0).toUpperCase();
};

const ReviewCard = ({ t, index }: { t: Testimonial; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.text.length > 180;
  const color = avatarColors[index % avatarColors.length];
  return (
    <div className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col border border-border/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${color} text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0`}>
            {getInitial(t.name)}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm leading-tight truncate">{t.name}</p>
            <p className="text-muted-foreground text-xs mt-0.5">{t.date}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < t.rating ? "fill-warm text-warm" : "fill-muted text-muted"}`}
          />
        ))}
      </div>
      <p className="text-foreground leading-relaxed text-[15px] flex-1 whitespace-pre-line">
        {isLong && !expanded ? `${t.text.slice(0, 180)}...` : t.text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground hover:text-foreground text-sm mt-3 self-start transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
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
                      <ReviewCard key={`${pageIdx}-${i}`} t={t} index={pageIdx * perPage + i} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

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
