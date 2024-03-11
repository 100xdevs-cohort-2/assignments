import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/slices/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [loginInput, setLoginInput] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(loginInput).unwrap();
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
          name="email"
          onChange={handleChange}
          value={loginInput.email}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          name="password"
          onChange={handleChange}
          value={loginInput.password}
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  );
}
