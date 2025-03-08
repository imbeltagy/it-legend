import { delay } from '@/lib/utils/delay';
import { TopicsData } from '@/lib/types/courses';
import { getTopics } from '@/lib/actions/course-actions';
import CourseTopics from '@/view/sections/course-details/view/topics';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  await delay(2000);
  const topics = await getTopics(courseId);

  return <CourseTopics topics={topics as unknown as TopicsData} />;
}
