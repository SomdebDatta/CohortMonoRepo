import { useState, useEffect } from 'react'
import axios from "axios";

function App() {

  const [id, setId] = useState(1);


  return (
    <>
      <button onClick={function() {
        setId(1);
      }}>1</button>
      <button onClick={function() {
        setId(2);
      }}>2</button>
      <button onClick={function() {
        setId(3);
      }}>3</button>
      <button onClick={function() {
        setId(4);
      }}>4</button>
      <Todo id={id} />
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
  }, [id]);


  return <div>
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>
}

export default App
