import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "@/redux/store";
import { useLogoutMutation } from "@/redux/slices/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";

export default function Header() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(updateCurrentUser({ username: "", balance: 0 }));
      dispatch(updateIsLoggedIn(false));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="h-16 w-full flex justify-between px-3 items-center font-bold border-b">
      <Link to="/">
        <h2>Sasta PayTM</h2>
      </Link>
      <div className="__links flex gap-3">
        {!isLoggedIn ? (
          <>
            {" "}
            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary">Signup</Button>
            </Link>
          </>
        ) : (
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        )}
      </div>
    </header>
  );
}
