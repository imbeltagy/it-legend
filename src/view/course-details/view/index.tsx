import { Course } from '@/lib/types/courses';
import Header from '@/view/components/header';

import CourseMainSection from '../main';

interface Props {
  course: Course;
}

export default function CourseDetailsView({ course }: Props) {
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
      <CourseMainSection
        course={course}
        topicsComponent={<div>Topics</div>}
        commentsComponent={<div>Comments</div>}
      />
    </div>
  );
}
