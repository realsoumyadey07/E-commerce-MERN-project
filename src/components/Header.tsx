import { useEffect, useRef, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const user = { _id: " ", role: "admin" };
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const handleToggleDialog = () => {
    setIsOpen((prev) => !prev);
  };
  const logOutHandle = ()=> {
    setIsOpen(false);
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        event.target !== document.querySelector('.excluded-area')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="header">
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <MdShoppingCart />
      </Link>
      {user?._id ? (
        <div ref={dialogRef}>
          <a onClick={handleToggleDialog} className="excluded-area">
            <FaUser />
          </a>
          <dialog style={{ display: isOpen ? 'flex' : 'none' }} open={isOpen}>
            {user.role === "admin" && (
              <Link onClick={() => setIsOpen(false)} to={"/admin/dashboard"}>
                Dahboard
              </Link>
            )}
            <Link onClick={() => setIsOpen(false)} to={"/order"}>
              Orders
            </Link>
            <button onClick={logOutHandle}>
              <PiSignOutBold />
            </button>
          </dialog>
        </div>
      ) : (
        <Link to={"/login"}>
          <PiSignInBold />
        </Link>
      )}
    </nav>
  );
};

export default Header;
