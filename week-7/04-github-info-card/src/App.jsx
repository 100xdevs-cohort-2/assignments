import React from "react";
import { RecoilRoot } from "recoil";
import { InputComponent } from "./components/InputComponent";
import { InfoCard } from "./components/InfoCard";

function App() {
  return (
    <>
      <RecoilRoot>
        <InputComponent />
        <InfoCard />
      </RecoilRoot>
    </>
  );
}

export default App;
