import './Button.css'

const Button = ({text='' ,type = 'button', buttonState='outlined', children = 'button', ...props }) => {
  const classNames = buttonState === "fill" ? 'button button--fill' : 'button';
  return (
    <button type={type} className={classNames} {...props}>
    
    <span className='button__text'>{text}</span>
    {children}
    </button>
  )
  
}

export default Button;