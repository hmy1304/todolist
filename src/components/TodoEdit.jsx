import React, {useState, useRef, useEffect} from 'react'
import './TodoEdit.css'
import { useTodoStore } from '../contexts/todoContext'

const TodoEdit = () => {
  const {createTodo}=useTodoStore()
  const [content, setContent] = useState("")
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const onChangeContent =(e)=> {
    setContent(e.target.value)
  }

  const onSubmit=()=> {
    
    createTodo(content)
    inputRef.current?.focus()
    setContent("")
  }

  const onKeydown = (e) => {
    if(e.keyCode===13){
      onSubmit()
    }
  }

  return (
    <div className='Editor'>
        <input 
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        type="text" 
        placeholder='새로운 Todo...'/>
        <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEdit