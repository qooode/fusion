'use client';

import Link from 'next/link';
import { useState } from 'react';

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="flex flex-col gap-16 py-10 md:py-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-8">
        <div className="w-full max-w-3xl">
          <div className="aspect-[16/9] w-full rounded-3xl border bg-gradient-to-br from-slate-900/80 via-slate-800 to-slate-900/80 dark:from-slate-100/10 dark:via-slate-100/5 dark:to-slate-100/10 shadow-sm flex items-center justify-center">
            <div className="mx-auto max-w-xs text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-200/80 dark:text-slate-100/80">
                Image placeholder
              </p>
              <p className="mt-2 text-xs text-slate-300/80 dark:text-slate-100/70">
                Drop a hero screenshot or illustration of your Fusion
                documentation here.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Fusion Lazy Fox Docs
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Quick brown fox powers delightful docs for every curious team.
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            The quick brown fox keeps jumping over lazy documentation so you
            do not have to. Build a calm, focused homepage that makes every
            section feel intentional, friendly, and ready for your users.
          </p>

          <div className="pt-2">
            <Link
              href="#request-testflight"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-sm transition hover:opacity-90"
            >
              Request TestFlight
            </Link>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section
        aria-label="Lazy fox screenshots slideshow"
        className="space-y-6"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            More lazy fox views
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Cycle through placeholders and swap in your own images.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-3xl rounded-2xl border bg-card shadow-sm overflow-hidden">
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-100/10 dark:via-slate-100/5 dark:to-slate-100/10 flex items-center justify-center">
              <div className="px-6 text-center text-slate-100/90 dark:text-slate-50">
                <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
                  Slide {currentSlide + 1} · {slide.title}
                </p>
                <p className="mt-3 text-sm md:text-base max-w-md mx-auto">
                  {slide.caption}
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-200/80">
                  Replace this block with a real screenshot of your Fusion
                  homepage, docs, or any lazy fox story you want to show.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-3xl items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevSlide}
              className="inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-xs font-medium text-foreground bg-background hover:bg-accent hover:text-accent-foreground transition"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition ${
                    index === currentSlide
                      ? 'w-8 bg-foreground'
                      : 'w-4 bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-xs font-medium text-foreground bg-background hover:bg-accent hover:text-accent-foreground transition"
            >
              Next
            </button>
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
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            How the lazy fox helps
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Nine small, focused reasons your homepage feels better on
            Fumadocs with a lazy fox pacing the edges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featureGrid.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border bg-card/60 px-5 py-4 text-left space-y-2"
            >
              <h3 className="text-sm font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
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
            <div
              key={item.question}
              className="rounded-2xl border bg-card/60 px-5 py-4 text-left space-y-2"
            >
              <h3 className="text-sm font-semibold tracking-tight">
                {item.question}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
