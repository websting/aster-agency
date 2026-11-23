
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f8f8f5] px-6 lg:px-12 py-24 lg:py-36"
    >
      <div className="max-w-350 mx-auto">

        {/* SECTION LABEL */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-500"></span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            A little about us
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT: HEADLINE */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.07em] font-semibold text-neutral-950">
              Creativity
              
              
              with a
              <br />
              <span className="text-lime-500">purpose.</span>
            </h2>
          </div>

          {/* RIGHT: DESCRIPTION */}
          <div className="lg:col-span-5 flex flex-col justify-end">

            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-neutral-800 mb-7">
              We're an independent creative studio helping ambitious brands
              turn big ideas into meaningful digital experiences.
            </p>

            <p className="text-base leading-relaxed text-neutral-500 mb-9">
              From the first spark of an idea to the final detail, we bring
              strategy, creativity, and technology together to build brands
              that stand out and connect with people.
            </p>

            <a
              href="#services"
              className="group inline-flex items-center gap-4 text-sm font-semibold text-neutral-950 w-fit"
            >
              Discover what we do

              <span className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-lime-400 group-hover:border-lime-400 transition-all duration-300">
                <ArrowUpRight size={18} />
              </span>
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-24 relative overflow-hidden rounded-4xl h-87.5 md:h-125 lg:h-150">
          <img
            src="/images/about.webp"
            alt="Creative studio workspace"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-neutral-950/10"></div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="inline-flex items-center gap-3 bg-[#f8f8f5] px-5 py-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                Independent by nature
              </span>
            </span>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="grid sm:grid-cols-3 gap-10 mt-16 pt-10 border-t border-neutral-300">

          <div>
            <p className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950">
              01<span className="text-lime-500">.</span>
            </p>
            <p className="text-sm text-neutral-500 mt-3">
              Think beyond the ordinary.
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950">
              02<span className="text-lime-500">.</span>
            </p>
            <p className="text-sm text-neutral-500 mt-3">
              Create with intention.
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950">
              03<span className="text-lime-500">.</span>
            </p>
            <p className="text-sm text-neutral-500 mt-3">
              Make every detail count.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
