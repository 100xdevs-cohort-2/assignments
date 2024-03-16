import "./App.css";
import Card from "./component/Card";

function App() {
  const list = [
    {
      name: "asdfas",
      description: "He is decent boy.",
      interests: ["Playing", "Swimming", "dancing"],
      linkedIn: "https:/linkedIn",
      twitter: "https://twitter",
    },
    {
      name: "sdfh",
      description: "She is decent girl.",
      interests: ["Playing", "dancing"],
      linkedIn: "https:/linkedIn",
      twitter: "https://twitter",
    },
    {
      name: "asdfasd as d",
      description: "He is decent boy.",
      interests: ["Playing", "Swimming", "dancing"],
      linkedIn: "https:/linkedIn",
      twitter: "https://twitter",
    },
  ];

  console.log(list[0]);
  return (
    <div className="app">
      {list.map((listItem) => (
        <Card key={list.name} listItem={listItem} />
      ))}
    </div>
  );
}

export default App;
