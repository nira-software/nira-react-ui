import React, { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonClass =
  | 'btn-neutral'
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-accent'
  | 'btn-info'
  | 'btn-success'
  | 'btn-warning'
  | 'btn-error'
  | 'btn-ghost'
  | string;

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  outline?: boolean;
  className?: ButtonClass;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  outline = false,
  className = 'btn-primary',
  ...props
}) => {
  let sizeClasses = '';

  switch (size) {
    case 'xs':
      sizeClasses = 'btn-xs';
      break;
    case 'sm':
      sizeClasses = 'btn-sm';
      break;
    case 'lg':
      sizeClasses = 'btn-lg';
      break;
    default:
      sizeClasses = '';
  }

  let classes = 'btn ';

  if (outline) {
    classes += 'btn-outline ';
  }

  classes += className ? `${className} ${sizeClasses}` : `${sizeClasses}`;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
