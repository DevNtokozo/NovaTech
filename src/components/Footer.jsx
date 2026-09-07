export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold">
            N
          </div>

          <span className="font-semibold">
            Nova<span className="text-blue-500">Tech</span>
          </span>
        </div>

        <p className="text-sm text-slate-600">
          © 2026 NovaTech Solutions. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-slate-500">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>

          <a href="#" className="transition hover:text-white">
            Terms
          </a>
        </div>

      </div>
    </footer>
  );
}