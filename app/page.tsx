// pages/index.tsx or app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative px-6 pt-32 bg-background min-h-screen dark:bg-black">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Secure & Anonymous Reporting
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Report Any Crime.
            <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Protect Your Identity.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Make your community safer without compromising your safety. Our
            advanced encryption ensures your identity remains completely
            anonymous.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/submit-report">
              <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-black dark:text-white transition-all hover:bg-sky-400">
                Make Anonymous Report
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <Link href="/how-it-works">
              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-foreground ring-1 ring-inset ring-border transition-all hover:bg-white/10">
                About <b>Prohora</b>
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-40 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Military-Grade Encryption",
              description:
                "Your identity is protected with state-of-the-art encryption protocols",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
            },
            {
              title: "Real-time Processing",
              description:
                "Instant verification and secure routing of all reports",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Secure Communication",
              description: "Two-way anonymous channel with law enforcement",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 transition-all hover:bg-stone-1000/60 dark:hover:bg-gray-1000/60  bg-stone-50 shadow-lg dark:bg-zinc-900"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted  text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-40 rounded-2xl bg-card p-8  bg-stone-50 shadow-lg dark:bg-zinc-900 hover:bg-stone-1000/60 dark:hover:bg-gray-1000/60">
          <div className="grid gap-y-8 sm:grid-cols-3  bg-stone-50 dark:bg-zinc-900 hover:bg-stone-1000/60 dark:hover:bg-gray-1000/60">
            {[
              { value: "100K+", label: "Reports Filed" },
              { value: "100%", label: "Anonymity Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center  bg-stone-50 dark:bg-zinc-900"
              >
                <div className="text-3xl font-bold text-foreground  bg-stone-50 dark:bg-zinc-900">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted  bg-stone-50 dark:bg-zinc-900  text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-20 mb-10 flex justify-center ">
          <div className="mb-10 mt-10 inline-flex items-center gap-3 rounded-full bg-card px-5 py-2 text-sm text-muted  bg-stone-200 dark:bg-zinc-900  text-zinc-600 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 " />
            Trusted by Law Enforcement Nationwide
          </div>
        </div>
      </div>
    </main>
  );
}
