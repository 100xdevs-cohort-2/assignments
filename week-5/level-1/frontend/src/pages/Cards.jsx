import React, { useEffect, useState } from "react";
import CreateCards from "../components/CreateCards";
import AllCards from "../components/AllCards";
import axios from "axios";

function Cards() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    try {
      const cards = await axios.get(
        "http://localhost:3000/user/get-all-cards",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (cards.status == 200) {
        console.log(cards.data);
        setCards(cards.data);
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CreateCards></CreateCards>
      <div className="container h-screen mx-auto flex flex-col border border-gray-400">
        <AllCards cards={cards}></AllCards>
      </div>
    </>
  );
}

export default Cards;
