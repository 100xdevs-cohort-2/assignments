import React, { useEffect } from "react";

function AllCards({ allCards }) {
  useEffect(() => {
    console.log("allCards in useEffect:", allCards);
  }, [allCards]);

  console.log("All cards in the component", allCards);

  return (
    <>
      {allCards.map((card) => (
        <div className="flex flex-col p-5" key={card.id}>
          <div>
            <h1>{card.name}</h1>
          </div>
          <div className="card w-[40%] h-min bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
              <h1 className="card-title text-white">{card.name}</h1>
              <p>{card.description}</p>
              <p>-------------------------------------------</p>
              <h2 className="text-white text-lg">Interests</h2>
              <ul>
                <li>{card.interest[0]}</li>
                <li>{card.interest[1]}</li>
                <li>{card.interest[2]}</li>
              </ul>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">
                  <a
                    href={card.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </button>
                <button className="btn btn-primary">
                  <a
                    href={card.social.Twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AllCards;
