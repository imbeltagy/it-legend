import { Comment } from '@/lib/types/courses';
import { getComments } from '@/lib/actions/course-actions';
import CourseComments from '@/view/course-details/comments';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  const comments = await getComments(courseId);

  return <CourseComments comments={comments as unknown as Comment[]} />;
}
