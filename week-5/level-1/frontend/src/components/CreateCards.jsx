import React from "react";
import { useState } from "react";

function CreateCards() {
  const [name, setName] = useState("Full Name");
  const [description, setDescription] = useState(
    "lorem ipsum service provider description"
  );
  const [interestOne, setInterestOne] = useState("interest 1");
  const [interestTwo, setInterestTwo] = useState("interest 2");
  const [interestThree, setInterestThree] = useState("interest 3");
  const [LinkedIn, setLinkedIn] = useState("");
  const [Twitter, setTwitter] = useState("");

  const create = () => {};
  return (
    <div className="container h-screen mx-auto flex flex-col justify-between border border-gray-400 py-20">
      <div id="headings" className="flex justify-between mx-[190px]">
        <h1 className="text-4xl">Create</h1>
        <h1 className="text-4xl">Preview</h1>
      </div>
      <div
        id="card-container"
        className="w-[100%] h-[60%] border flex justify-between p-5"
      >
        <div className="card w-[40%] h-min bg-base-100 shadow-xl image-full">
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
            <span>
              <input
                className="bg-inherit text-xl"
                placeholder="Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </span>
            <span>
              <input
                className="bg-inherit text-md w-[300px]"
                placeholder="lorem ipsum service provider description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </span>
            <p>-------------------------------------------</p>
            <h2 className="text-white text-lg">Interests</h2>
            <ul>
              <li>
                <input
                  className="bg-inherit text-md w-[100px]"
                  placeholder="interest 1"
                  onChange={(e) => {
                    setInterestOne(e.target.value);
                  }}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  className="bg-inherit text-md w-[100px]"
                  placeholder="interest 2"
                  onChange={(e) => {
                    setInterestTwo(e.target.value);
                  }}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  className="bg-inherit text-md w-[100px]"
                  placeholder="interest 3"
                  onChange={(e) => {
                    setInterestThree(e.target.value);
                  }}
                ></input>
              </li>
            </ul>
            <div className="flex justify-between">
              <input
                className="bg-inherit text-md py-2"
                placeholder="<Your-linkedIn-link>"
                onChange={(e) => {
                  setLinkedIn(e.target.value);
                }}
              ></input>
              <input
                className="bg-inherit text-md py-2"
                placeholder="<Your-linkedIn-link>"
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="border-r border-dotted my-10"></div>
        <div className="card w-[40%] h-min bg-base-100 shadow-xl image-full">
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
              <li>{interestOne}</li>
              <li>{interestTwo}</li>
              <li>{interestThree}</li>
            </ul>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">LinkedIn</button>
              <button className="btn btn-primary">Twitter</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-red-700 flex justify-center">
        <button className="btn btn-success px-10"> CREATE </button>
      </div>
    </div>
  );
}

export default CreateCards;
