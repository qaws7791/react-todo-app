import styles from './TodoItem.module.css';
import { BsTrash, BsCheckLg } from 'react-icons/bs';
import {LuEdit} from 'react-icons/lu';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoStatus,Todo } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import Button from '../Button';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ 
  todo 
}:TodoItemProps) => {
  const { id, title, body, isDone } = todo;

  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    dispatch(deleteTodo(id))
  };

  const handleChangeButton = () => {
    dispatch(toggleTodoStatus(id))
  };
  return (
    <div className={styles['todoItem']}>
      <div>
        <h5 className={styles['todoItem__title']}>{title}</h5>
        <Link to={`/todo/${id}`} className={styles['todoItem__link']}>
            <LuEdit/>
        </Link>
        <p className={styles['todoItem__content']}>{body}</p>
      </div>
      <div className={styles['todoItem__btns']}>
        <Button onClick={handleDeleteButton} icon={<BsTrash/>}>삭제</Button>
        <Button
          onClick={handleChangeButton} 
          buttonState='fill' 
          icon={isDone ? <RiArrowGoBackLine/> : <BsCheckLg/>}
        >
          {isDone ? "취소" : "완료"}
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;