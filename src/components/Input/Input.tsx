import styles from './Input.module.css'

interface InputProps extends  React.InputHTMLAttributes<HTMLInputElement>
{
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

const Input = ({
  type='text',
  id,
  name,
  value,
  onChange,
  placeholder,
  ...props
}:InputProps) => {
  return (
    <input 
    type={type} 
    id={id} 
    name={name} 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className={styles['input']}
    {...props} 
  />
  )
  
}

export default Input;