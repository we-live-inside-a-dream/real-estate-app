import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./navbar.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const number = useNotificationStore((state) => state.number);
  const fetch = useNotificationStore((state) => state.fetch);

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Agents</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpeg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to={"/login"}>Sign in</Link>
            <Link to={"/register"} className="sign-up">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
          <Link to={"/"}>Agents</Link>
          <Link to={"/"}>Sign in</Link>
          <Link to={"/"}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
