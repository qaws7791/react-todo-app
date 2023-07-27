import { useRef } from 'react'
import styles from './TodoModal.module.css';
import Button from '../Button';
import { BsCheckLg, BsTrash } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { RiArrowGoBackLine } from 'react-icons/ri';
import IconButton from '../IconButton';
import { Todo } from '../../redux/modules/todos';


interface TodoModalProps {
  editTodo: Todo,
  deleteTodo: () => void,
  endEditTodo: () => void,
  updateEditTodo: (todo: Todo) => void,
  updateEditTodoIsDone: () => void,
}

const TodoModal = ({ 
  editTodo,
  endEditTodo, 
  deleteTodo, 
  updateEditTodo,
  updateEditTodoIsDone 
}:TodoModalProps) => {
  const todoTitle = useRef(editTodo.title);
  const todoBody = useRef(editTodo.body);

  const handleInputTitle = (e:React.KeyboardEvent<HTMLHeadingElement>) => {
    const target = e.target as HTMLHeadingElement;
    todoTitle.current = target.innerText;
  }

  const handleInputBody = (e:React.KeyboardEvent<HTMLHeadingElement>) => {
    const target = e.target as HTMLParagraphElement;
    todoBody.current = target.innerText;
  }

  const handleBlur = () => {
    updateEditTodo({...editTodo,title: todoTitle.current, body: todoBody.current})
  }

  const handleCloseModal = () => {
    updateEditTodo({...editTodo,title: todoTitle.current, body: todoBody.current})
    endEditTodo()
  }

  const handleDeleteTodo = () => {
    deleteTodo();
  }


  const handleToggleIsDone = () => {
    updateEditTodoIsDone();
  }

  return (
    <div className={styles['todoModal__container']}>
        <div className={styles['todoModal_bg']} onClick={handleCloseModal}></div>
        <div className={styles['todoModal']}>
          <div className={styles['todoModal__closeBtn']}>
          <IconButton 
            className={styles['todoModal__closeBtn']}
            onClick={handleCloseModal}
            role='할일 모달 닫기'
          >
            <MdClose/>
          </IconButton>
          </div>
          <div>
            <h5 
              className={styles['todoModal__title']} 
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onKeyUp={handleInputTitle}
              onBlur={handleBlur}
            >
              {todoTitle.current}
            </h5>
            <p 
              className={styles['todoModal__content']}
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onInput={handleInputBody}
              onBlur={handleBlur}
            >
            {todoBody.current}
            </p>
          </div>
          <div className={styles['todoModal__btns']}>
            <Button onClick={handleDeleteTodo} icon={<BsTrash/>}>삭제하기</Button>
            <Button 
            onClick={handleToggleIsDone} 
            buttonState='fill' 
            icon={editTodo.isDone ? <RiArrowGoBackLine/> : <BsCheckLg/>}
            >
               {editTodo.isDone ? "진행중인 상태로 변경" : "완료된 상태로 변경"}
            </Button>
          </div>
          <div className={styles['todoModal__footer']}>
            <span>ID: {editTodo.id}</span>
            <span>생성 시각: {new Date(editTodo.createdAt).toLocaleString()}</span>
            <span>수정 시각: {new Date(editTodo.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      </div>
  )
}

export default TodoModal;