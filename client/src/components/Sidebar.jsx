import { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <Menu
      right
      width={"15em"}
      isOpen={isMenuOpen}
      onStateChange={handleStateChange}
    >
      <Link className="menu-item" to="/" onClick={handleCloseMenu}>
        <span>Home</span>
      </Link>

      <Link
        className="menu-item"
        to="/password-generator"
        onClick={handleCloseMenu}
      >
        Password Generator
      </Link>

      <Link className="menu-item" to="/notes" onClick={handleCloseMenu}>
        Notes
      </Link>

      <Link
        className="menu-item"
        to="/students"
        disabled
        onClick={handleCloseMenu}
      >
        Coming Soon
      </Link>
    </Menu>
  );
};

export default Sidebar;
