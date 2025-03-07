import Image from 'next/image';
import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { Comment } from '@/lib/types/courses';

import { Iconify } from '../components/iconify';

export default function CourseComments({ comments }: { comments: Comment[] }) {
  const t = useTranslations('CourseDetails.Comments');

  return (
    <div id="comments">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold tracking-wide md:text-3xl">{t('title')}</h2>
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
      </div>
      <AddComment />
    </div>
  );
}

function AddComment() {
  const t = useTranslations('CourseDetails.Comments');

  return (
    <div className="from-neutral to-default -mx-8 mt-10 rounded-lg px-8 pt-4 pb-8 max-lg:bg-gradient-to-b">
      <div className="container mx-auto">
        <textarea
          className="bg-default block w-full p-4 py-6 focus:outline-none lg:shadow-[0px_0px_130px_0px_rgba(0,0,0,0.1)] [&::placeholder]:font-bold"
          rows={4}
          placeholder={t('placeholder')}
        />
        <button className="button button-success mt-4">
          {t('submit')}
          <Iconify icon="tabler:arrow-right" className="text-xl rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}
