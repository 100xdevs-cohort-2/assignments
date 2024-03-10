import "./App.css";

function App() {
  const details = {
    name: "Sivasai",
    description: "Hellow world",
    handles: {
      Linkedin: "https://linkedin.com/in/sivasaisilla",
      Twitter: "https://twitter.com/_siva_sai",
    },
    interests: "Cricket, Badminton",
  };

  return (
    <>
      <Card data={details}></Card>
    </>
  );
}

function Card({ data }) {
  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <span><a href={data.handles.Linkedin} target="_blank">Linkedin</a></span>
      <span><a href={data.handles.Twitter} target="_blank">Twitter</a></span>
      <p>{data.interests.split(",").join("")}</p>
    </div>
  );
}

export default App;
