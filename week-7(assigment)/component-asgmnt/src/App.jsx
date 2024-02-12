/* eslint-disable no-unused-vars */
import "./App.css";
import { ProfileCard } from "./components/01-profile-card/ProfileCard";
import profilePhoto from "./assets/profile-photo.png";
import { BgChanger } from "./components/02-bg-changer/BgChanger";
import { ParaGenerator } from "./components/04-para-generator/ParaGenerator";
import { GitProfile } from "./components/05-GitHb Profile/GitProfile";

const user = {
  username: "Rita Correia",
  age: "32",
  location: "London",
  imgUrl: profilePhoto,
  followers: "80K",
  likes: "803K",
  photos: "1.4K",
};

function App() {
  return (
    <>
      {/* <ProfileCard {...user} /> */}
      {/* <BgChanger /> */}
      {/* <ParaGenerator /> */}
      <GitProfile />
    </>
  );
}

export default App;
