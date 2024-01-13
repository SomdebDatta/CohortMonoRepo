import { useState } from "react";
import React from "react";

function App() {

  let [title, setTitle] = useState("my name is som");

  function changeTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={title} />
      <Header title="my name is deepu"/>
      <Header title="my name is deepu"/>
      <Header title="my name is deepu"/>
      <Header title="my name is deepu"/>
      <Header title="my name is deepu"/>
      <Header title="my name is deepu"/>
    </div>
  )
}

const Header = React.memo(function Header(props) {
  return <div>
    {props.title}
  </div>
}
)


export default App
