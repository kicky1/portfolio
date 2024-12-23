import React from 'react';
import { cn } from '@/lib/utils';

export default function Step({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'step mt-8 scroll-m-20',
        className
      )}
      {...props}
    />
  );
}
