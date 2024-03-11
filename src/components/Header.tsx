import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

const user = { _id: " ", role: "admin" };
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutHandler = () => {
    setIsOpen(false);
  };
  return (
    <nav className="header">
      <Link onClick={()=> setIsOpen(false)} to={"/"}>Home</Link>
      <Link onClick={()=> setIsOpen(false)} to={"/search"}>
        <IoSearchOutline />
      </Link>
      <Link onClick={()=> setIsOpen(false)} to={"/cart"}>
        <BsFillCartCheckFill />
      </Link>
      {user?._id? (
        <>
          <a onClick={()=> setIsOpen((prev) => !prev)}>
            <FaUser />
          </a>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={()=> setIsOpen(false)} to={"/admin/dashboard"}>Admin</Link>
              )}
              <Link onClick={()=> setIsOpen(false)} to={"/orders"}>Order</Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <MdLogin />
        </Link>
      )}
    </nav>
  );
};

export default Header;
