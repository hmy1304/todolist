import React from 'react'
import './TodoItem.css'
import { useTodoStore } from '../contexts/todoContext';

const TodoItem = ({ id, isDone, content, date}) => {
  const {toggleTodo, deleteTodo} = useTodoStore()

  return (
    <div className="TodoItem">
      <input
        onChange={()=>toggleTodo(id)}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={()=>deleteTodo(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
