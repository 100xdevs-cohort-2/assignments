import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 w-full flex justify-between px-3 items-center font-bold border-b">
      <Link to="/">
        <h2>Sasta PayTM</h2>
      </Link>
      <div className="__links flex gap-3">
        <Link to="/login">
          <Button variant="secondary">Login</Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary">Signup</Button>
        </Link>
      </div>
    </header>
  );
}
