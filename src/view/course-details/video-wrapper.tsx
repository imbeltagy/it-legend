'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/style';
import { Course } from '@/lib/types/courses';
import useBoolean from '@/lib/hooks/useBoolean';

import Materials from './materials';
import Video from '../components/video';
import { Iconify } from '../components/iconify';

interface Props {
  course: Course;
  topicsComponent: React.ReactNode;
  commentsComponent: React.ReactNode;
}

export default function VideoWrapper({ course, topicsComponent, commentsComponent }: Props) {
  const isWide = useBoolean();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
      }}
      className="gap-x-6 gap-y-12"
    >
      <div className={cn('col-span-2', !isWide.value && 'lg:col-span-1')}>
        <Video videoUrl={course.video} isWide={isWide.value} onWideToggle={isWide.toggle} />
        <ExternalLinks links={course.externalLinks} />
      </div>
      <div
        className={cn(
          'max-lg:order-2 max-lg:col-span-2 lg:row-span-2',
          isWide.value ? 'lg:order-1' : 'lg:row-span-3'
        )}
      >
        {topicsComponent}
      </div>
      <div className="max-lg:col-span-2">
        <Materials course={course} />
      </div>
      <div className="order-3 max-lg:col-span-2">{commentsComponent}</div>
    </div>
  );
}

function ExternalLinks({ links }: { links: Course['externalLinks'] }) {
  return (
    <div className="mt-10 flex items-center gap-4 max-md:justify-center">
      {Object.keys(links).map((key) => (
        <Link key={key} href={links[key as 'facebook']} className="icon-button" target="_blank">
          {icons[key as 'facebook']}
        </Link>
      ))}
    </div>
  );
}

const icons = {
  facebook: <Iconify icon="mdi:facebook" />,
  twitter: <Iconify icon="mdi:twitter" />,
  linkedin: <Iconify icon="mdi:linkedin" />,
  youtube: <Iconify icon="mdi:youtube" />,
};
