
import Button from '../Button/Button';
import './TodoItem.css';
import { BsTrash } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';
import {LuEdit} from 'react-icons/lu';
import { RiArrowGoBackLine } from 'react-icons/ri';
import IconButton from '../IconButton/IconButton';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoStatus } from '../../redux/modules/todos';

const TodoItem = ({ data, editFunc }) => {
  const { id, title, body, isDone } = data;

  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    dispatch(deleteTodo(id))
  };

  const handleChangeButton = () => {
    dispatch(toggleTodoStatus(id))
  };

  const handleEditButton = () => {
    // editFunc(id);
  }

  return (
    <div className="todoItem">
      <div>
        <h5 className='todoItem__title'>{title}</h5>
        <IconButton 
          onClick={handleEditButton} 
          className='todoItem__editBtn'
          role='할일 편집을 위해 모달 열기'
        >
          <LuEdit/>
        </IconButton>
        <p className='todoItem__content'>{body}</p>
      </div>
      <div className='todoItem__btns'>
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