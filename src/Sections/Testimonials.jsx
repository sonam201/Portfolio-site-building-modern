import { Quote, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ quote: "", author: "", role: "" });

  // Fetch testimonials from Supabase
  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setTestimonials(data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const previous = () =>
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleSubmit = async () => {
    if (!form.quote || !form.author || !form.role) return;
    setLoading(true);
    const { error } = await supabase.from("testimonials").insert([form]);
    if (!error) {
      await fetchTestimonials();
      setSubmitted(true);
      setForm({ quote: "", author: "", role: "" });
    }
    setLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind Words From{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people
            </span>
          </h2>
          {/* Leave a testimonial button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-6 py-2 rounded-full border border-primary/40 text-primary text-sm hover:bg-primary/10 transition-all"
          >
            + Leave a Testimonial
          </button>
        </div>

        {/* Testimonial Carousel */}
        {testimonials.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="font-semibold">{testimonials[activeIdx].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 transition-all rounded-full duration-300 ${
                      idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={next}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No testimonials yet. Be the first!</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass rounded-3xl p-8 w-full max-w-md mx-4 relative border border-primary/30">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
            >
              <X />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🙌</div>
                <h3 className="text-xl font-bold mb-2">Thanks so much!</h3>
                <p className="text-muted-foreground">Your testimonial has been added.</p>
                <button
                  onClick={closeModal}
                  className="mt-6 px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6">Leave a Testimonial</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Your Role</label>
                    <input
                      type="text"
                      placeholder="Senior Developer, Company"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Your Message</label>
                    <textarea
                      placeholder="Share your experience working with Suresh..."
                      value={form.quote}
                      onChange={(e) => setForm({ ...form, quote: e.target.value })}
                      rows={4}
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Testimonial"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};