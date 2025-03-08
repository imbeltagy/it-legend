import { delay } from '@/lib/utils/delay';
import { getMaterials } from '@/lib/actions/course-actions';
import Materials from '@/view/sections/course-details/view/materials';

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  await delay(1500);
  const res = await getMaterials(courseId);

  return <Materials materials={res.materials} />;
}
