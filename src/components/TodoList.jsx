import React, {useState} from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] =useState("")

  const onChangeSearch=(e)=>{
    setSearch(e.target.value)
  }

  const getfilterdData=()=>{
    if(search===''){
      return todos
    }
    return todos.filter((todo)=> 
      todo.content
      .toLowerCase()
      .includes(search.toLowerCase())
    )
  }

  const filteredTodos = getfilterdData()

  return (
    <div className='TodoList'>
        <h4>Todo List</h4>
        <input 
        onChange={onChangeSearch}
        value={search}
        type="text" 
        placeholder='검색어를 입력하세요'/>
        <div className="todos_wrapper">
            {filteredTodos.map((todo)=>(
              <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
            ))}
        </div>
    </div>
  )
}

export default TodoList