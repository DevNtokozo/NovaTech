import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">

      {/* Background glow */}
      <div className="absolute left-1/2 top-10 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-2 lg:px-8 lg:pb-32">

        {/* Text */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={15} />
            Digital solutions for modern businesses
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Build smarter.
            <span className="block text-blue-500">
              Move faster.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            NovaTech Solutions helps businesses transform ideas into
            powerful digital products through modern technology,
            thoughtful design, and scalable engineering.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/5"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>✓ Reliable</span>
            <span>✓ Scalable</span>
            <span>✓ User-focused</span>
          </div>
        </div>

        {/* Dashboard visual */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-blue-600/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/4 p-4 shadow-2xl">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Business Growth
                  </p>

                  <p className="mt-2 text-4xl font-bold">
                    +42.8%
                  </p>
                </div>

                <div className="rounded-xl bg-blue-500/10 px-3 py-2 text-sm text-blue-400">
                  +12.4%
                </div>
              </div>

              {/* Graph */}
              <div className="mt-10 flex h-52 items-end gap-3">
                {[30, 42, 38, 55, 50, 65, 61, 78, 73, 92].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-blue-500/80 transition hover:bg-blue-400"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>

              <div className="mt-5 flex justify-between text-xs text-slate-600">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
                <span>NOW</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}