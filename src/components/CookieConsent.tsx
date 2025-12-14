'use client';

import { useState, useEffect, useCallback } from 'react';

const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000; // ~6 months in milliseconds

// Global function to open cookie settings from anywhere
let openCookieSettings: (() => void) | null = null;

export function triggerCookieSettings() {
    if (openCookieSettings) {
        openCookieSettings();
    }
}

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    const openBanner = useCallback(() => {
        setShowBanner(true);
    }, []);

    useEffect(() => {
        // Register the global function
        openCookieSettings = openBanner;

        return () => {
            openCookieSettings = null;
        };
    }, [openBanner]);

    useEffect(() => {
        // Check if user has already made a choice and if it's still valid
        const consentData = localStorage.getItem('fusion-cookie-consent');

        if (consentData) {
            try {
                const { timestamp } = JSON.parse(consentData);
                const isExpired = Date.now() - timestamp > SIX_MONTHS_MS;

                if (!isExpired) {
                    return; // Consent is still valid, don't show banner
                }
            } catch {
                // Invalid data, show banner
            }
        }

        // Show banner after small delay
        const timer = setTimeout(() => setShowBanner(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        const consentData = JSON.stringify({ choice: 'accepted', timestamp: Date.now() });
        localStorage.setItem('fusion-cookie-consent', consentData);
        setShowBanner(false);
    };

    const handleDecline = () => {
        const consentData = JSON.stringify({ choice: 'declined', timestamp: Date.now() });
        localStorage.setItem('fusion-cookie-consent', consentData);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-700/50 bg-neutral-900/95 backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-6">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-white mb-1">Cookie Notice</h3>
                        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                            We use essential cookies to ensure the website functions properly. We do not use tracking or analytics cookies.
                            By continuing to use this site, you agree to our{' '}
                            <a
                                href="https://github.com/qooode/fusion-app-privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline underline-offset-2 hover:text-neutral-300 transition-colors"
                            >
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            onClick={handleDecline}
                            className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800"
                        >
                            Decline
                        </button>
                        <button
                            onClick={handleAccept}
                            className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-xl hover:bg-neutral-200 transition-colors shadow-sm"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
