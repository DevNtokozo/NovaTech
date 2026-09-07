import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Fast, responsive web applications built with modern development technologies.",
  },
  {
    icon: Smartphone,
    title: "UI & UX Design",
    text: "Clean and intuitive interfaces designed to create better digital experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Flexible infrastructure and cloud-based solutions designed for growth.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    text: "Reliable data systems that help organizations manage and understand information.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Testing",
    text: "Functional and automated testing to improve reliability and software quality.",
  },
  {
    icon: Layers,
    title: "System Integration",
    text: "Connect applications, APIs, databases, and services into cohesive systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Solutions built for the digital age.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            From strategy to implementation, we provide technology
            services designed around your goals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {service.text}
                </p>

                <div className="mt-6 text-sm font-medium text-blue-400">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}