import type { TextareaHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={twMerge(
          'flex min-h-32 w-full rounded-md border border-slate-400 bg-slate-100 px-4 py-3 text-sm text-slate-950 ring-offset-slate-400 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-4 md:text-base dark:bg-slate-900 dark:text-slate-50',
          className,
        )}
        {...props}
      />
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
