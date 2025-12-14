import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fusion - Discover, organize, and browse',
  description: 'The elegant content manager for your Apple devices. Discover, organize, and browse your media collection across iPhone, iPad, Mac, and Apple TV.',
  keywords: ['Fusion', 'content manager', 'Apple', 'iOS', 'macOS', 'tvOS', 'media browser', 'streaming', 'Trakt'],
  authors: [{ name: 'Fusion' }],
  openGraph: {
    title: 'Fusion - Discover, organize, and browse',
    description: 'The elegant content manager for your Apple devices. Discover, organize, and browse your media collection across iPhone, iPad, Mac, and Apple TV.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Fusion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fusion - Discover, organize, and browse',
    description: 'The elegant content manager for your Apple devices. Discover, organize, and browse your media collection across iPhone, iPad, Mac, and Apple TV.',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            enabled: true,
            defaultTheme: 'dark',
            forcedTheme: 'dark',
            enableSystem: false,
            themes: ['dark'],
          }}
        >
          {children}
          <CookieConsent />
        </RootProvider>
      </body>
    </html>
  );
}
