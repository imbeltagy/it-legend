import { Suspense } from 'react';
import { Locale } from '@/lib/types/i18n';
import { getTranslations } from 'next-intl/server';
import CourseDetailsView from '@/view/sections/course-details/view';
import CourseDetailsLoading from '@/view/sections/course-details/loading';

export default async function Layout({
  children,
  comments,
  topics,
  pdf,
  exam,
  leaderboard,
  ask,
  params,
}: {
  params: Promise<{ courseId: string }>;
} & Record<
  'children' | 'leaderboard' | 'comments' | 'topics' | 'pdf' | 'exam' | 'ask',
  React.ReactNode
>) {
  const { courseId } = await params;

  return (
    <>
      <Suspense fallback={<CourseDetailsLoading />}>
        <CourseDetailsView
          courseId={courseId}
          materials={children}
          topics={topics}
          comments={comments}
        />
      </Suspense>

      {/* Dialogs */}
      {pdf}
      {exam}
      {leaderboard}
      {ask}
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MetaData' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
