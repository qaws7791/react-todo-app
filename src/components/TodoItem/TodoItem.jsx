const TodoItem = ({ data, deleteFunc, changeFunc }) => {
  const { id, title, body, isDone } = data;

  const handleDeleteButton = () => {
    deleteFunc(id);
  };

  const handleChangeButton = () => {
    changeFunc(id);
  };

  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
      <div>
        <button onClick={handleDeleteButton}>삭제하기</button>
        <button onClick={handleChangeButton}>{isDone ? "취소" : "완료"}</button>
      </div>
    </li>
  );
};

export default TodoItem;