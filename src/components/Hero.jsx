
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#f8f8f5] px-6 lg:px-12 pb-20 lg:pb-28">
      <div className="max-w-350 mx-auto">

        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-12 lg:pt-20">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-500"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Independent Creative Agency
              </span>
            </div>

            <h1 className="text-[clamp(3.4rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.075em] font-semibold text-neutral-950">
              We make
              <br />
              brands
              <br />
              <span className="text-lime-500">matter.</span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-end gap-8">
              <p className="max-w-md text-base md:text-lg leading-relaxed text-neutral-500">
                We combine strategy, design, and technology to create
                meaningful digital experiences for ambitious businesses.
              </p>

              <a
                href="#work"
                className="group shrink-0 inline-flex items-center gap-3 text-sm font-semibold text-neutral-950"
              >
                Explore our work
                <span className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center group-hover:bg-neutral-950 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={19} />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE VISUAL */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-4xl min-h-105 lg:min-h-150 bg-neutral-200">
              <img
                src="/images/hero.webp"
                alt="Modern creative studio workspace"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-neutral-950/10"></div>

              {/* FLOATING LABEL */}
              <div className="absolute top-6 left-6 bg-[#f8f8f5] rounded-full px-5 py-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                <span className="text-xs font-semibold tracking-wide text-neutral-800">
                  Ideas into impact
                </span>
              </div>

              {/* BOTTOM CAPTION */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/85 backdrop-blur-md rounded-2xl p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-lime-400 mb-2">
                  Strategy. Creativity. Growth.
                </p>
                <p className="text-xl md:text-2xl font-medium tracking-tight">
                  Good ideas deserve great execution.
                </p>
              </div>
            </div>

            {/* DECORATIVE ELEMENT */}
            <div className="hidden lg:flex absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-lime-400 items-center justify-center">
              <ArrowDown size={28} className="text-neutral-950" />
            </div>
          </div>
        </div>

        {/* BOTTOM HERO LINE */}
        <div className="mt-20 pt-6 border-t border-neutral-300 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Design with purpose. Built for impact.
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Based everywhere. Working worldwide.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
