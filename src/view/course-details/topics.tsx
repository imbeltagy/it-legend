import { useTranslations } from 'next-intl';
import { TopicsData } from '@/lib/types/courses';

import Progress from '../components/progress';
import TopicAccordion from './topic-accordion';

export default function CourseTopics({ topics }: { topics: TopicsData }) {
  const t = useTranslations('CourseDetails.Topics');

  return (
    <div id="topics">
      <h2 className="text-xl font-bold tracking-wide md:text-3xl">{t('title')}</h2>
      <Progress value={topics.progress} label={t('progress_label')} />
      <div className="bg-default z-50 mt-20 flex flex-col gap-8">
        {topics.topics.map((topic) => (
          <TopicAccordion key={topic.id} item={topic} />
        ))}
      </div>
    </div>
  );
}
