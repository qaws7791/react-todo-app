import { useState } from "react";
import './TodoForm.css'
import Button from "../Button/Button";
import Input from "../Input/Input";

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
    <form onSubmit={handleSubmit} className="todoForm">
      <fieldset className="todoForm__fieldset">
        <legend className="visually-hidden">할일 추가하기</legend>
        <div className="todoForm__formItem">
          <label htmlFor="title" className="todoForm__label">할일 제목</label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChangeTitleInput}
            placeholder="할일 제목을 입력하세요..."
          />
        </div>
        <div className="todoForm__formItem">
          <label htmlFor="content" className="todoForm__label">할일 내용</label>
          <Input
            type="text"
            id="content"
            name="content"
            value={content}
            onChange={onChangeContentInput}
            placeholder="할일 내용을 입력하세요..."
            style={{width:'300px'}}
          />
        </div>
        <Button type="submit" buttonState="fill">할일 추가하기</Button>
      </fieldset>
    </form>
  );
};


export default TodoForm;