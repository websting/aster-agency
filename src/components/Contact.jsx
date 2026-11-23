
import { ArrowUpRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="bg-lime-400 px-6 lg:px-12 py-24 lg:py-36"
    >
      <div className="max-w-350 mx-auto">

        <div className="flex items-center gap-3 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-950"></span>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-700">
            Have a project in mind?
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">

          <div className="lg:col-span-9">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-[-0.08em] font-semibold text-neutral-950">
              Let's make
              <br />
              something
              <br />
              <span className="text-white">happen.</span>
            </h2>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-neutral-800 mb-8">
              Have an idea, a challenge, or a big ambition? We'd love to
              hear about it. Let's create something meaningful together.
            </p>

            <a
              href="mailto:hello@asterstudio.com"
              className="group flex items-center justify-between gap-4 bg-neutral-950 text-white rounded-full px-6 py-5 hover:bg-white hover:text-neutral-950 transition-all duration-300"
            >
              <span className="flex items-center gap-3 text-sm font-semibold">
                <Mail size={18} />
                Let's Talk
              </span>

              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>

            <p className="text-xs text-neutral-700 mt-5">
              hello@asterstudio.com
            </p>
          </div>

        </div>

        <div className="mt-20 pt-6 border-t border-neutral-950/20 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-800">
            Good things start with a conversation.
          </p>

          <p className="text-xs uppercase tracking-[0.15em] text-neutral-800">
            Available for select projects
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTA;
