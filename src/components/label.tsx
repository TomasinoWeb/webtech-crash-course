import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm text-slate-900 dark:text-slate-100 md:text-base"
    >
      {children}
    </label>
  );
}
