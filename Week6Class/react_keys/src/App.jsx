function App() {
  return <div>
      <CardWrapper>
        bitch ass
      </CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
}

function TextComponent() {
  return <div>
    hi there
  </div>
}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 100}}>
    {children}
    </div>
}

export default App
