'use server';

import { getLocale } from 'next-intl/server';

export const getCourse = async (courseId: string) => {
  const locale = await getLocale();
  const _accessToken = 'dump-access-token';

  return {
    id: courseId,
    title: locale === 'ar' ? 'بدء SEO كمنزلك' : 'Starting SEO as your Home Based Business',
    video: '/videos/course-1.mp4',
  };
};
export const getMaterials = async (courseId: string) => {
  const locale = await getLocale();
  const _accessToken = 'dump-access-token';

  return {
    id: courseId,
    materials: {
      duration: locale === 'ar' ? '3 أسابيع' : '3 weeks',
      lessons: 8,
      students: 65,
      language: locale === 'ar' ? 'الإنجليزية' : 'English',
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

export const getQuestions = async (_topicId: string) => {
  const locale = await getLocale();

  return [
    {
      id: '1',
      question: locale === 'en' ? 'What is SEO?' : 'ما هو SEO؟',
      choices: [
        {
          id: 'a',
          text: locale === 'en' ? 'Search Engine Optimization' : 'تحسين محركات البحث',
        },
        {
          id: 'b',
          text: locale === 'en' ? 'Social Engine Operation' : 'تشغيل المحرك الاجتماعي',
        },
        {
          id: 'c',
          text: locale === 'en' ? 'System Engine Output' : 'مخرجات محرك النظام',
        },
        {
          id: 'd',
          text: locale === 'en' ? 'Software Engineering Operations' : 'عمليات هندسة البرمجيات',
        },
      ],
    },
    {
      id: '2',
      question:
        locale === 'en'
          ? 'Which is NOT a factor in SEO ranking?'
          : 'أي مما يلي ليس عاملاً في ترتيب SEO؟',
      choices: [
        {
          id: 'a',
          text: locale === 'en' ? 'Page loading speed' : 'سرعة تحميل الصفحة',
        },
        {
          id: 'b',
          text: locale === 'en' ? 'Website color scheme' : 'نظام ألوان الموقع',
        },
        {
          id: 'c',
          text: locale === 'en' ? 'Quality backlinks' : 'روابط خلفية عالية الجودة',
        },
        {
          id: 'd',
          text: locale === 'en' ? 'Mobile responsiveness' : 'التجاوب مع الأجهزة المحمولة',
        },
      ],
    },
    {
      id: '3',
      question: locale === 'en' ? 'What is a meta description?' : 'ما هو الوصف التعريفي؟',
      choices: [
        {
          id: 'a',
          text: locale === 'en' ? "A website's main heading" : 'العنوان الرئيسي للموقع',
        },
        {
          id: 'b',
          text: locale === 'en' ? 'A brief summary of page content' : 'ملخص موجز لمحتوى الصفحة',
        },
        {
          id: 'c',
          text: locale === 'en' ? "A website's domain name" : 'اسم نطاق الموقع',
        },
        {
          id: 'd',
          text: locale === 'en' ? 'An image description' : 'وصف الصورة',
        },
      ],
    },
    {
      id: '4',
      question: locale === 'en' ? 'What is keyword stuffing?' : 'ما هو حشو الكلمات المفتاحية؟',
      choices: [
        {
          id: 'a',
          text:
            locale === 'en' ? 'Using keywords naturally' : 'استخدام الكلمات المفتاحية بشكل طبيعي',
        },
        {
          id: 'b',
          text:
            locale === 'en'
              ? 'Overusing keywords unnaturally'
              : 'الإفراط في استخدام الكلمات المفتاحية بشكل غير طبيعي',
        },
        {
          id: 'c',
          text: locale === 'en' ? 'Not using any keywords' : 'عدم استخدام أي كلمات مفتاحية',
        },
        {
          id: 'd',
          text:
            locale === 'en' ? 'Using synonyms for keywords' : 'استخدام مرادفات للكلمات المفتاحية',
        },
      ],
    },
    {
      id: '5',
      question: locale === 'en' ? 'What is a backlink?' : 'ما هو الرابط الخلفي؟',
      choices: [
        {
          id: 'a',
          text: locale === 'en' ? 'A link to your homepage' : 'رابط لصفحتك الرئيسية',
        },
        {
          id: 'b',
          text: locale === 'en' ? 'A broken link' : 'رابط معطل',
        },
        {
          id: 'c',
          text:
            locale === 'en' ? 'A link from another website to yours' : 'رابط من موقع آخر إلى موقعك',
        },
        {
          id: 'd',
          text: locale === 'en' ? 'A link to your sitemap' : 'رابط لخريطة موقعك',
        },
      ],
    },
  ];
};
