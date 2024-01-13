import { useState } from "react"

function App() {
  var id = 4
  const [todos, setTodos] = useState([
    {id: 1, title: "Sample title 1", description: "Sample description 1"},
    {id: 2, title: "Sample title 2", description: "Sample description 2"},
    {id: 3, title: "Sample title 3", description: "Sample description 3"}
  ])

  function AddTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    setTodos([...todos, {id: id, title: title, description: description}]);
    id += 1;

  }
  return (
    <>
      <input id="title" type="text" placeholder="title"></input><br></br>
      <input id="description" type="text" placeholder="description"></input><br></br>
      <button onClick={AddTodo}>Add todo</button>
      {todos.map(todo => <RenderTodo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

function RenderTodo({title, description}) {

  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
