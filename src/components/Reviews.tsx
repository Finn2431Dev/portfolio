import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Thompson",
    role: "Game Studio Owner",
    content: "Absolutely incredible work! The combat system delivered exceeded all our expectations. Clean code, great communication, and delivered ahead of schedule. Will definitely hire again!",
    rating: 5,
    avatar: "AT"
  },
  {
    name: "Sarah Chen",
    role: "Indie Developer",
    content: "Finally found a scripter who truly understands game development. The inventory system is flawless and players love it. Professional, patient, and extremely talented.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Williams",
    role: "Studio Director",
    content: "Hired for a complex multiplayer racing game. The physics and networking are buttery smooth. This is the level of quality every Roblox game deserves.",
    rating: 5,
    avatar: "MW"
  },
  {
    name: "Emily Rodriguez",
    role: "Game Designer",
    content: "The trading system implementation was perfect. Secure, user-friendly, and exactly what we envisioned. Communication was excellent throughout the entire project.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "James Park",
    role: "Front-Page Developer",
    content: "Our game went from 100k to 10M visits after the optimization work. The performance improvements were night and day. Highly recommended!",
    rating: 5,
    avatar: "JP"
  },
  {
    name: "Luna Martinez",
    role: "Startup Founder",
    content: "Transformed our concept into a fully functional game. The attention to detail and willingness to iterate until perfect made all the difference. 10/10!",
    rating: 5,
    avatar: "LM"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-16 border-t border-border/50">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">200+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">0</div>
            <div className="text-sm text-muted-foreground">Refund Requests</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
