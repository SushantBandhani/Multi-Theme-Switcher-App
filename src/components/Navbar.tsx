import { FiSettings } from "react-icons/fi";
import Modal from "./Modal";
import useSettingsToggle from "../hooks/useSettingsToggle";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router";

// This component renders navbar page and also helps to switch theme
const Navbar = () => {
  const { isOpen, handleToggle, settingsRef } = useSettingsToggle();
  const itemsInCart = useSelector((state: RootState) => state.cart.data);

  return (
    <nav className="flex justify-between items-center bg-white dark:bg-gray-800 text-black dark:text-white border-b border-gray-200/50 py-4 px-7 sticky top-0 z-30 shadow shadow-gray-400 dark:shadow-black mb-4">
      <span className="text-xl font-semibold">Multi-Theme Switch</span>
      <div className="relative cursor-pointer">
        <Link to="/cart">
          <BiCart className="text-5xl"></BiCart>
          {itemsInCart.length > 0 && (
            <div className="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs w-5 h-5 p-2.5 flex items-center justify-center rounded-full border border-gray-900">
              {itemsInCart.length}
            </div>
          )}
        </Link>
      </div>

      <div className="relative" ref={settingsRef}>
        <button onClick={handleToggle}>
          <FiSettings
            className={`text-2xl cursor-pointer transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2">
            <Modal />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
