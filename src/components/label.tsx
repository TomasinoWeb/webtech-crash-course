import React from 'react';

interface LabelProps {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}

export default function Label({ htmlFor, required, children }: LabelProps) {
  return (
    <div className="flex gap-1">
      <label
        htmlFor={htmlFor}
        className="text-sm text-slate-900 dark:text-slate-100 md:text-base"
      >
        {children}
      </label>
      {required && <div className="text-red-600">*</div>}
    </div>
  );
}
