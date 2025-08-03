import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const icons = [
  { id: 0, icon: "📦", label: "Products", path: "/" },
  { id: 1, icon: "🛒", label: "Cart", path: "/cart" },
];

const SideBarLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useSelector((state: RootState) => state.mode);
  console.log(theme);
  const path = useLocation();
  console.log(path);
  useEffect(() => {
    if (path.pathname === "/cart") setActiveIndex(1);
    else setActiveIndex(0);
  }, [path]);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 ml-5">
      <div
        className={`w-16 ${theme === "midnight" ? "bg-gray-800" : "bg-white"}  border-r border-gray-200/50 rounded-3xl mx-auto relative flex flex-col items-center justify-center gap-6 py-4 shadow-md`}
      >
        <div
          className="absolute left-1.5 top-4 w-12 h-12 rounded-2xl transition-all duration-300"
          style={{
            transform: `translateY(${activeIndex * 72}px)`,
            backgroundColor: "var(--accent-color)",
          }}
        ></div>
        {icons.map((item, index) => (
          <div
            key={item.id}
            className="relative z-10 w-12 h-12 flex items-center justify-center cursor-pointer"
            onClick={() => setActiveIndex(index)}
            title={item.label}
          >
            <Link to={item.path}>
              <span className="text-2xl">{item.icon}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarLayout;
