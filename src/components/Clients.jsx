
const Clients = () => {
  const clients = [
    "NORTHSTAR",
    "vertex",
    "MONOLITH",
    "arc studio",
    "KINETIC",
  ];

  return (
    <section className="bg-[#f8f8f5] px-6 lg:px-12 pb-24">
      <div className="max-w-350 mx-auto border-t border-neutral-300 pt-10">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          {/* INTRODUCTION */}
          <div className="shrink-0">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">
              Trusted by ambitious brands
            </p>
            <p className="text-sm text-neutral-500 mt-2">
              Good company. Great collaborations.
            </p>
          </div>

          {/* CLIENT LOGOS */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-10 gap-y-6">
            {clients.map((client, index) => (
              <span
                key={client}
                className={`text-lg md:text-xl text-neutral-400 hover:text-neutral-950 transition-colors duration-300 ${
                  index === 1
                    ? "font-serif italic"
                    : index === 3
                    ? "font-light tracking-tight"
                    : "font-bold tracking-tight"
                }`}
              >
                {client}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
