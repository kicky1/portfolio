import React from 'react';
import { cn } from '@/lib/utils';

export default function Steps({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'steps relative border-l border-zinc-700 pl-8 mb-12  [counter-reset:step]',
        className
      )}
      {...props}
    />
  );
}
