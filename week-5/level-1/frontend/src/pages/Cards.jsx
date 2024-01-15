import React from "react";
import CreateCards from "../components/CreateCards";
import AllCards from "../components/AllCards";
import { useAuth } from "../contexts/userContext";

function Cards() {
  // const { userData } = useAuth();

  return (
    <>
      <CreateCards />
      {/* {userData && userData.role === "admin" ? (
        <CreateCards />
      ) : (
        <div className="container h-screen mx-auto flex flex-col border border-gray-400">
          <AllCards />
        </div>
      )} */}
    </>
  );
}

export default Cards;
