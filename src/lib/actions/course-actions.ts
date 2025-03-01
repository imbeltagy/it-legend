'use server';

import { getLocale } from 'next-intl/server';

export const getCourse = async (courseId: string) => {
  const locale = await getLocale();
  const _accessToken = 'dump-access-token';

  return {
    id: courseId,
    title: locale === 'ar' ? 'بدء SEO كمنزلك' : 'Starting SEO as your Home Based Business',
    materials: {
      duration: locale === 'ar' ? '3 أسابيع' : '3 weeks',
      lessons: 8,
      students: 65,
      language: locale === 'ar' ? 'الإنجليزية' : 'English',
    },
    video: '/videos/course-1.mp4',
    externalLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      youtube: '#',
    },
  };
};
