import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { key: string; value: string }[];
  placeholder: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options = [], placeholder, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={twMerge(
          'w-full rounded-md border border-slate-400 bg-slate-100 px-4 py-3 text-sm text-slate-950 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-slate-400 md:px-6 md:py-4 md:text-base dark:bg-slate-900 dark:text-slate-50',
          className,
        )}
        defaultValue=""
        {...props}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.key}
            value={option.value}
            className="text-sm capitalize md:text-base"
          >
            {option.value}
          </option>
        ))}
      </select>
    );
  },
);

Select.displayName = 'Select';

export default Select;
