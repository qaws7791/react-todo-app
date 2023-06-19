import React, { useRef } from 'react'
import './TodoModal.css';
import Button from '../Button/Button';
import { BsCheckLg, BsTrash } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

import { RiArrowGoBackLine } from 'react-icons/ri';
import IconButton from '../IconButton/IconButton';

const TodoModal = ({ editTodo, deleteTodo, updateEditTodo,endEditTodo,updateEditTodoIsDone }) => {
  const todoTitle = useRef(editTodo.title);
  const todoBody = useRef(editTodo.body);

  const handleInputTitle = (e) => {
    todoTitle.current = e.target.innerText;
  }

  const handleInputBody = (e) => {
    todoBody.current = e.target.innerText;
  }

  const handleBlur = () => {
    updateEditTodo({...editTodo,title: todoTitle.current, body: todoBody.current})
  }

  const handleCloseModal = () => {
    updateEditTodo({...editTodo,title: todoTitle.current, body: todoBody.current})
    endEditTodo()
  }

  const handleDeleteTodo = () => {
    deleteTodo();
  }


  const handleToggleIsDone = () => {
    updateEditTodoIsDone();
  }

  return (
    <div className='todoModal__container'>
        <div className='todoModal_bg' onClick={handleCloseModal}></div>
        <div className="todoModal">
          <div className='todoModal__closeBtn'>
          <IconButton 
            className='todoModal__closeBtn' 
            onClick={handleCloseModal}
            role='할일 모달 닫기'
          >
            <MdClose/>
          </IconButton>
          </div>
          <div>
            <h5 
              className='todoModal__title' 
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onKeyUp={handleInputTitle}
              onBlur={handleBlur}
            >
              {todoTitle.current}
            </h5>
            <p 
              className='todoModal__content' 
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onInput={handleInputBody}
              onBlur={handleBlur}
            >
            {todoBody.current}
            </p>
          </div>
          <div className='todoModal__btns'>
            <Button onClick={handleDeleteTodo} text='삭제하기'><BsTrash/></Button>
            <Button 
            onClick={handleToggleIsDone} 
            buttonState='fill' 
            text={editTodo.isDone ? "진행중인 상태로 변경" : "완료된 상태로 변경"}
            >
              {editTodo.isDone ? <RiArrowGoBackLine/> : <BsCheckLg/>} 
            </Button>
          </div>
        </div>
      </div>
  )
}

export default TodoModal;