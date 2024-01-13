import './App.css'
import { useState } from 'react';


//state and components

function App() {

  const [todos, setTodos] = useState([
    {title: "Sample title",
    description: "Sample description"},
    {title: "Sample title 2",
    description: "Sample description 2"}]);

  function AddTodo() {
    setTodos([...todos, {title: "random todo title", description: "random todo description"}]);
  }

  return (
    <div>
      <button onClick={AddTodo}>Add random todo</button>
      {todos.map(function(todo) {
        return <TodoHandler title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}



function TodoHandler(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
