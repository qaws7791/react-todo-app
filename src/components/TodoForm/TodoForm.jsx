import { useState } from "react";
import styles from './TodoForm.module.css'
import Button from "../Button";
import Input from "../Input";

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
    <form onSubmit={handleSubmit} className={styles['todoForm']}>
      <fieldset className={styles['todoForm__fieldset']}>
        <legend className="visually-hidden">할일 추가하기</legend>
        <div className={styles['todoForm__formItem']}>
          <label htmlFor="title" className={styles['todoForm__label']}>할일 제목</label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChangeTitleInput}
            placeholder="할일 제목을 입력하세요..."
          />
        </div>
        <div className={styles['todoForm__formItem']}>
          <label htmlFor="content" className={styles['todoForm__label']}>할일 내용</label>
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