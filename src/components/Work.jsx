
import { ArrowUpRight } from "lucide-react";

const Work = () => {
  const projects = [
    {
      number: "01",
      title: "Forma Living",
      category: "Brand Identity · Web Design",
      year: "2026",
      image:
        "/images/project-forma.webp",
      size: "lg:col-span-7",
    },
    {
      number: "02",
      title: "Mono Architecture",
      category: "Digital Experience · Development",
      year: "2026",
      image:
        "/images/project-mono.webp",
      size: "lg:col-span-5 lg:mt-36",
    },
    {
      number: "03",
      title: "Sunday Objects",
      category: "Art Direction · E-commerce",
      year: "2026",
      image:
        "/images/project-sunday.webp",
      size: "lg:col-span-5",
    },
    {
      number: "04",
      title: "Atelier Collective",
      category: "Brand Strategy · Web Design",
      year: "2026",
      image:
        "/images/project-atelier.webp",
      size: "lg:col-span-7 lg:mt-36",
    },
  ];

  return (
    <section
      id="work"
      className="bg-[#f8f8f5] text-neutral-950 px-6 lg:px-12 py-24 lg:py-36"
    >
      <div className="max-w-350 mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-500"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                A selection of our work
              </p>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.07em] font-semibold">
              Selected
              <br />
              <span className="text-lime-500">work.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base md:text-lg leading-relaxed text-neutral-500">
            A collection of ideas brought to life through thoughtful strategy,
            distinctive design, and meaningful digital experiences.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16 lg:gap-y-4">

          {projects.map((project) => (
            <a
              href="#contact"
              key={project.number}
              className={`group block ${project.size}`}
            >
              {/* PROJECT IMAGE */}
              <div className="relative overflow-hidden rounded-3xl aspect-4/3 bg-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors duration-500"></div>

                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#f8f8f5] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="flex items-start justify-between gap-4 mt-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-neutral-400">
                      {project.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-lime-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <span className="text-xs text-neutral-400 pt-1">
                  {project.year}
                </span>
              </div>
            </a>
          ))}

        </div>

        {/* VIEW ALL WORK */}
        <div className="mt-24 pt-8 border-t border-neutral-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Good work speaks for itself.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-sm font-semibold"
          >
            Start a project
            <span className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:bg-lime-400 group-hover:text-neutral-950 transition-all duration-300">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Work;
