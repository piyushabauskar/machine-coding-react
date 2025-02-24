import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counterSlice'
import { addTodo } from './features/todosSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)
  const todos = useSelector((state) => state.todos)

  const incrementCounter = () =>{
    dispatch(increment())
  }
  const decrementCounter = () =>{
      dispatch(decrement())
  }

  const addTodoList = () =>{
    dispatch(addTodo({
      id: Math.random(),
      text: 'New Todo',
    }))
  }
  return (
    <div>
      <ul>
      {todos.map(todo=>{
        return (
          <li key={todo.id}>{todo.text}</li>
        )
      })}
      <button onClick={addTodoList}>Add To Do</button>
      </ul>
      
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export default App
