import axios from "axios";
import { useEffect, useState } from "react";

export const Assignment5 = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  async function getData() {
    try {
      const { data } = await axios.get(`https://api.github.com/users/CS50X-RGB`);
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
    <>
      <input
        type="text"
        placeholder="Enter Your Github Id"
        onChange={(e) => setId(e.target.value)}
      />
      {user && (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="User Avatar" style={{height : "100px",width : "100px",borderRadius : "100px"}} />
            {user.email ?  <h1>{user.email}</h1> : <></>}
          </div>
        </>
      )}
    </>
  );
};

export default Assignment5;
