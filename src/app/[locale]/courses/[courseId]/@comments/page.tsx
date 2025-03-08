import { delay } from '@/lib/utils/delay';
import { Comment } from '@/lib/types/courses';
import { getComments } from '@/lib/actions/course-actions';
import CourseComments from '@/view/sections/course-details/view/comments';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  await delay(2500);
  const comments = await getComments(courseId);

  return <CourseComments comments={comments as unknown as Comment[]} />;
}
