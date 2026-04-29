"use client";
import { useMenuHamburger } from "@/src/store/menuHamburger";
import Link from "next/link";
import { GiSmartphone } from "react-icons/gi";

import { RxHamburgerMenu } from "react-icons/rx";

export function MenuHamburger() {
  const useMenu = useMenuHamburger();
  return (
    <>
      <div onClick={() => useMenu.toggleMenu()}>
        <RxHamburgerMenu className="text-2xl" />
      </div>

      {useMenu.isOpen && (
        <div
          onClick={() => useMenu.toggleMenu()}
          className="fixed w-full h-screen bg-black/25 left-0 top-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-0 w-1/3 h-screen py-12 px-6 overflow-y-scroll bg-bg-header flex items-center flex-col "
          >
            <GiSmartphone className="text-5xl text-zul-claro mx-3" />
            <h1 className="text-xl font-bold">
              Mobile<span className="text-zul-claro">Tech</span>
            </h1>
            <div className="flex flex-col justify-center my-10 gap-8">
              <Link href="#">
                <h2 className="font-bold text-md">Produtos</h2>
              </Link>
              <Link href="#">
                <h2 className="font-bold text-md">
                  Sobre <span className="text-zul-claro">a Loja</span>
                </h2>
              </Link>
              <Link href="#">
                <h2 className="font-bold text-md">Suporte</h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
