import "./gitProfile.css";
import axios from "axios";
import { useState } from "react";
import { ProfileCard } from "./ProfileCard";

export const GitProfile = () => {
  const [gitProfileName, setGitProfileName] = useState("");
  const [profileStats, setProfileStats] = useState(null);

  function fetchProfileData() {
    axios
      .get(`https://api.github.com/users/${gitProfileName}`)
      .then((res) => {
        setProfileStats(res.data);
        setGitProfileName("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick() {
    fetchProfileData();
  }
  // useEffect(() => {

  // }, [gitProfileName]);

  return (
    <div className="container">
      <input
        type="text"
        name="git-profile-name"
        id="git-profile-name"
        placeholder={gitProfileName}
        onChange={(e) => setGitProfileName(e.target.value)}
      />
      <button onClick={handleClick}>Generate Card</button>
      {profileStats ? (
        <ProfileCard
          username={profileStats.login}
          age={profileStats.id}
          location={profileStats.location}
          imgUrl={profileStats.avatar_url}
          followers={profileStats.followers}
          following={profileStats.following}
          repositories={profileStats.public_repos}
        />
      ) : (
        ""
      )}
    </div>
    // <ProfileCard
    //   username={profileStats.login}
    //   age={profileStats.id}
    //   location={profileStats.location}
    //   imgUrl={profileStats.avatar_url}
    //   followers={profileStats.followers}
    //   following={profileStats.following}
    //   repositories={profileStats.public_repos}
    // />
  );
};
