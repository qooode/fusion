'use client';

import { triggerCookieSettings } from './CookieConsent';

export default function CookieSettingsButton() {
    return (
        <button
            onClick={triggerCookieSettings}
            className="hover:underline text-inherit"
        >
            Cookie Settings
        </button>
    );
}
