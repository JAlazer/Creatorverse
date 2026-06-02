import { NavLink } from "react-router";

export default function TitleCard() {
  return (
    <header>
      <h1>Creatorverse</h1>
      <nav>
        <NavLink to="/">
          <button>VIEW ALL CREATORS</button>
        </NavLink>
        <NavLink to="/add">
          <button>ADD A CREATOR</button>
        </NavLink>
      </nav>
    </header>
  );
}
