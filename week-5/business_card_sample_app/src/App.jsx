import { useEffect, useState } from "react";
import { BusinessCard } from "./components/business_card";
import axios from "axios";

function App() {
  const [cards, setCardsList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3890/business-cards").then((response) => {
      console.log(response.data.businessCards);
      const resData = mapApiResponse(response);
      setCardsList(resData);
    });
  }, []);

  return (
    <div style={styles.cards}>
      {cards.map((card) => (
        <BusinessCard
          name={card.name}
          description={card.description}
          interests={card.interests}
          Socials={card.Socials}
        ></BusinessCard>
      ))}
    </div>
  );
}

function mapApiResponse(response) {
  return response.data.businessCards.map((response) => ({
    name: response.name,
    description: response.description,
    interests: response.interests,
    Socials: response.socialLinks.map((resLink) => ({
      link: resLink.url,
      name: resLink.name,
    })),
  }));
}

export default App;

const styles = {
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
};
