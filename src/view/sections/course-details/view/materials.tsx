import { useMemo, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { Iconify } from '@/view/components/iconify';
import { Materials as IMaterials } from '@/lib/types/courses';

export default function Materials({ materials }: { materials: IMaterials }) {
  const t = useTranslations('CourseDetails.Materials');

  const fields = useMemo(() => {
    let students = '';
    switch (materials.students) {
      case 1:
        students = t('student');
        break;
      case 2:
        students = t('2_students');
        break;
      default:
        students = t('students', { count: materials.students });
    }

    return [
      {
        label: 'duration',
        value: materials.duration,
        icon: <Iconify icon="mdi:clock" />,
      },
      {
        label: 'lessons',
        value: materials.lessons,
        icon: <Iconify icon="mdi:book" />,
      },
      {
        label: 'enrolled',
        value: students,
        icon: <Iconify icon="mdi:users" />,
      },
      {
        label: 'language',
        value: materials.language,
        icon: <Iconify icon="mdi:language" />,
      },
    ];
  }, [materials, t]);

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
    <div className="container mx-auto w-full rounded-lg max-lg:p-8 max-lg:shadow-[-30px_-31px_106px_-94px_rgba(0,0,0,0.5)]">
      <h2 className="text-xl font-bold tracking-wide lg:text-3xl">{t('title')}</h2>

      <div className="mt-5 grid rounded-lg lg:mt-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-8 lg:shadow-[0px_0px_177px_-60px_rgba(0,0,0,0.44)]">
        {renderColumn}
        <div className="hidden lg:block">{renderColumn}</div>
      </div>
    </div>
  );
}
