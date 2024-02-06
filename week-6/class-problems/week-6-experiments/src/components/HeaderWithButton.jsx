import { useState } from "react";
import { Header } from "./Header";

export const HeaderWithButton = () => {
  const [title, setTitle] = useState("My name is Shiv");
  const clickHandler = () => {
    const value = Math.random();
    setTitle("My name is " + value);
  };
  return (
    <div>
      <button onClick={clickHandler}>CLICK</button>
      <Header title={title} />
    </div>
  );
};
