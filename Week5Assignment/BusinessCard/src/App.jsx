
function App() {
  // const [count, setCount] = useState(15);

  // return (
  //   <div>
  //     <div>Counter is at {count}</div>
  //     <button onClick={() => {
  //       setCount(function(c) {
  //         return c-1;
  //       })
  //     }}>Decrement</button>
  //     <button onClick={() =>{
  //       setCount(function(c) {
  //         return c-1;
  //       });
  //     }}>Increment</button>
  //   </div>
    
  // )
  const name = "Somdeb Datta";
  const description = "I'm a software developer";
  const linkedin = "https://www.linkedin.com/in/somdeb-datta-1099/";
  const github = "https://github.com/SomdebDatta";
  const interests = ["Football", "UFC"]

  return (
    <div>
      <BusinessCard name={name} description={description} linkedin={linkedin} github={github} interests={interests} />
    </div>
  )

}

function BusinessCard({name, description, linkedin, github, interests}) {


  return <div>
    <h1 style={{fontSize: "40px"}}>{name}</h1>
    <div style={{fontSize: "25px"}}>{description}</div>
    <div>
      <h2 style={{fontSize: "30px"}}>Interests</h2>
      <ul style={{listStyleType: "none", padding:0, fontSize: "25px"}}>
        {interests.map((interest, index) => (<li key={index}>{interest}</li>))}
      </ul>
    </div>
    <div>
      <button style={{backgroundColor: "#387ed1", color:"white", padding: 10}}>LinkedIn</button>
      <button style={{backgroundColor:"#387ed1", color:"white", padding: 10}}>GitHub</button>
    </div>
  </div>

}

export default App
