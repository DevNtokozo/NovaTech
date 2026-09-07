const testimonials = [
  {
    quote:
      "NovaTech helped us transform a complex idea into a simple and scalable digital product.",
    name: "Sarah M.",
    role: "Product Manager",
  },
  {
    quote:
      "The team understood our requirements quickly and delivered a solution that exceeded our expectations.",
    name: "David K.",
    role: "Business Director",
  },
  {
    quote:
      "Professional, responsive, and technically strong. They became a valuable extension of our team.",
    name: "Michael R.",
    role: "Technology Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Client perspective
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Trusted by teams building what's next.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-white/3 p-7"
            >
              <div className="text-3xl text-blue-500">
                “
              </div>

              <p className="mt-3 leading-7 text-slate-300">
                {testimonial.quote}
              </p>

              <div className="mt-7">
                <p className="font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}