import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import CreateCards from "./components/CreateCards";
function App() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    // Use axios.get instead of axios.fetch
    setInterval(() => {
      axios
        .get("http://localhost:3000/cards")
        .then((response) => {
          console.log(response.data);
          setCard(response.data.cards);
        })
        .catch((error) => {
          console.error("Error fetching cards:", error);
        });
    }, 10000);
  }, []);
  return (
    <div className="h-[100vh] w-full">
      <CreateCards />
      <Card card={card} />
    </div>
  );
}

export default App;
