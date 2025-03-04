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

export const getTopics = async (_courseId: string) => {
  const locale = await getLocale();
  const _accessToken = 'dump-access-token';

  return {
    progress: 63,
    topics: [
      {
        id: '1',
        title: locale === 'en' ? 'Course Introduction' : 'مقدمة الدورة',
        description:
          locale === 'en' ? 'Introduction to the course about SEO' : 'مقدمة الدورة حول SEO',
        items: [
          {
            id: 'dump-topic-1',
            title: locale === 'en' ? 'Introduction' : 'مقدمة',
            type: 'VIDEO',
            status: 'COMPLETED',
          },
          {
            id: 'dump-topic-2',
            title: locale === 'en' ? 'Course Overview' : 'مقدمة الدورة',
            type: 'VIDEO',
            status: 'IN_PROGRESS',
          },
          {
            id: 'dump-topic-3',
            title: locale === 'en' ? 'Course Overview' : 'مقدمة الدورة',
            type: 'PDF',
            status: 'NOT_STARTED',
            duration: '10',
            questions: 0,
            pdfUrl: 'https://drive.google.com/file/d/10h6FqI70BRGLLm3gjTQt0VG7SwWo9X_v/preview',
          },
          {
            id: 'dump-topic-4',
            title:
              locale === 'en'
                ? 'Course Exercise / Reference Files'
                : 'تمارين الدورة / ملفات المرجعية',
            type: 'EXAM',
            status: 'NOT_STARTED',
            questions: 5,
          },
          {
            id: 'dump-topic-5',
            title: locale === 'en' ? 'Code Editor Installation' : 'تثبيت محرر التعليمات البرمجية',
            type: 'VIDEO',
            status: 'LOCKED',
          },
          {
            id: 'dump-topic-6',
            title: locale === 'en' ? 'Embedding PHP in HTML' : 'تثبيت PHP في HTML',
            type: 'VIDEO',
            status: 'LOCKED',
          },
        ],
      },
      {
        id: '2',
        title: locale === 'en' ? 'Course Introduction' : 'مقدمة الدورة',
        description:
          locale === 'en' ? 'Introduction to the course about SEO' : 'مقدمة الدورة حول SEO',
        items: [
          {
            id: 'dump-topic-1',
            title: locale === 'en' ? 'Introduction' : 'مقدمة',
            type: 'VIDEO',
            status: 'COMPLETED',
          },
          {
            id: 'dump-topic-2',
            title: locale === 'en' ? 'Course Overview' : 'مقدمة الدورة',
            type: 'VIDEO',
            status: 'IN_PROGRESS',
          },
          {
            id: 'dump-topic-3',
            title: locale === 'en' ? 'Course Overview' : 'مقدمة الدورة',
            type: 'PDF',
            status: 'NOT_STARTED',
            duration: '10',
            questions: 0,
            pdfUrl: 'https://drive.google.com/file/d/10h6FqI70BRGLLm3gjTQt0VG7SwWo9X_v/preview',
          },
          {
            id: 'dump-topic-4',
            title:
              locale === 'en'
                ? 'Course Exercise / Reference Files'
                : 'تمارين الدورة / ملفات المرجعية',
            type: 'EXAM',
            status: 'NOT_STARTED',
            questions: 5,
          },
          {
            id: 'dump-topic-5',
            title: locale === 'en' ? 'Code Editor Installation' : 'تثبيت محرر التعليمات البرمجية',
            type: 'VIDEO',
            status: 'LOCKED',
          },
          {
            id: 'dump-topic-6',
            title: locale === 'en' ? 'Embedding PHP in HTML' : 'تثبيت PHP في HTML',
            type: 'VIDEO',
            status: 'LOCKED',
          },
        ],
      },
      {
        id: '3',
        title: locale === 'en' ? 'Course Introduction' : 'مقدمة الدورة',
        description:
          locale === 'en' ? 'Introduction to the course about SEO' : 'مقدمة الدورة حول SEO',
        items: [
          {
            id: 'dump-topic-1',
            title: locale === 'en' ? 'Introduction' : 'مقدمة',
            type: 'VIDEO',
            status: 'COMPLETED',
          },
          {
            id: 'dump-topic-2',
            title: locale === 'en' ? 'Course Overview' : 'مقدمة الدورة',
            type: 'VIDEO',
            status: 'IN_PROGRESS',
          },
          {
            id: 'dump-topic-3',
            title: locale === 'en' ? 'Course Overview' : 'مقدمة الدورة',
            type: 'PDF',
            status: 'NOT_STARTED',
            duration: '10',
            questions: 0,
            pdfUrl: 'https://drive.google.com/file/d/10h6FqI70BRGLLm3gjTQt0VG7SwWo9X_v/preview',
          },
          {
            id: 'dump-topic-4',
            title:
              locale === 'en'
                ? 'Course Exercise / Reference Files'
                : 'تمارين الدورة / ملفات المرجعية',
            type: 'EXAM',
            status: 'NOT_STARTED',
            questions: 5,
          },
          {
            id: 'dump-topic-5',
            title: locale === 'en' ? 'Code Editor Installation' : 'تثبيت محرر التعليمات البرمجية',
            type: 'VIDEO',
            status: 'LOCKED',
          },
          {
            id: 'dump-topic-6',
            title: locale === 'en' ? 'Embedding PHP in HTML' : 'تثبيت PHP في HTML',
            type: 'VIDEO',
            status: 'LOCKED',
          },
        ],
      },
    ],
  };
};
