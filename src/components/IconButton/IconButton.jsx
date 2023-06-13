import './IconButton.css'

const IconButton = ({ role='button',children , ...props }) => {
  return (
    <button {...props} className='iconButton' aria-label={role}>
    {children}
    </button>
  )
  
}

export default IconButton;