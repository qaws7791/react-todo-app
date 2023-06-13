import './Button.css'

const Button = ({ type = 'button', buttonState='outlined', children = 'button', ...props }) => {
  const classNames = buttonState === "fill" ? 'button button--fill' : 'button';
  return <button type={type} className={classNames} {...props}>{children}</button>
}

export default Button;