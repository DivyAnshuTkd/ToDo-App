import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo  } from './Components/CreateTodo' 
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);       // state variable

  fetch("http://localhost:3000/todos")       // this is not the right way to get the data from backend.
                                            // if you use fetch directly inside the function body, it will 
                                            // run every time the component re-renders → that causes an infinite loop when you call setTodos.
  .then(async function(res)
  {
    const json = await res.json();
    setTodos(json.todos);  // json.todos gives me array and I am putting in setTodos
  })

  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
