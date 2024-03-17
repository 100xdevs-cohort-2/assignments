//import Assignment1 from "./components/Assignment1";
import "./index.css";
import { RecoilRoot } from "recoil";
//import Assignment5 from "./components/Assignment5";
import { EnterMobile, OTP } from "./components/Assignment6/EnterMobile";

function App() {
  return (
    <>
      <RecoilRoot>
        <EnterMobile/>
        <OTP/>
      </RecoilRoot>
    </>
  );
}

export default App;
