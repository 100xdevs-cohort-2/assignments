import { useState } from "react";
import CardComponent from "./components/CardComponent";

function App() {
  const cardProps = {
    name: "Hashir",
    work: "TA at Coding Ninjas",
    interests: ["Ionic", "OpenSource", "AppDev"],
  };

  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [interests, setInterests] = useState([]);

  const createCard = (props) => {
    document.appendChild(<CardComponent props={props} />);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInterests = interests.split(" ");

    const props = {
      name: name,
      work: work,
      interests: allInterests,
    };

    // return <CardComponent props={props} />;

    return createCard(props);
  };

  return (
    <>
      <div className="mt-10 items-center justify-center  flex">
        <form
          className=" flex items-center justify-center gap-x-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="text-lg">Name: </label>
          <input
            type="text"
            className="border-2 border-emerald-400"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Work: </label>
          <input
            type="text"
            className="border-2 border-emerald-400"
            onChange={(e) => setWork(e.target.value)}
          />
          <label>Interests: </label>
          <input
            type="text"
            className="border-2 border-emerald-400"
            onChange={(e) => setInterests(e.target.value)}
          />
          <button
            type="submit"
            className="bg-emerald-400 text-white px-4 py-2 rounded-lg"
          >
            Make my Card !
          </button>
        </form>
      </div>
      <main className="grid grid-cols-3 mt-9 ml-3"></main>
    </>
  );
}

export default App;
