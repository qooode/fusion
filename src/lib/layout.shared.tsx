import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    themeSwitch: {
      enabled: false,
    },
    nav: {
      title: (
        <>
          <Image
            src="/FUSN_dark-iOS.png"
            alt="Fusion logo"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span>Fusion</span>
        </>
      ),
    },
  };
}
