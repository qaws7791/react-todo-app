import { ReactNode } from 'react'
import styles from './TodoSectionTitle.module.css'

const TodoSectionTitle = ({ children}:{children:ReactNode}) => {
  return (
    <h2 className={styles['TodoListSection__title']}>{children}</h2>
  )
}

export default TodoSectionTitle