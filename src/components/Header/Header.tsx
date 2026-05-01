import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MenuHamburger } from "./components/MenuHamburger";
import { Logo } from "./components/Logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-bg-header text-white">
      <div className="flex items-center mx-2 p-3 justify-between ">
        <div className="flex items-center">
          <div className="flex-1 lg:hidden">
            <MenuHamburger />
          </div>
          <Logo />
        </div>

        <div className="hidden lg:block">
          <div className="flex flex-col justify-center my-10 gap-8 lg:my-0 lg:flex-row">
            <Link href="#">
              <h2 className="font-bold text-md">Produtos</h2>
            </Link>
            <Link href="#">
              <h2 className="font-bold text-md">Sobre a Loja</h2>
            </Link>
            <Link href="#">
              <h2 className="font-bold text-md">Suporte</h2>
            </Link>
          </div>
        </div>

        <div className="flex text-2xl gap-3">
          <IoSearch className="hidden lg:block lg:mr-2" />
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
