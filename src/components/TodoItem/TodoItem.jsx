
import Button from '../Button/Button';
import './TodoItem.css';
import { BsTrash } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';
import {LuEdit} from 'react-icons/lu';
import { RiArrowGoBackLine } from 'react-icons/ri';

const TodoItem = ({ data, deleteFunc, changeFunc,editFunc }) => {
  const { id, title, body, isDone } = data;

  const handleDeleteButton = () => {
    deleteFunc(id);
  };

  const handleChangeButton = () => {
    changeFunc(id);
  };

  const handleEditButton = () => {
    editFunc(id);
  }

  return (
    <div className="todoItem">
      <div>
        <h5 className='todoItem__title'>{title}</h5>
        <div onClick={handleEditButton} className='todoItem__editBtn'><LuEdit/></div>
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