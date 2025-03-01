'use client';

import { cn } from '@/lib/utils/style';
import useBoolean from '@/lib/hooks/useBoolean';

import Video from '../components/video';

interface Props {
  videoUrl: string;
  topicsComponent: React.ReactNode;
  commentsComponent: React.ReactNode;
}

export default function VideoWrapper({ videoUrl, topicsComponent, commentsComponent }: Props) {
  const isWide = useBoolean();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
      }}
      className="gap-x-6 gap-y-4"
    >
      <div className={cn('col-span-2', !isWide.value && 'lg:col-span-1')}>
        <Video videoUrl={videoUrl} isWide={isWide.value} onWideToggle={isWide.toggle} />
      </div>
      <div
        className={cn('h-[1000px] bg-amber-300', !isWide.value ? 'lg:row-span-2' : 'lg:order-3')}
      ></div>
      <div className="h-[1000px] bg-rose-400"></div>
    </div>
  );
}
