import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignupMutation } from "@/redux/slices/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup] = useSignupMutation();
  const [signupInput, setSignupInput] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInput((value) => ({ ...value, [e.target.name]: e.target.value }));
    console.log(signupInput);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signup(signupInput).unwrap();
      dispatch(updateIsLoggedIn(true));
      dispatch(updateCurrentUser(response));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-body all-center">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <Input
          name="firstName"
          onChange={handleChange}
          value={signupInput.firstName}
          placeholder="First Name"
          required
        />
        <Input
          name="lastName"
          onChange={handleChange}
          value={signupInput.lastName}
          placeholder="Last Name"
          required
        />
        <Input
          name="email"
          onChange={handleChange}
          value={signupInput.email}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          name="password"
          onChange={handleChange}
          value={signupInput.password}
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
