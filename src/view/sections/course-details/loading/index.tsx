'use client';

import { cn } from '@/lib/utils/style';
import useVideoStore from '@/view/components/video/video-store';

import TopicsLoading from './topics';
import CommentsLoading from './comments';
import MaterialsLoading from './materials';

export default function CourseDetailsLoading() {
  const { isWide } = useVideoStore();

  return (
    <div>
      {/* Header Loading */}
      <div className="bg-neutral">
        <div className="container mx-auto pt-6 pb-4">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-16 animate-pulse rounded bg-gray-200" />
            ))}
          </div>
          <div className="mt-10 h-8 w-64 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      <div className="mx-auto pb-8 lg:container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
          }}
          className="relative gap-x-6 gap-y-12"
        >
          <div
            className={cn(
              'bg-default shadow-default top-0 z-50 col-span-2 py-4 max-lg:sticky max-lg:shadow-[0_4px_10px_-1px]',
              !isWide && 'lg:col-span-1'
            )}
          >
            <div className="container mx-auto">
              {/* Video Skeleton */}
              <div className="relative aspect-video w-full animate-pulse rounded-lg bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-gray-300" />
                </div>
              </div>

              {/* Navigation Icons Skeleton */}
              <div className="mt-4 flex items-center gap-4 max-lg:justify-center lg:mt-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              'container mx-auto max-lg:order-2 max-lg:col-span-2 lg:row-span-5',
              isWide ? 'lg:order-1' : 'lg:mt-4'
            )}
          >
            <TopicsLoading />
          </div>

          <div className="max-lg:col-span-2">
            <MaterialsLoading />
          </div>

          <div className="order-3 max-lg:col-span-2">
            <CommentsLoading />
          </div>
        </div>
      </div>
    </div>
  );
}
