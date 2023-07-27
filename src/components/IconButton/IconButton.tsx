import React from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>   {
  role: string;
  children: React.ReactNode;
}


const IconButton = ({ 
  role='button',
  children,
  className, 
  ...props 
}:IconButtonProps) => {
  return (
    <button  
      className={`${styles['iconButton']} ${className}`} 
      aria-label={role}
      {...props}
    >
    {children}
    </button>
  )
  
}

export default IconButton;