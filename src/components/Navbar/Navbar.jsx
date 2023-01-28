import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <ul id="" className="">
          <li>
            <a href="/" className="brand">
              sahil
            </a>
          </li>
          <li className="right">
            <div className="social-wrapper">
              <a
                href="https://twitter.com/messages/compose?recipient_id=763040225551536128&text=Hi%20there,%20"
                className="navlink"
              >
                Let's talk
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
