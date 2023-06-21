import styles from './IconButton.module.css'

const IconButton = ({ role='button',children , ...props }) => {
  return (
    <button {...props} className={styles['iconButton']} aria-label={role}>
    {children}
    </button>
  )
  
}

export default IconButton;