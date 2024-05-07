import React from 'react';

import { ReloadIcon } from '@radix-ui/react-icons';
import { cva } from 'class-variance-authority';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const buttonVariants = cva('', {
  variants: {
    customVariant: {
      success: 'bg-emerald-500 hover:bg-emerald-600',
      primary: 'bg-cyan-500 text-white hover:bg-cyan-600',
      secondary: 'bg-gray-300 hover:bg-gray-400',
      error: 'bg-red-400 hover:bg-red-500',
      default: '',
    },
  },
  defaultVariants: {
    customVariant: 'default',
  },
});

export interface IButtonProps extends ButtonProps {
  customVariant?: 'success' | 'primary' | 'secondary' | 'error' | 'default';
  isLoading?: boolean;
  onSubmitFunction?: () => Promise<any> | void;
}

export default function CustomButton({
  variant,
  customVariant,
  className,
  isLoading,
  disabled,
  children,
  onSubmitFunction,
}: IButtonProps) {
  return (
    <Button
      variant={variant}
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ customVariant }), className)}
      type="submit"
      onClick={onSubmitFunction}
    >
      {isLoading ? (
        <ReloadIcon className="mr-2 h-4 w-4  animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
}