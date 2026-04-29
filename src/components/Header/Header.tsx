import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MenuHamburger } from "./components/MenuHamburger";
import { Logo } from "./components/Logo";

export function Header() {
  return (
    <header className="bg-bg-header text-white">
      <div className="flex items-center mx-2 p-3 justify-between ">
        <div className="flex items-center">
          <MenuHamburger />
          <Logo />
        </div>

        <div className="flex text-2xl gap-3">
          <IoSearch className="hidden" />
          <div className="flex realtive">
            <span className="bg-[#0554fc] text-white text-sm rounded-full w-5 h-5 absolute top-5 right-3 flex justify-center items-center">
              0
            </span>
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
}
