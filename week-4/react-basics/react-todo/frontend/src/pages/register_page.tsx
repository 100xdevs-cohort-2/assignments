import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//In react-router-dom v6 useHistory() is replaced by useNavigate()

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signIn = async (): Promise<void> => {
    if (!username || !password) return;
    // Sends username and password to server for verification
    try {
      const userFound = await axios.post("http://localhost:3000/user/login", {
        username: username,
        password: password,
      });

      if (userFound.status === 200) {
        const token = userFound.data.token;
        localStorage.setItem("token", token); // Stores the token for other frontend components to use
        navigate("/todos"); //? - history.push('/') before v6 - to send the user to home / todos page

        console.log("axios.post data: ", userFound.data);
      } else if (userFound.status === 409) {
        alert("User not found!");
      } else if (userFound.status === 403) {
        alert("Wrong password!");
      } else {
        alert(`${userFound.status}: ${userFound.statusText}`);
      }
    } catch (error) {
      alert("500: Internal server error!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-[30%] h-[40%] flex flex-col justify-between items-center border border-white p-4">
        <h1 className="text-3xl my-4">Sign in</h1>
        <input
          type="text"
          placeholder="Username"
          className="mb-2 p-2 border rounded-lg"
          onChange={handleUsername}
        />
        <input
          type="text"
          placeholder="Password"
          className="mb-2 p-2 border rounded-lg"
          onChange={handlePassword}
        />
        <button
          className="bg-blue-900 text-white px-8 py-2 rounded-xl"
          onClick={signIn}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
