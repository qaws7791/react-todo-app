import Button from '../Button/Button';
import './TodoItem.css'

const TodoItem = ({ data, deleteFunc, changeFunc }) => {
  const { id, title, body, isDone } = data;

  const handleDeleteButton = () => {
    deleteFunc(id);
  };

  const handleChangeButton = () => {
    changeFunc(id);
  };

  return (
    <div className="todoItem">
      <div>
        <h5 className='todoItem__title'>{title}</h5>
        <p className='todoItem__content'>{body}</p>
      </div>
      <div className='todoItem__btns'>
        <Button onClick={handleDeleteButton}>삭제</Button>
        <Button onClick={handleChangeButton} buttonState='fill'>{isDone ? "취소" : "완료"}</Button>
      </div>
    </div>
  );
};

export default TodoItem;