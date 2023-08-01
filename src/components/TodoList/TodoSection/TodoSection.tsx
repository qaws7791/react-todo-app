import { ReactNode } from 'react'
import styles from './TodoSection.module.css'

const TodoSection = ({children}:{children:ReactNode}) => {
  return (
    <div className={styles['TodoListSection']}>
      {children}
    </div>
  )
}

export default TodoSection