import { TopicsData } from '@/lib/types/courses';
import { getTopics } from '@/lib/actions/course-actions';
import CourseTopics from '@/view/sections/course-details/topics';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  const topics = await getTopics(courseId);

  return <CourseTopics topics={topics as unknown as TopicsData} />;
}
