import "./App.css"

function App() {
  var name = "Shreyash"
  var skills = ["Merna" , "Node" , "Express"]
  return ( 
    <div className="App">
      <div>{name}</div>
      <div>
        {skills.map((e) => {
          return <Skill skills={e}></Skill>
        })}
      </div>
    </div>
  );
}

function Skill(props)
{
  return <p className="color">Skills : {props.skills}</p>

}

export default App;
