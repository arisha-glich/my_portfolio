import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

const buttonVariants = cva(
 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative',
 {
  variants: {
   variant: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive:
     'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline:
     'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
   },
   size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
   },
  },
  defaultVariants: {
   variant: 'default',
   size: 'default',
  },
 }
);

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
 asChild?: boolean;
 loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 (
  { className, variant, size, asChild = false, children, loading, ...props },
  ref
 ) => {
  if (asChild) {
   return (
    <Slot ref={ref} {...props}>
     <>
      {React.Children.map(
       children as React.ReactElement,
       (child: React.ReactElement) => {
        return React.cloneElement(child, {
         className: cn(buttonVariants({ variant, size }), className),
         children: (
          <>
           {loading && (
            <Loader className="mr-2 size-4 animate-spin" />
            // <Loader2
            //  className={cn('h-4 w-4 animate-spin', children && 'mr-2')}
            // />
           )}
           {child.props.children}
          </>
         ),
        });
       }
      )}
     </>
    </Slot>
   );
  }

  return (
   <button
    className={cn(buttonVariants({ variant, size, className }))}
    disabled={loading}
    ref={ref}
    {...props}
   >
    <>
     {loading && (
      <Loader className={cn('absolute inset-0 m-auto h-4 w-4 animate-spin')} />
     )}
     {loading ? <span className="opacity-0">{children}</span> : <>{children}</>}
    </>
   </button>
  );
 }
);

Button.displayName = 'Button';

export { Button, buttonVariants };