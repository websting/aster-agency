
import { ArrowUpRight, Palette, Monitor, Code2, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Brand Identity",
      description:
        "We create distinctive brand identities that communicate who you are and make your business memorable.",
      detail: "Strategy / Visual Identity / Art Direction",
      icon: Palette,
    },
    {
      number: "02",
      title: "Web Design",
      description:
        "Beautiful, intuitive digital experiences designed to engage your audience and turn visitors into customers.",
      detail: "UX / UI Design / Responsive Design",
      icon: Monitor,
    },
    {
      number: "03",
      title: "Development",
      description:
        "We bring designs to life with clean, reliable, and high-performing websites built for the modern web.",
      detail: "Frontend / Development / Optimization",
      icon: Code2,
    },
    {
      number: "04",
      title: "Digital Strategy",
      description:
        "We help businesses find clarity, identify opportunities, and build a smarter path toward digital growth.",
      detail: "Research / Strategy / Consulting",
      icon: Lightbulb,
    },
  ];

  return (
    <section
      id="services"
      className="bg-neutral-950 text-white px-6 lg:px-12 py-24 lg:py-36"
    >
      <div className="max-w-350 mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                What we do
              </p>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.07em] font-semibold">
              Ideas into
              <br />
              <span className="text-lime-400">impact.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base md:text-lg leading-relaxed text-neutral-400">
            We bring together creativity, technology, and strategy to help
            ambitious brands move forward.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="border-t border-white/20">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 py-9 md:py-12 border-b border-white/20 items-start hover:bg-white/3 transition-colors duration-300"
              >
                {/* NUMBER */}
                <div className="md:col-span-1">
                  <span className="text-sm font-medium text-neutral-500">
                    {service.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-4">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-lime-400 shrink-0"
                    />

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight group-hover:text-lime-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-5">
                  <p className="text-sm md:text-base leading-relaxed text-neutral-400 max-w-lg">
                    {service.description}
                  </p>

                  <p className="mt-4 text-xs uppercase tracking-wider text-neutral-600">
                    {service.detail}
                  </p>
                </div>

                {/* ARROW */}
                <div className="md:col-span-2 flex md:justify-end">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-neutral-950 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
            Thoughtful work. Meaningful results.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-medium text-lime-400 hover:text-white transition-colors"
          >
            Have a project in mind?
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
