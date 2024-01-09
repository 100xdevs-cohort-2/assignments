import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cardcomponent from "./Cardcompo";

function App() {
  return (
    <>
      <Cardcomponent
        name="Sahil Chauhan"
        description="I am a 100xdevs Cohort student"
        myInterests={["Web development", "App development ", "CP"]}
        linkedin="mylinkedin.com"
        twitter="mytwitter.com"></Cardcomponent>
    </>
  );
}

export default App;
