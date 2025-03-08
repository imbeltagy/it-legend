import { delay } from '@/lib/utils/delay';
import Header from '@/view/components/header';
import { getCourse } from '@/lib/actions/course-actions';
import VideoWrapper from '@/view/sections/course-details/view/video-wrapper';
export default async function CourseDetailsView({
  materials,
  comments,
  topics,
  courseId,
}: {
  courseId: string;
} & Record<'materials' | 'comments' | 'topics', React.ReactNode>) {
  await delay(1500);
  const course = await getCourse(courseId);

  return (
    <div>
      <Header
        title={course.title}
        breadcrumbs={[
          { label: 'home', href: '#' },
          { label: 'courses', href: '#' },
          { label: 'course_details' },
        ]}
      />
      <div className="mx-auto pb-8 lg:container">
        <VideoWrapper
          course={course}
          materials={materials}
          topicsComponent={topics}
          commentsComponent={comments}
        />
      </div>
    </div>
  );
}
