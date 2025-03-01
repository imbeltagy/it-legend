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

export const getComments = async (_courseId: string) => {
  const _locale = await getLocale();
  const _accessToken = 'dump-access-token';

  return [
    {
      id: '1',
      avatar: 'https://i.pravatar.cc/150?img=4',
      name: 'Student Name Goes Here',
      date: '2024-01-15T12:00:00.000Z',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      avatar: 'https://i.pravatar.cc/150?img=2',
      name: 'Student Name Goes Here',
      date: '2024-01-15T12:00:00.000Z',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '3',
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Student Name Goes Here',
      date: '2024-01-15T12:00:00.000Z',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
};
