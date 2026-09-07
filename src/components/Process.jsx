const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your goals, users, challenges, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a clear solution architecture and user experience before development.",
  },
  {
    number: "03",
    title: "Build",
    text: "Our team develops, integrates, tests, and continuously improves the solution.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We deploy the solution and provide ongoing support as your business grows.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-slate-900/50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our process
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            From idea to impact.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A straightforward process designed to keep projects focused,
            transparent, and moving forward.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-5xl font-bold text-blue-500/30">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}