import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/posts">Posts</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
