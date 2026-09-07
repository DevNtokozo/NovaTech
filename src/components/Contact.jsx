import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">

        {/* Contact information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's start a conversation.
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-slate-400">
            Have a project, idea, or challenge you'd like to discuss?
            Send us a message and our team will get back to you.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>
                <p>hello@novatech.example</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Phone
                </p>
                <p>+27 10 000 0000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>
                <p>South Africa</p>
              </div>
            </div>

          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl border border-white/10 bg-white/3 p-7 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-slate-400">
              Company
            </label>

            <input
              type="text"
              placeholder="Company name"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-slate-400">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold transition hover:bg-blue-500"
          >
            Send Message
          </button>

          <p className="mt-4 text-center text-xs text-slate-600">
            Demo contact form — no backend required.
          </p>
        </form>

      </div>
    </section>
  );
}