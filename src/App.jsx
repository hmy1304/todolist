import './App.css'
import TodoEdit from './components/TodoEdit'
import TodoList from './components/TodoList'
import Header from './components/Header'


function App() {


  return (
    <div className='app'>
      <Header />
      <TodoEdit />
      <TodoList />
    </div>
  )
}

export default App
