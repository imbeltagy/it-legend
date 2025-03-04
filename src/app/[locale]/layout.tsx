import { routing } from '@/i18n/routing';
import { Cairo } from 'next/font/google';
import { Locale } from '@/lib/types/i18n';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import './globals.css';

import { localeSettings } from '@/lib/config/i18n';

const cairo = Cairo({
  variable: '--cairo',
  subsets: ['latin'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={localeSettings[locale].dir}>
      <body
        className={`${cairo.variable} ${cairo.className} bg-default overflow-x-hidden antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="bg-default">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
