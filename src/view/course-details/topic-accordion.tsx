'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils/style';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import useCoursePopupStore from '@/lib/context/course-popup';
import { TopicsData, TopicItemType, TopicItemStatus } from '@/lib/types/courses';

import { Iconify } from '../components/iconify';
import Accordion from '../components/accordion';

export default function TopicAccordion({ item }: { item: TopicsData['topics'][number] }) {
  const renderTrigger = (
    <>
      <h4 className="text-lg font-bold">{item.title}</h4>
      <p className="text-secondary text-base">{item.description}</p>
    </>
  );

  return (
    <Accordion defaultOpen={true} id={item.id}>
      <Accordion.Trigger>{renderTrigger}</Accordion.Trigger>
      <Accordion.Content>
        {item.items.map((item) => (
          <TopicItem key={item.id} item={item} />
        ))}
      </Accordion.Content>
    </Accordion>
  );
}

function TopicItem({ item }: { item: TopicsData['topics'][number]['items'][number] }) {
  const t = useTranslations('CourseDetails.Topics');
  const router = useRouter();
  const { setPdfUrl, setExamId } = useCoursePopupStore();

  const handleClick = () => {
    if (item.status === TopicItemStatus.LOCKED) return;

    if (item.type === TopicItemType.VIDEO) {
      router.push(`/courses/${item.id}`);
    }

    if (item.type === TopicItemType.PDF) {
      if (!item.pdfUrl) return;
      setPdfUrl(item.pdfUrl);
    }

    if (item.type === TopicItemType.EXAM) {
      setExamId(item.id);
    }
  };

  const renderIcon = useMemo(() => {
    if (item.status === TopicItemStatus.LOCKED)
      return <Iconify icon="hugeicons:circle-lock-02" className="text-lg" />;
    if (item.status === TopicItemStatus.COMPLETED)
      return <Iconify icon="ep:success-filled" className="text-success text-lg" />;
    return null;
  }, [item.status]);

  const renderSubInfo = useMemo(() => {
    const questionsChip =
      typeof item.questions === 'number' ? (
        <span className="text-success bg-success-light rounded px-2 py-1 text-sm whitespace-nowrap uppercase">
          {t('questions', { count: item.questions })}
        </span>
      ) : null;

    const durationChip = item.duration ? (
      <span className="text-error bg-error-light rounded px-2 py-1 text-sm whitespace-nowrap uppercase">
        {t('duration', { duration: item.duration })}
      </span>
    ) : null;

    return (
      <>
        {questionsChip}
        {durationChip}
      </>
    );
  }, [item.duration, item.questions, t]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        'flex cursor-pointer items-center gap-2 border-t px-6 py-4 hover:bg-neutral-100',
        item.status === TopicItemStatus.LOCKED && 'pointer-events-none'
      )}
    >
      <p className="grow-1 leading-7">
        <Iconify icon="pepicons-pencil:file" className="me-2 inline-block" />
        {item.title}
      </p>

      {renderIcon}

      <div className="flex flex-wrap items-center justify-end gap-2">{renderSubInfo}</div>
    </div>
  );
}
