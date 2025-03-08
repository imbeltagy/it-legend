'use client';

import { useLocale } from 'next-intl';
import { Popover } from 'react-tiny-popover';
import { useState, useCallback } from 'react';
import { localeSettings } from '@/lib/config/i18n';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from 'next/dist/compiled/@vercel/og/satori';

import { List } from '../list';
import { Iconify } from '../iconify';

export function LocaleButton() {
  const locale = useLocale() as Locale;

  const pathname = usePathname();
  const router = useRouter();

  const changeLang = useCallback(
    (code: Locale) => {
      if (code !== locale) {
        router.push(pathname.replace(`/${locale}`, `/${code}`));
      }
    },
    [locale, pathname, router]
  );

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom', 'left', 'right']} // preferred positions by priority
      onClickOutside={() => setIsPopoverOpen(false)}
      padding={15}
      containerClassName="z-50"
      content={
        <List
          items={Object.values(localeSettings).map((item: any, i) => ({
            icon: <Iconify icon={item.icon} />,
            text: item.label,
            onClick: () => changeLang(Object.keys(localeSettings)[i] as unknown as Locale),
          }))}
        />
      }
    >
      <button className="icon-btn" onClick={() => setIsPopoverOpen((prev) => !prev)}>
        <Iconify icon={localeSettings[locale as keyof typeof localeSettings].icon} />
      </button>
    </Popover>
  );
}
