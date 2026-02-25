import React, {useState,useMemo} from 'react'
import { useTodoStore } from '../contexts/todoContext'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = () => {
  const {todos} = useTodoStore()
  const [search, setSearch] =useState("")

  const filteredTodos = useMemo(() => {
    if (!search.trim()) return todos
    const q = search.toLowerCase()

    return todos.filter((t)=>t.content.toLowerCase().includes(q))


  }, [todos,search])

  const onChangeSearch=(e)=>{
    setSearch(e.target.value)
  }


  // const filteredTodos = getfilterdData()

  return (
    <div className='TodoList'>
        <h4>Todo List</h4>
        <input 
        onChange={onChangeSearch}
        value={search}
        type="text" 
        placeholder='검색어를 입력하세요'/>
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    </div>
  )
}

export default TodoList