//import Assignment1 from "./components/Assignment1";
import Assignment4 from "./Assignment4";
import "./index.css";
import { RecoilRoot } from "recoil";
import Assignment5 from "./components/Assignment5";

function App() {
  return (
    <>
      <RecoilRoot>
        <Assignment4 />
        <Assignment5 />
      </RecoilRoot>
    </>
  );
}

export default App;
