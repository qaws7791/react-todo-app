import styles from './Button.module.css'

const Button = ({text='' ,type = 'button', buttonState='outlined', children = 'button', ...props }) => {
  const classNames = buttonState === "fill" ? 
  `${styles['button']} ${styles['button--fill']}` 
  : styles['button'];
  return (
    <button type={type} className={classNames} {...props}>
    <span className={styles['button__text']}>{text}</span>
    {children}
    </button>
  )
  
}

export default Button;