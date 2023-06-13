import React, { useRef, useState } from 'react'
import './TodoModal.css';
import Button from '../Button/Button';
import { BsCheckLg, BsTrash } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { AiOutlineRollback } from 'react-icons/ai';

const TodoModal = ({ editTodo ,endEditTodo,updateEditTodoTitle,updateEditTodoBody,deleteTodo,updateEditTodoIsDone }) => {
  const todoTitle = useRef(editTodo.title);
  const todoBody = useRef(editTodo.body);

  const handleInputTitle = (e) => {
    const newTitle = e.target.innerText;
    updateEditTodoTitle(newTitle);
  }

  const handleInputBody = (e) => {
    const newBody = e.target.innerText;
    updateEditTodoBody(e.target.innerText);
  }

  return (
    <div className='todoModal__container'>
        <div className='todoModal_bg' onClick={endEditTodo}></div>
        <div className="todoModal">
          <div className='todoModal__closeBtn' onClick={endEditTodo}><MdClose/></div>
          <div>
            <h5 
              className='todoModal__title' 
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onInput={handleInputTitle}
            >
              {todoTitle.current}
            </h5>
            <p 
              className='todoModal__content' 
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onInput={handleInputBody}
            >
            {todoBody.current}
            </p>
          </div>
          <div className='todoModal__btns'>
            <Button onClick={deleteTodo} text='삭제하기'><BsTrash/></Button>
            <Button onClick={updateEditTodoIsDone} buttonState='fill' text={editTodo.isDone ? "진행중인 상태로 변경" : "완료된 상태로 변경"}>{editTodo.isDone ? <AiOutlineRollback/> : <BsCheckLg/>}</Button>
          </div>
        </div>
      </div>
  )
}

export default TodoModal;