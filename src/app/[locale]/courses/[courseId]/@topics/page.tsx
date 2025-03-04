import { TopicsData } from '@/lib/types/courses';
import CourseTopics from '@/view/course-details/topics';
import { getTopics } from '@/lib/actions/course-actions';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  const topics = await getTopics(courseId);

  return <CourseTopics topics={topics as unknown as TopicsData} />;
}
