'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
        <div className="mx-auto flex min-h-[640px] md:min-h-[760px] max-w-5xl flex-col items-center justify-end px-6 pt-16 pb-10 text-center md:pt-20 md:pb-14">
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
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-slate-100"
            >
              <span
                aria-hidden="true"
                className="text-lg leading-none text-black"
              >
                
              </span>
              <span>Request Beta Access</span>
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
                <div className="aspect-[16/9] w-[26rem] md:w-[38rem] rounded-2xl border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-100/10 dark:via-slate-100/5 dark:to-slate-100/10 shadow-sm flex items-center justify-center">
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
        className="px-6 py-10 md:py-12 text-center"
      >
        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">
            Start testing with the lazy fox
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Give early readers a calm place to explore Fusion documentation,
            collect feedback, and refine your story before you fully launch.
          </p>
          <div className="pt-2">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-slate-100"
            >
              <span
                aria-hidden="true"
                className="text-lg leading-none text-black"
              >
                
              </span>
              <span>Request Beta Access</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3x3 Features Grid */}
      <section className="space-y-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featureGrid.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-card/60 px-4 py-3 text-center space-y-2"
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
      <section className="space-y-6 pt-8 md:pt-10 pb-4">
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
              className="group rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/50 text-left"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-semibold tracking-tight list-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronRight className="ml-2 h-4 w-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 group-open:rotate-90" />
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
