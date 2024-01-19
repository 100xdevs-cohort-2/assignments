import React from "react";
import CreateCards from "../components/CreateCards";
import AllCards from "../components/AllCards";
import { useAuth } from "../contexts/userContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Cards() {
  const [allCards, setAllCards] = useState([]);
  const { userData } = useAuth();

  const fetchData = async () => {
    const token = userData.token;
    try {
      const response = await axios.get(
        "http://localhost:3000/user/get-all-cards",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.status == 200) {
        setAllCards(response.data);
      }
    } catch (error) {
      console.error("Error fetching all cards", error);
      alert("Error fetching all cards");
    }
  };

  useEffect(() => {
    if (userData) {
      fetchData();
    }
  }, [userData]);
  //userData in the Dependency array solves the 'Data lost on refresh' issue in AllCards component

  return (
    <>
      {userData && userData.role === "admin" ? (
        <CreateCards />
      ) : (
        <div className="container h-content mx-auto flex flex-col border border-gray-400 rounded-xl">
          <AllCards allCards={allCards} />
        </div>
      )}
    </>
  );
}

export default Cards;
