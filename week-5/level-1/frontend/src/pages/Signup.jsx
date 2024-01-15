import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Email and Password required");
    } else {
      try {
        let userLogin = await axios.post("http://localhost:3000/admin/signup", {
          username: email,
          password: password,
        });
        if (userLogin.status === 200) {
          localStorage.setItem("token", userLogin.data.token);
          navigate("/cards");
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
            <h1 className="text-5xl font-bold">New here ?</h1>
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
                <label className="label">
                  <a
                    onClick={() => {
                      navigate("/");
                    }}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Already registered? Login here
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Add a carousal with business cards examples */}
    </div>
  );
}

export default Signup;
