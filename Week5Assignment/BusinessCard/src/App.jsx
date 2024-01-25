
function App() {
  // const [count, setCount] = useState(15);

  // return (
  //   <div>
  //     <div>Counter is at {count}</div>
  //     <a href="" onClick={() => {
  //       setCount(function(c) {
  //         return c-1;
  //       })
  //     }}>Decrement</a href="">
  //     <a href="" onClick={() =>{
  //       setCount(function(c) {
  //         return c-1;
  //       });
  //     }}>Increment</a href="">
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


  return <div style={{boxShadow: "1px 0px 5px", borderRadius: "5px", marginRight: "450px", marginLeft: "400px",
  marginTop: "50px"}}>
    <br></br>
    <br></br>
    <div style={{marginLeft: "10px"}}>
      <h1 style={{fontSize: "40px"}}>{name}</h1> 
      <div style={{fontSize: "25px"}}>{description}</div>
      <div>
        <h2 style={{fontSize: "30px"}}>Interests</h2>
        <ul style={{listStyleType: "none", padding:0, fontSize: "25px"}}>
          {interests.map((interest, index) => (<li key={index}>{interest}</li>))}
        </ul>
      </div>
      <a href={linkedin} target="_blank" 
      style={{backgroundColor: "#387ed1", color: "white", padding: 10, borderRadius: "5px",
      textDecoration: "none", marginRight: "10px"}}>LinkedIn</a>
      <a href={github} target="_blank" 
      style={{backgroundColor:"#387ed1", color: "white", padding: 10, borderRadius: "5px",
      textDecoration: "none"}}>GitHub</a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </div>

}

export default App
