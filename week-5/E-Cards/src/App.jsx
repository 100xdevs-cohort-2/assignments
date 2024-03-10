import './App.css'
import VCard from './components/VCard'

function App() {
  const users = [
    {
      name: "xxxxxxxxxx xxxx",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      interests: ["music", "drawing"],
      socials: { twitter: "xxxxxx.com", linkedIn: "xxxxxx.com" },
    },
    {
      name: "xxxxxxxxxx xxxx",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      interests: ["music", "drawing"],
      socials: { twitter: "xxxxxx.com", linkedIn: "xxxxxx.com" },
    },
    {
      name: "xxxxxxxxxx xxxx",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      interests: ["music", "drawing"],
      socials: { twitter: "xxxxxx.com", linkedIn: "xxxxxx.com" },
    }
  ]
  const user = {
    name: "xxxxxxxxxx xxxx",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    interests: ["music", "drawing"],
    socials: { twitter: "xxxxxx.com", linkedIn: "xxxxxx.com" },
  }
  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>User Profiles</h1>
      </header>
      <div className="profiles" style={{ margin: "20px" }}>
        <div className="card-deck" style={{ display: "flex", flexDirection: "row" }}>
          {users.map((user) => <VCard user={user} />)}
        </div>
      </div>

    </>
  )
}

export default App
