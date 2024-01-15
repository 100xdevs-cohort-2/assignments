import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/userContext";

function Login() {
  //Brings in the context
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Role");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Email and Password required");
    } else {
      try {
        let loginRequest = await axios.post(
          `http://localhost:3000/${role}/login`,
          {
            username: email,
            password: password,
          }
        );
        if (loginRequest.status === 200) {
          const token = loginRequest.data.token;
          localStorage.setItem("token", token);
          login({ token, role }); //sets user context
          navigate("/cards");
        } else if (loginRequest.status === 409) {
          alert("please register first");
          navigate("/signup");
        }
      } catch (error) {
        console.error("Login failed", error.message);
      }
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">One stop business cards solutions</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={submitHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn w-[100%] justify-start mt-3"
                >
                  {role}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a
                      onClick={() => {
                        setRole("user");
                      }}
                    >
                      user
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setRole("admin");
                      }}
                    >
                      admin
                    </a>
                  </li>
                </ul>
              </div>
              <label className="label">
                <a
                  onClick={() => navigate("/signup")}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  There is always a first time, register here!
                </a>
              </label>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
