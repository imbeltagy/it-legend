import { Course } from '@/lib/types/courses';

import VideoWrapper from './video-wrapper';

interface Props {
  course: Course;
  topicsComponent: React.ReactNode;
  commentsComponent: React.ReactNode;
}

export default function CourseMainSection({ course, topicsComponent, commentsComponent }: Props) {
  return (
    <div className="container mx-auto py-4">
      <VideoWrapper
        videoUrl={course.video}
        topicsComponent={topicsComponent}
        commentsComponent={commentsComponent}
      />
    </div>
  );
}
