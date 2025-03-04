'use client';

import { cn } from '@/lib/utils/style';
import { Iconify } from '@/view/components/iconify';

import { useAccordion, AccordionProvider } from './context';

export default function Accordion({
  children,
  defaultOpen = false,
  id,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}) {
  return (
    <AccordionProvider defaultOpen={defaultOpen} id={id}>
      <div className="rounded border">{children}</div>
    </AccordionProvider>
  );
}

const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen, id } = useAccordion();
  return (
    <div
      className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 hover:bg-neutral-100 hover:no-underline"
      onClick={() => setOpen(!open)}
      aria-controls={id}
      aria-expanded={open}
    >
      <div>{children}</div>
      <Iconify
        className={cn('text-2xl transition-transform duration-500', open && 'rotate-[135deg]')}
        icon="mynaui:plus-solid"
      />
    </div>
  );
};
Accordion.Trigger = AccordionTrigger;

const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  const { open, id } = useAccordion();
  return (
    <div
      id={id}
      className={cn(
        'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500',
        open && 'grid-rows-[1fr]'
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
Accordion.Content = AccordionContent;
