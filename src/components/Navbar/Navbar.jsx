import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper">
          <ul id="" className="">
            <li>
              <a href="" style={{ fontWeight: "600" }}>
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li className="right">
              <a href="" className="cta">
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
