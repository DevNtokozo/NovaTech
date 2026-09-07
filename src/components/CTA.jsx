import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600">
        <div className="relative px-8 py-16 text-center sm:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
              Ready to build?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let's turn your next idea into reality.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              Tell us what you're building and let's explore how
              technology can move your business forward.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}