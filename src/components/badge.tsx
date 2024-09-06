import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const badgeStyles = cva(
  'flex size-fit items-center justify-center gap-2 rounded-md px-1.5 py-1 text-xs font-semibold md:px-2 md:py-1.5',
  {
    variants: {
      color: {
        yellow:
          'border border-yellow-300 bg-yellow-100 text-yellow-900 dark:border-yellow-700 dark:bg-yellow-800 dark:text-yellow-100',
        pink: 'border border-pink-300 bg-pink-100 text-pink-900 dark:border-pink-700 dark:bg-pink-800 dark:text-pink-100',
        lime: 'border border-lime-300 bg-lime-100 text-lime-900 dark:border-lime-700 dark:bg-lime-800 dark:text-lime-100',
        cyan: 'border border-cyan-300 bg-cyan-100 text-cyan-900 dark:border-cyan-700 dark:bg-cyan-800 dark:text-cyan-100',
        purple:
          'border border-purple-300 bg-purple-100 text-purple-900 dark:border-purple-700 dark:bg-purple-800 dark:text-purple-100',
        grey: 'border border-gray-300 bg-gray-100 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
        blue: 'border border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100',
        green:
          'border border-green-300 bg-green-100 text-green-900 dark:border-green-700 dark:bg-green-800 dark:text-green-100',
      },
    },
    defaultVariants: {
      color: 'yellow',
    },
  },
);

const dotStyles = cva('size-2 rounded-full', {
  variants: {
    color: {
      yellow: 'bg-yellow-600 dark:bg-yellow-300',
      pink: 'bg-pink-600 dark:bg-pink-300',
      lime: 'bg-lime-600 dark:bg-lime-300',
      cyan: 'bg-cyan-600 dark:bg-cyan-300',
      purple: 'bg-purple-600 dark:bg-purple-300',
      grey: 'bg-gray-600 dark:bg-gray-300',
      blue: 'bg-blue-600 dark:bg-blue-300',
      green: 'bg-green-600 dark:bg-green-300',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});

interface BadgeProps extends VariantProps<typeof badgeStyles> {
  text: string;
  className?: string;
  dot?: boolean;
}

export default function Badge({
  color,
  text,
  className,
  dot,
  ...props
}: BadgeProps) {
  return (
    <span className={twMerge(badgeStyles({ color }), className, '')} {...props}>
      {dot && <span className={dotStyles({ color })} />}
      {text}
    </span>
  );
}
