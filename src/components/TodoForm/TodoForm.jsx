import { useState } from "react";

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("제목을 입력해주세요.");
    if (!content) return alert("내용을 입력해주세요.");
    createTodo(title, content);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
  };

  const onChangeTitleInput = ({ target }) => {
    setTitle(target.value);
  };

  const onChangeContentInput = ({ target }) => {
    setContent(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={onChangeTitleInput}
      />
      <label htmlFor="content">내용:</label>
      <input
        type="text"
        id="content"
        name="content"
        value={content}
        onChange={onChangeContentInput}
      />
      <input type="submit" value="추가하기" />
    </form>
  );
};

export default TodoForm;