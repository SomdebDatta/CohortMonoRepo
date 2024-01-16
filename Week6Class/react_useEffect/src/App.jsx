import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  return (
    <>
      <Todo id={1} />
    </>
  )
}

function Todo({id}) {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    const my_str = `https://sum-server.100xdevs.com/todo?id=${id}`;
    console.log(my_str);
    axios.get(my_str).then(
      function(resp) {
        console.log(resp.data.todo);
        setTodos(resp.data.todo);
      }
    )
  }, []);


  return <div>
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>
}

export default App
