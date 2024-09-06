import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'flex items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-base font-medium focus:outline-none md:px-6 md:py-4 md:text-xl',
  {
    variants: {
      variant: {
        primary:
          'bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200',
        secondary:
          'bg-slate-300 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600',
        outline:
          'border-2 border-slate-500 text-slate-500 hover:bg-slate-400 hover:text-slate-50 dark:border-slate-400 dark:text-slate-400 dark:hover:bg-slate-300 dark:hover:text-slate-800',
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-400 dark:bg-red-400 dark:text-slate-950 dark:hover:bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <>
          <LoaderCircle className="size-6 animate-spin" /> Please Wait
        </>
      );
    }
    return children;
  };

  return (
    <button
      className={twMerge(buttonStyles({ variant }), className)}
      disabled={isLoading}
      {...props}
    >
      {renderButtonContent()}
    </button>
  );
}
