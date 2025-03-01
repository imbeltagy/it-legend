import Image from 'next/image';
import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { Comment } from '@/lib/types/courses';

import { Iconify } from '../components/iconify';

export default function CourseComments({ comments }: { comments: Comment[] }) {
  const t = useTranslations('CourseDetails');

  return (
    <div>
      <h2 className="text-xl font-bold tracking-wide md:text-3xl">{t('comments')}</h2>
      <div>
        {comments.map((comment, index) => (
          <Fragment key={comment.id}>
            {index > 0 && <div className="bg-divider mt-6 h-px w-full" />}
            <div className="mt-6 flex items-start gap-4">
              <Image
                src={comment.avatar}
                alt={comment.name}
                width={50}
                height={50}
                className="rounded-full"
              />

              <div className="text-secondary">
                <h3 className="font-bold">{comment.name}</h3>
                <span>
                  {new Date(comment.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <p className="mt-4">{comment.comment}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      <AddComment />
    </div>
  );
}

function AddComment() {
  return (
    <div className="from-neutral to-default -mx-8 mt-10 rounded-lg px-8 pb-8 max-lg:bg-gradient-to-b max-lg:pt-4">
      <textarea
        className="bg-default block w-full p-4 py-6 focus:outline-none lg:shadow-[0px_0px_60px_-20px_rgba(0,0,0,0.1)] [&::placeholder]:font-bold"
        rows={4}
        placeholder="Write a comment"
      />
      <button className="button-success">
        Submit Review
        <Iconify icon="tabler:arrow-right" className="text-xl" />
      </button>
    </div>
  );
}
