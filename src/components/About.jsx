import { Target, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Business-focused",
    text: "We connect technology with real business objectives to create measurable value.",
  },
  {
    icon: Users,
    title: "Human-centered",
    text: "We design digital experiences around the people who actually use them.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-driven",
    text: "We use modern technologies and creative thinking to solve complex problems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-white/5 bg-slate-900/50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About NovaTech
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology should make business simpler.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              We are a digital technology company focused on building
              reliable, scalable, and intuitive solutions. From product
              development to system integration, we help organizations
              turn ambitious ideas into practical digital experiences.
            </p>

            <p className="mt-5 leading-7 text-slate-500">
              Our approach combines engineering discipline, modern
              technology, and a strong understanding of user needs.
            </p>
          </div>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}