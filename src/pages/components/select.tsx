import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <select
      name={name}
      className={`w-full rounded-md border border-slate-400 bg-slate-100 px-4 py-3 text-sm text-slate-950 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-slate-400 md:px-6 md:py-4 md:text-base dark:bg-slate-900 dark:text-slate-50 ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option} className="text-sm md:text-base">
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
