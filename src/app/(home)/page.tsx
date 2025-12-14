'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import CookieSettingsButton from '@/components/CookieSettingsButton';

const slides = [
  {
    id: 1,
    title: 'Overview',
    caption: 'The quick brown fox surveys your docs from above.',
    image: '/1st image slideshow.jpg',
  },
  {
    id: 2,
    title: 'Collaboration',
    caption: 'Lazy fox workflows keep teams in sync without extra effort.',
    image: '/2nd image slideshow.jpg',
  },
  {
    id: 3,
    title: 'Performance',
    caption: 'Fast, focused docs so your fox never needs to hurry.',
    image: '/3rd image slideshow.jpg.jpg',
  },
];

const featureGrid = [
  {
    title: 'Unified Experience',
    description: 'One interface for everything. Fusion brings your personal content collections into a beautifully designed home screen. Add what matters, hide what doesn\'t.',
  },
  {
    title: 'Cross Device Sync',
    description: 'Pick up where you left off. Your layout, preferences, and bookmarks seamlessly sync across all your Apple devices via iCloud. Configure once, access everywhere.',
  },
  {
    title: 'Customizable Widgets',
    description: 'Design your perfect dashboard. Add, remove, and rearrange content rows with our intuitive editor. Drag, drop, and make it yours in seconds.',
  },
  {
    title: 'Powerful List Builder',
    description: 'Curate with precision. Create smart collections filtered by genre, cast, release year, ratings, and more. Find exactly what you\'re looking for, instantly.',
  },
  {
    title: 'Built In Player',
    description: 'Enjoy your media your way. The native player supports subtitles, resume playback, and works beautifully across all platforms with external app handoff when you prefer.',
  },
  {
    title: 'Native Experience',
    description: 'Native, not ported. Built with SwiftUI for iOS, tvOS, and macOS. Feels right at home on every device you own.',
  },
  {
    title: 'Trakt Integration',
    description: 'Keep your collections in sync. Connect Trakt to manage your personal watchlist, mark favorites, and maintain your browsing history across platforms.',
  },
  {
    title: 'Privacy Focused',
    description: 'Your data stays on your devices. Fusion syncs via iCloud and processes everything locally. No user accounts required, no analytics, no data collection by us.',
  },
  {
    title: 'Extensible Architecture',
    description: 'Your addons, your choice. Add third party extensions for additional catalogs, subtitles, and metadata. Manage everything from one clean interface.',
  },
];

const faqs = [
  {
    question: 'What is Fusion?',
    answer:
      'Fusion is a content manager and browser for your Apple devices. It provides a unified interface to discover, organize, and browse media information from your configured sources.',
  },
  {
    question: 'Does Fusion provide content?',
    answer:
      'No. Fusion is a media organizer. It does not provide, host, or distribute any content. Users connect their own addons and manage their personal collections.',
  },
  {
    question: 'What platforms does Fusion support?',
    answer:
      'Fusion runs natively on iPhone, iPad, Mac, and Apple TV. All platforms share the same features and sync seamlessly via iCloud.',
  },
  {
    question: 'What are Addons?',
    answer:
      'Addons (also called extensions or connectors) are manifest based components capable of providing catalogs, metadata, subtitles, and resource URLs. Fusion functions only as a client for user installed addons. You are solely responsible for ensuring that any addons you install comply with applicable laws and terms of service.',
  },
  {
    question: 'How does iCloud sync work?',
    answer:
      'Fusion uses iCloud Key Value Storage to sync your layout, preferences, and collection data across devices signed into the same Apple ID. No separate account needed.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Fusion uses TMDB and other public APIs for metadata such as posters and descriptions. We do not collect, store, or track any personal user data. All your preferences and collections stay on your devices via iCloud.',
  },
  {
    question: 'Can I use external apps?',
    answer:
      'Absolutely. Fusion supports handoff to your preferred media applications. Launch content in Infuse, VLC, or any compatible app directly from the interface.',
  },
];

