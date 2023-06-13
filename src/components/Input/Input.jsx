import './Input.css'

const Input = ({type, placeholder, ...props}) => {
  return <input type='type' placeholder={placeholder} {...props} className="input"/>
}

export default Input;