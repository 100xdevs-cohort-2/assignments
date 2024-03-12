import axios from "axios";
import { useEffect, useState } from "react";

export const Assignment5 = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  async function getData() {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${id}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <input
        type="text"
        placeholder="Enter Your Github Id"
        onChange={(e) => setId(e.target.value)}
        style={{ border: "black 2px solid" }}
      />
      {user && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <h1>{user.login}</h1>
          <img
            src={user.avatar_url}
            alt="User Avatar"
            style={{ height: "100px", width: "100px", borderRadius: "100px" }}
          />
          {user.email && <h1>Email: {user.email}</h1>}
          <h2>{user.name}</h2>
          <div style={{ display: "flex", gap: "3rem" }}>
            <h4>Followers {user.followers}</h4>
            <h4>Following {user.following}</h4>
          </div>
          <a href={`https://github.com/${user.login}`}>Go to My Profile</a>
        </div>
      )}
    </div>
  );
};

export default Assignment5;