export default function HomePage() {
  return (
    <div className="relative flex flex-col gap-16 pt-0 pb-10 md:pb-16">
      {/* Bowl-shape ambient glow - spreads outward toward edges going up */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[600px]"
        style={{
          background: 'linear-gradient(to top, rgba(100, 100, 100, 0.35) 0%, rgba(100, 100, 100, 0.1) 50%, transparent 100%)',
        }}
      />
      {/* Left side - angles outward / toward left edge */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[1000px]"
        style={{
          background: 'linear-gradient(to top right, rgba(100, 100, 100, 0.25) 0%, rgba(100, 100, 100, 0.08) 25%, transparent 50%)',
        }}
      />
      {/* Right side - angles outward \ toward right edge */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-full h-[1000px]"
        style={{
          background: 'linear-gradient(to top left, rgba(100, 100, 100, 0.25) 0%, rgba(100, 100, 100, 0.08) 25%, transparent 50%)',
        }}
      />

      {/* Hero */}
      <section className="relative -mt-4 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/fusion bg primary.jpg"
          alt="Fusion hero background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay for text readability - fades to page bg color */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#121212]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[640px] md:min-h-[760px] max-w-5xl flex-col items-center justify-end px-6 pt-16 pb-10 text-center md:pt-20 md:pb-14">
          {/* Fusion Logo Above Title */}
          <div className="mb-6 w-[80px] sm:w-[100px] md:w-[120px]">
            <Image
              src="/FUSN_dark-iOS.png"
              alt="Fusion logo"
              width={120}
              height={120}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
            Fusion
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-200/90 max-w-2xl">
            The elegant content manager for your Apple devices. Discover, organize, and browse your media collection across iPhone, iPad, Mac, and Apple TV.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://testflight.fusionapp.dev/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-slate-100"
            >
              <span>Request Beta Access</span>
            </a>
            <a
              href="https://discord.gg/fusionapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord"
              title="Join our Discord"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-500/50 transition hover:bg-neutral-700"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section
        aria-label="Lazy fox screenshots carousel"
        className="space-y-6"
      >
        <div className="relative w-full overflow-hidden">
          <div className="lazy-fox-carousel flex w-max gap-4 py-3">
            {[...slides, ...slides].map((item, index) => (
              <div key={`${item.id}-${index}`} className="shrink-0">
                <div className="relative aspect-[16/9] w-[20rem] md:w-[28rem] rounded-2xl border overflow-hidden shadow-sm">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-100/10 dark:via-slate-100/5 dark:to-slate-100/10 flex items-center justify-center">
                      <div className="px-4 text-center text-slate-100/90 dark:text-slate-50">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] opacity-80">
                          Slide {item.id} · {item.title}
                        </p>
                        <p className="mt-2 text-xs md:text-sm max-w-xs mx-auto">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section id="request-testflight" className="py-10 md:py-12">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
          <div className="space-y-4 max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Join the Beta
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Be among the first to experience Fusion. Request early access and help shape the future of content management on Apple devices.
            </p>
            <div className="pt-2">
              <a
                href="https://testflight.fusionapp.dev/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-slate-100"
              >
                <span>Request Beta Access</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3x3 Features Grid */}
      <section className="space-y-6">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6 pt-8 md:pt-10 pb-4">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="mt-4 space-y-4 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-border pt-6 pb-6">
        <div className="mx-auto flex w-full flex-col gap-4 px-4 text-xs text-muted-foreground sm:px-6 lg:px-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-foreground">
              Fusion
            </div>
            <p className="max-w-xs">
              Discover. Organize. Browse.
              <br />
              Across every Apple device.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/qooode/fusion-app-terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Terms of Use
            </a>
            <a href="https://github.com/qooode/fusion-app-privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Privacy Policy
            </a>
            <CookieSettingsButton />
            <details className="relative group" id="trademark-details">
              <summary className="cursor-pointer hover:underline list-none">
                Trademarks
              </summary>
              {/* Mobile: fixed bottom sheet, Desktop: floating popup */}
              <div className="fixed md:absolute inset-x-4 bottom-4 md:inset-x-auto md:bottom-full md:right-0 md:mb-2 md:w-96 p-4 pt-8 rounded-xl bg-neutral-900 border border-neutral-700/50 shadow-xl text-[11px] text-muted-foreground leading-relaxed z-50">
                <button
                  onClick={() => {
                    const details = document.getElementById('trademark-details') as HTMLDetailsElement;
                    if (details) details.open = false;
                  }}
                  className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
                Apple, iPhone, iPad, Mac, Apple TV, macOS, iOS, tvOS, iCloud, SwiftUI, and TestFlight are trademarks of Apple Inc., registered in the U.S. and other countries. All other trademarks, service marks, product names, company names, logos, and brand names mentioned (including but not limited to Trakt, TMDB, Infuse, VLC, Plex, Jellyfin, Emby, and any third-party APIs, media players, or services) are the property of their respective owners. Fusion is an independent project not affiliated with, endorsed by, or sponsored by Apple Inc. or any of the aforementioned companies or services.
              </div>
            </details>
          </div>
        </div>
      </footer>
    </div>
  );
}
