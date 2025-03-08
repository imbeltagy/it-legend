'use client';

import { cn } from '@/lib/utils/style';
import { Course } from '@/lib/types/courses';
import useBoolean from '@/lib/hooks/useBoolean';
import { useQuery } from '@/lib/hooks/useQuery';
import { memo, useRef, useMemo, useCallback } from 'react';

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
          'container mx-auto max-lg:order-2 max-lg:col-span-2 lg:row-span-5',
          isWide.value ? 'lg:order-1' : 'lg:mt-4'
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

const NavigationIcons = memo(function ({
  videoContainerRef,
}: {
  videoContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { set: setQuery } = useQuery(['leaderboard', 'ask']);

  const scrollToElement = useCallback(
    (elementId: string) => {
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
    },
    [videoContainerRef]
  );

  const navigationButtons = useMemo(
    () => [
      { id: 'topics', icon: 'mdi:book-open-variant' },
      { id: 'comments', icon: 'mdi:comment-multiple' },
      { query: 'leaderboard', icon: 'mdi:trophy' },
      { query: 'ask', icon: 'mdi:help-circle' },
    ],
    []
  );

  return (
    <div className="mt-4 flex items-center gap-4 max-lg:justify-center lg:mt-10">
      {navigationButtons.map((button) => (
        <button
          key={button.id || button.query}
          className="icon-button cursor-pointer"
          onClick={() =>
            button.id && !button.query
              ? scrollToElement(button.id)
              : setQuery({ [button.query as 'leaderboard' | 'ask']: true })
          }
        >
          <Iconify icon={button.icon} />
        </button>
      ))}
    </div>
  );
});
