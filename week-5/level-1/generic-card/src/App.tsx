import { useState } from "react";
import AddCard from "./custom-components/AddCard";
import CardComponent from "./custom-components/CardComponent";
import { CardComponentProps } from "./interfaces/card";

function App() {
  const [cardList, setCardList] = useState<CardComponentProps[]>([]);

  return (
    <>
      <div className="flex  pt-10">
        <AddCard setCardList={setCardList} />
        <div className="flex flex-wrap gap-5">
          {cardList.map((card, i) => (
            <CardComponent key={i} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
