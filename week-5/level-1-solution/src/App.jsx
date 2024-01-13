import "./App.css"
function App() {

  const details = {
    name : "Tanishq",
    description : "Hi this is me, Tanishq.",
    socials : ["LinkedIn", "Twitter"],
    interests : ["App Dev", "Open Source", "Web Dev"]
  }
  return (
    <>
      <Card details={details}></Card>
    </>
  )
}

function Card({details}) {
  return <div className="card">
    <h2>{details.name}</h2>
    <p>{details.description}</p>
    <h3>Interests</h3>
    {details.interests.map(function (interest) {
      return <p key={interest}>{interest}</p>
    })}
    {details.socials.map(function(social) {
      return <button key={social}>{social}</button>
    })}
  </div>
}

export default App
