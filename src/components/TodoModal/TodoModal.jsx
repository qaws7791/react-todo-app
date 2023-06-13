import React from 'react'
import './TodoModal.css';
import Button from '../Button/Button';
import { BsCheckLg, BsTrash } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const TodoModal = ({ editTodo ,endEditTodo,updateEditTodoTitle,updateEditTodoBody,deleteTodo,updateEditTodoIsDone }) => {

  const handleInputTitle = (e) => {
    updateEditTodoTitle(e.target.innerText)
  }

  const handleInputBody = (e) => {
    updateEditTodoBody(e.target.innerText)
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
              {editTodo.title}
            </h5>
            <p 
              className='todoModal__content' 
              contentEditable='true' 
              suppressContentEditableWarning={true} 
              onInput={handleInputBody}
            >
            {editTodo.body}
            </p>
          </div>
          <div className='todoModal__btns'>
            <Button onClick={deleteTodo} text='삭제하기'><BsTrash/></Button>
            <Button onClick={updateEditTodoIsDone} buttonState='fill' text={editTodo.isDone ? "진행중인 상태로 변경" : "완료된 상태로 변경"}><BsCheckLg/></Button>
          </div>
        </div>
      </div>
  )
}

export default TodoModal;