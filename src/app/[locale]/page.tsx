import { Locale } from '@/lib/types/i18n';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  redirect('/courses/1');
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MetaData' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
