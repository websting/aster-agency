
import { ArrowUpRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Aster understood our vision from day one. They brought incredible creativity and attention to detail to every part of the project. The result exceeded our expectations.",
      name: "Olivia Bennett",
      role: "Founder, Forma Living",
      initials: "OB",
    },
    {
      quote:
        "The entire process felt thoughtful and collaborative. They transformed our ideas into a digital experience that truly represents our brand.",
      name: "James Carter",
      role: "Director, Mono Architecture",
      initials: "JC",
    },
    {
      quote:
        "A fantastic team with a real eye for design. Every detail felt intentional, and the final website gave our business a fresh new direction.",
      name: "Sophie Williams",
      role: "Creative Director, Sunday Objects",
      initials: "SW",
    },
  ];

  return (
    <section className="bg-neutral-950 text-white px-6 lg:px-12 py-24 lg:py-36">
      <div className="max-w-350 mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Kind words
              </p>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.07em] font-semibold">
              Don't just
              <br />
              take our <span className="text-lime-400">word.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base md:text-lg leading-relaxed text-neutral-400">
            Great partnerships lead to great work. Here's what it's like
            working together.
          </p>

        </div>

        {/* FEATURED TESTIMONIAL */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/20 pt-12">

          <div className="lg:col-span-2">
            <Quote size={54} strokeWidth={1} className="text-lime-400" />
          </div>

          <div className="lg:col-span-10">

            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight font-medium text-white max-w-5xl">
              "{testimonials[0].quote}"
            </blockquote>

            <div className="mt-12 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-lime-400 text-neutral-950 flex items-center justify-center font-semibold">
                {testimonials[0].initials}
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {testimonials[0].name}
                </p>
                <p className="text-sm text-neutral-500 mt-1">
                  {testimonials[0].role}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* OTHER TESTIMONIALS */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">

          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="border-t border-white/20 pt-8"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="text-xs text-lime-400">
                  0{index + 2}
                </span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between gap-5">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
            Built on trust. Driven by creativity.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-medium text-lime-400 hover:text-white transition-colors"
          >
            Become our next success story
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
