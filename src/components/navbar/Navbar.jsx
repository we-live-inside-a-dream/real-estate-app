import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Agents</a>
      </div>
      <div className="right">
        <a>Sign in</a>
        <a>Sign up</a>
      </div>
    </nav>
  );
}

export default Navbar;
