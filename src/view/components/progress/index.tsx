'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import { Iconify } from '../iconify';

export default function Progress({
  value,
  label,
  displayValue = true,
}: {
  value: number;
  label?: string;
  displayValue?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative mt-20 h-2 w-full rounded-full bg-gray-200">
      <motion.div
        className="bg-success h-full rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      {label && (
        <>
          <motion.div
            className="text-info absolute bottom-[calc(100%+1.5rem)] w-fit -translate-x-1/2 rounded-full border-3 border-neutral-300 p-2 font-bold rtl:translate-x-1/2"
            initial={{ insetInlineStart: '0%' }}
            animate={isInView ? { insetInlineStart: `${value - 1}%` } : { insetInlineStart: '0%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {label}
          </motion.div>

          <motion.div
            className="absolute bottom-[calc(100%+.4rem)] h-4 w-4 -translate-x-1/2 text-sm text-neutral-300 rtl:translate-x-1/2"
            initial={{ insetInlineStart: '0%' }}
            animate={isInView ? { insetInlineStart: `${value - 1}%` } : { insetInlineStart: '0%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Iconify icon="bxs:down-arrow" />
          </motion.div>
        </>
      )}

      {displayValue && (
        <motion.div
          className="text-info absolute top-[calc(100%+.5rem)] h-4 w-4 -translate-x-1/2 text-sm font-bold rtl:translate-x-full"
          initial={{ insetInlineStart: '0%' }}
          animate={isInView ? { insetInlineStart: `${value - 1}%` } : { insetInlineStart: '0%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {`${value}%`}
        </motion.div>
      )}
    </div>
  );
}
