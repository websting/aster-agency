
import {
  Search,
  Compass,
  PenTool,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We get to know your business, understand your goals, and uncover the opportunities that will move your brand forward.",
      detail: "Research / Discovery / Direction",
      icon: Search,
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "We develop a clear creative direction and a thoughtful plan that connects your vision with the right audience.",
      detail: "Planning / Positioning / Strategy",
      icon: Compass,
    },
    {
      number: "03",
      title: "Design",
      description:
        "We turn ideas into distinctive visual experiences, carefully refining every detail along the way.",
      detail: "Concept / Design / Refinement",
      icon: PenTool,
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We bring everything together, launch with confidence, and make sure your digital experience is ready to perform.",
      detail: "Development / Launch / Support",
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-[#f8f8f5] px-6 lg:px-12 py-24 lg:py-36">
      <div className="max-w-350 mx-auto">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-500"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                How we work
              </p>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.07em] font-semibold text-neutral-950">
              From idea
              <br />
              to <span className="text-lime-500">impact.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-end">
            <p className="max-w-md text-base md:text-lg leading-relaxed text-neutral-500">
              Great work doesn't happen by accident. Our process brings
              clarity, creativity, and collaboration together at every step.
            </p>
          </div>

        </div>

        {/* PROCESS STEPS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-neutral-300">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group relative py-10 lg:py-12 pr-6 ${
                  index !== 3
                    ? "lg:border-r border-neutral-300 lg:pr-8"
                    : ""
                } ${
                  index !== 0
                    ? "lg:pl-8"
                    : ""
                } border-b lg:border-b-0 border-neutral-300`}
              >
                {/* NUMBER AND ICON */}
                <div className="flex items-center justify-between mb-12">
                  <span className="text-sm font-medium text-neutral-400">
                    / {step.number}
                  </span>

                  <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:bg-lime-400 group-hover:border-lime-400 transition-all duration-300">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950 mb-5 group-hover:text-lime-600 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-500 mb-8 max-w-sm">
                  {step.description}
                </p>

                {/* DETAIL */}
                <div className="pt-5 border-t border-neutral-200">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                    {step.detail}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
            Clear thinking. Creative execution.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-neutral-950"
          >
            Let's create something
            <span className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center group-hover:bg-neutral-950 group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={18} />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Process;
