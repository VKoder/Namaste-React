import logo from "../Images/Logo.png";

// HEADER COMPONENT
const Header = () => (
  <div className="header">
    <div className="hleft">
      <img src={logo}></img>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-fill"></i>
      </div>
    </div>
  </div>
);

export default Header;
