import React, { useState } from "react";
import axios from "axios";

function AllCards({ cards }) {
  const [name, setName] = useState("Full Name");
  const [description, setDescription] = useState(
    "lorem ipsum service provider description"
  );
  const [interest, setInterest] = useState([
    "interest 1",
    "interest 2",
    "interest 3",
  ]);
  const [social, setSocial] = useState({});

  return (
    <div className=" flex flex-col p-5">
      {" "}
      <div>
        <h1>All Cards</h1>
      </div>
      <div className="card w-[40%] h-min bg-base-100 shadow-xl image-full ">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="avatar">
            <div className="w-20 rounded-full ">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="card-title text-white">{name}</h1>
          <p>{description}</p>
          <p>-------------------------------------------</p>
          <h2 className="text-white text-lg">Interests</h2>
          <ul>
            <li>{interest[0]}</li>
            <li>{interest[1]}</li>
            <li>{interest[2]}</li>
          </ul>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">LinkedIn</button>
            <button className="btn btn-primary">Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCards;
