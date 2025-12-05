'use client';

import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Overview',
    caption: 'The quick brown fox surveys your docs from above.',
  },
  {
    id: 2,
    title: 'Collaboration',
    caption: 'Lazy fox workflows keep teams in sync without extra effort.',
  },
  {
    id: 3,
    title: 'Performance',
    caption: 'Fast, focused docs so your fox never needs to hurry.',
  },
];

const featureGrid = [
  {
    title: 'Lazy fox foundations',
    description: 'Compose every page on a solid Fumadocs-powered foundation.',
  },
  {
    title: 'Quick brown previews',
    description: 'Preview changes instantly so the fox never waits around.',
  },
  {
    title: 'Fox-friendly navigation',
    description: 'Guide readers through dense docs with gentle, clear paths.',
  },
  {
    title: 'Typist-friendly MDX',
    description: 'Write once in MDX and let the lazy fox present it.',
  },
  {
    title: 'Team-tailored layouts',
    description: 'Shape your homepage to match how your crew really works.',
  },
  {
    title: 'Batteries-included search',
    description: 'Help every curious fox find the exact answer in seconds.',
  },
  {
    title: 'Always in dark mode',
    description: 'Let nocturnal foxes read comfortably long after sunset.',
  },
  {
    title: 'Ship-ready performance',
    description: 'Lean, optimized pages that stay fast as your docs grow.',
  },
  {
    title: 'Future-proof content',
    description: 'Evolve structure without rewriting every lazy fox story.',
  },
];

const faqs = [
  {
    question: 'What is the lazy fox homepage?',
    answer:
      'It is a Fumadocs-powered landing page that uses simple sections, a hero, and a slideshow to introduce your docs.',
  },
  {
    question: 'Can I swap the placeholders for real images?',
    answer:
      'Yes. Replace the image blocks with your own screenshots or components while keeping the same layout and spacing.',
  },
  {
    question: 'Where does Fumadocs fit in?',
    answer:
      'Fumadocs provides the layout, MDX pipeline, and design system so you can focus on telling your lazy fox story.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pt-0 pb-10 md:pb-16">
      {/* Hero */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-10 -mt-4 overflow-hidden rounded-b-3xl border-b bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-100/10 dark:via-slate-100/5 dark:to-slate-100/10">
        <div className="mx-auto flex min-h-[260px] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center md:py-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
            Fusion Lazy Fox Docs
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-200/90">
            Quick brown fox powers delightful docs for every curious team.
          </p>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-200/80">
            The quick brown fox keeps jumping over lazy documentation so you do
            not have to. Build a calm, focused homepage that makes every
            section feel intentional, friendly, and ready for your users.
          </p>

          <div className="mt-6">
            <Link
              href="#request-testflight"
              className="inline-flex items-center rounded-full bg-slate-50 px-6 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-200"
            >
              Request TestFlight
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section
        aria-label="Lazy fox screenshots carousel"
        className="space-y-6 -mx-4 sm:-mx-6 lg:-mx-10"
      >
        <div className="relative w-full overflow-hidden">
          <div className="lazy-fox-carousel flex w-max gap-4 py-3">
            {[...slides, ...slides].map((item, index) => (
              <div key={`${item.id}-${index}`} className="shrink-0">
                <div className="aspect-[16/9] w-96 md:w-[30rem] rounded-2xl border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-100/10 dark:via-slate-100/5 dark:to-slate-100/10 shadow-sm flex items-center justify-center">
                  <div className="px-4 text-center text-slate-100/90 dark:text-slate-50">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] opacity-80">
                      Slide {item.id} · {item.title}
                    </p>
                    <p className="mt-2 text-xs md:text-sm max-w-xs mx-auto">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section
        id="request-testflight"
        className="rounded-2xl border bg-muted/40 px-6 py-8 md:px-10 md:py-10 space-y-4 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="space-y-3 max-w-xl mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold tracking-tight">
            Start testing with the lazy fox
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Give early readers a calm place to explore Fusion documentation,
            collect feedback, and refine your story before you fully launch.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-sm transition hover:opacity-90"
          >
            Request TestFlight Access
          </Link>
        </div>
      </section>

      {/* 3x3 Features Grid */}
      <section className="space-y-6">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">
            How the lazy fox helps
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Nine small, focused reasons your homepage feels better on
            Fumadocs with a lazy fox pacing the edges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featureGrid.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border bg-card/60 px-4 py-3 text-left space-y-2"
            >
              <h3 className="text-sm font-semibold tracking-tight leading-snug">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6 pb-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            A few quick answers before your fox curls up and reads.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border bg-card/60 text-left"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-semibold tracking-tight list-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] text-muted-foreground transition group-open:rotate-90">
                  →
                </span>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-xs md:text-sm text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
