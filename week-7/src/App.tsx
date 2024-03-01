import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfileCard from "./pages/ProfileCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCard/>} />
      </Routes>
    </>
  );
}

export default App;
