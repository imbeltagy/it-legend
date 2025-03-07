'use client';

import { useRef } from 'react';
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
  const videoContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
      }}
      className="relative gap-x-6 gap-y-12"
    >
      <div
        ref={videoContainerRef}
        className={cn(
          'bg-default shadow-default top-0 z-50 col-span-2 py-4 max-lg:sticky max-lg:shadow-[0_4px_10px_-1px]',
          !isWide.value && 'lg:col-span-1'
        )}
      >
        <div className="container mx-auto">
          <Video videoUrl={course.video} isWide={isWide.value} onWideToggle={isWide.toggle} />
          <NavigationIcons videoContainerRef={videoContainerRef} />
        </div>
      </div>

      <div
        className={cn(
          'container mx-auto max-lg:order-2 max-lg:col-span-2 lg:row-span-2',
          isWide.value ? 'lg:order-1' : 'lg:row-span-3 lg:mt-4'
        )}
      >
        {topicsComponent}
      </div>

      <div className="max-lg:col-span-2">
        <Materials course={course} />
      </div>

      <div className="order-3 container mx-auto max-lg:col-span-2">{commentsComponent}</div>
    </div>
  );
}

function NavigationIcons({
  videoContainerRef,
}: {
  videoContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element && videoContainerRef.current) {
      const elementPosition = element.getBoundingClientRect();
      const videoHeight = videoContainerRef.current.getBoundingClientRect().height;
      window.scrollTo({
        left: elementPosition.left,
        top: elementPosition.top + window.scrollY - videoHeight - 20,
        behavior: 'smooth',
      });
    }
  };

  const navigationButtons = [
    { id: 'topics', icon: 'mdi:book-open-variant' },
    { id: 'comments', icon: 'mdi:comment-multiple' },
    { id: 'leaderboard', icon: 'mdi:trophy' },
    { id: 'ask-question', icon: 'mdi:help-circle' },
  ];

  return (
    <div className="mt-4 flex items-center gap-4 max-lg:justify-center lg:mt-10">
      {navigationButtons.map((button) => (
        <button
          key={button.id}
          className="icon-button cursor-pointer"
          onClick={() => scrollToElement(button.id)}
        >
          <Iconify icon={button.icon} />
        </button>
      ))}
    </div>
  );
}
