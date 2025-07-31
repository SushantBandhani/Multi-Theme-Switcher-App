import { FiSettings } from "react-icons/fi";
import Modal from "./Modal";
import useSettingsToggle from "../hooks/useSettingsToggle";

const Navbar = () => {
    const { isOpen, handleToggle, settingsRef } = useSettingsToggle();

    return (
        <nav className="flex justify-between items-center bg-white dark:bg-gray-800 text-black dark:text-white border-b border-gray-200/50 py-4 px-7 sticky top-0 z-30 shadow shadow-gray-400 dark:shadow-black">
            <span className="text-xl font-semibold">Navbar</span>

            <div className="relative" ref={settingsRef}>
                <button onClick={handleToggle}>
                    <FiSettings
                        className={`text-2xl cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-45" : ""
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
