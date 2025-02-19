export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background dark:bg-black selection:bg-sky-500/20 overflow-hidden">
      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-8 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
              Get in touch with us for any questions or inquiries.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-24 grid gap-12 sm:grid-cols-2">
            {/* Contact Person 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-stone-50 dark:bg-zinc-900 p-8 shadow-lg transition-all hover:bg-stone-1000/60 dark:hover:bg-gray-1000/60">
              <h2 className="text-xl font-bold text-foreground dark:text-white">
                Nabila Islam Sheona
              </h2>
              <p className="mt-2 text-muted text-zinc-600 dark:text-zinc-400">
                Email:{" "}
                <a
                  href="mailto:nabilaislam21@iut-dhaka.edu"
                  className="text-sky-500 hover:underline"
                >
                  nabilaislam21@iut-dhaka.edu
                </a>
              </p>
              <p className="mt-2 text-muted text-zinc-600 dark:text-zinc-400">
                GitHub:{" "}
                <a
                  href="https://github.com/nabila-sheona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:underline"
                >
                  nabila-sheona
                </a>
              </p>
            </div>

            {/* Contact Person 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-stone-50 dark:bg-zinc-900 p-8 shadow-lg transition-all hover:bg-stone-1000/60 dark:hover:bg-gray-1000/60">
              <h2 className="text-xl font-bold text-foreground dark:text-white">
                Nazifa Tasneem
              </h2>
              <p className="mt-2 text-muted text-zinc-600 dark:text-zinc-400">
                Email:{" "}
                <a
                  href="mailto:naziatasneem@iut-dhaka.edu"
                  className="text-sky-500 hover:underline"
                >
                  naziatasneem@iut-dhaka.edu
                </a>
              </p>
              <p className="mt-2 text-muted text-zinc-600 dark:text-zinc-400">
                GitHub:{" "}
                <a
                  href="https://github.com/nazifatasneem13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:underline"
                >
                  nazifatasneem13
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
