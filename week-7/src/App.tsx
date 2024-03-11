import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfileCard from "./pages/ProfileCard";
import ColorChanger from "./pages/ColorChanger";
import Header from "./components/Header";
import "./App.css";
import ParagraphGen from "./pages/ParagraphGen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCard />} />
        <Route path="/color-changer" element={<ColorChanger />} />
        <Route path="/paragraph-gen" element={<ParagraphGen/>} />
      </Routes>
    </>
  );
}

export default App;
