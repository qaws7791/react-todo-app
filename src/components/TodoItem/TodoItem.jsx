import styles from './TodoItem.module.css';
import { BsTrash } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';
import {LuEdit} from 'react-icons/lu';
import { RiArrowGoBackLine } from 'react-icons/ri';
import IconButton from '../IconButton';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoStatus } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import Button from '../Button';

const TodoItem = ({ data }) => {
  const { id, title, body, isDone } = data;

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
          <IconButton 
            className={styles['todoItem__editBtn']}
            role='할일 편집을 위해 모달 열기'
          >
            <Link to={`/todo/${id}`}>
            <LuEdit/>
            </Link>
          </IconButton>
        <p className={styles['todoItem__content']}>{body}</p>
      </div>
      <div className={styles['todoItem__btns']}>
        <Button onClick={handleDeleteButton} text='삭제'><BsTrash/></Button>
        <Button
          onClick={handleChangeButton} 
          buttonState='fill' 
          text={isDone ? "취소" : "완료"}
        >
          {isDone ? <RiArrowGoBackLine/> : <BsCheckLg/>}
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;