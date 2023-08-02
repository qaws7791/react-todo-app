import React from 'react';
import styles from './Button.module.css'

interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
  type?: 'button' | 'submit' | 'reset';
  buttonState?: 'outlined' | 'fill';
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = ({
  type = 'button', 
  buttonState = 'outlined', 
  icon,
  children, 
  ...props 
}:ButtonProps) => {
  const classNames = buttonState === "fill" ? 
  `${styles['button']} ${styles['button--fill']}` 
  : styles['button'];

  return (
    <button type={type} className={classNames} {...props}>
    {children}
    {icon}
    </button>
  )
  
}

export default Button;