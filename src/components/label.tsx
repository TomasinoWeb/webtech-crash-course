import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm text-slate-900 md:text-base dark:text-slate-100"
    >
      {children}
    </label>
  );
}
