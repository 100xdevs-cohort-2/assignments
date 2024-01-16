/* eslint-disable no-unused-vars */
import "./App.css";
import { ProfileCard } from "./components/ProfileCard";
import profilePhoto from "./assets/profile-photo.png";
import { BgChanger } from "./components/BgChanger";

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
    </>
  );
}

export default App;
