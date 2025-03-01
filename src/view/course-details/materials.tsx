import { useMemo, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { Course } from '@/lib/types/courses';

import { Iconify } from '../components/iconify';

export default function Materials({ course }: { course: Course }) {
  const t = useTranslations('CourseDetails');

  const fields = useMemo(() => {
    let students = '';
    switch (course.materials.students) {
      case 1:
        students = t('student');
        break;
      case 2:
        students = t('2_students');
        break;
      default:
        students = t('students', { count: course.materials.students });
    }

    return [
      {
        label: 'duration',
        value: course.materials.duration,
        icon: <Iconify icon="mdi:clock" />,
      },
      {
        label: 'lessons',
        value: course.materials.lessons,
        icon: <Iconify icon="mdi:book" />,
      },
      {
        label: 'enrolled',
        value: students,
        icon: <Iconify icon="mdi:users" />,
      },
      {
        label: 'language',
        value: course.materials.language,
        icon: <Iconify icon="mdi:language" />,
      },
    ];
  }, [course, t]);

  const renderColumn = (
    <div>
      {fields.map((field, i) => (
        <Fragment key={field.label}>
          {i > 0 && <div className="bg-divider h-px w-full" />}

          <div className="flex items-center gap-2 py-4 text-lg">
            <span className="text-2xl">{field.icon}</span>
            <span className="flex-1 font-medium">{t(field.label)}:</span>
            <span className="">{field.value}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full rounded-lg max-md:p-8 max-md:shadow-[-30px_-31px_106px_-94px_rgba(0,0,0,0.5)]">
      <h2 className="text-xl font-bold tracking-wide md:text-3xl">{t('materials')}</h2>

      <div className="mt-5 grid rounded-lg md:mt-8 md:grid-cols-2 md:gap-20 md:px-10 md:py-8 md:shadow-[0px_0px_177px_-60px_rgba(0,0,0,0.44)]">
        {renderColumn}
        <div className="hidden md:block">{renderColumn}</div>
      </div>
    </div>
  );
}
