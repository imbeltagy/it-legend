import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/view/components/ui/breadcrumb';

import { LocaleButton } from '../locale-button';

interface Props {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export default function Header({ title, breadcrumbs }: Props) {
  const t = useTranslations('Nav');

  const renderBreadcrumbs = (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, i) => (
          <React.Fragment key={item.label}>
            {i > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem
              className={i === breadcrumbs.length - 1 ? 'text-primary font-bold' : ''}
            >
              <BreadcrumbLink href={item.href}>{t(item.label)}</BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <div className="bg-neutral">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {renderBreadcrumbs}
          <LocaleButton />
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-wide md:mt-6 md:text-4xl">{title}</h1>
      </div>
    </div>
  );
}
