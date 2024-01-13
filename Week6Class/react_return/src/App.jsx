function App() {
  

  return (
    <>
      <Header title="sample 1" />
      <Header title="sample 2" />
    </>
  )
}

function Header(props) {
  return <div>
    {props.title}
  </div>
}

export default App
