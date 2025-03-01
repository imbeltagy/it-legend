import { Locale } from '@/lib/types/i18n';
import { getTranslations } from 'next-intl/server';
import { getCourse } from '@/lib/actions/course-actions';
import CourseDetailsView from '@/view/course-details/view';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  const course = await getCourse(courseId);

  return <CourseDetailsView course={course} />;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MetaData' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
