import { GiSmartphone } from "react-icons/gi";

export function Logo() {
  return (
    <>
      <GiSmartphone className="text-6xl text-zul-claro" />
      <div>
        <h1 className="text-xl font-bold">
          Mobile<span className="text-zul-claro">Tech</span>
        </h1>
        <p className="text-[10px]">SUA LOJA DE CELULARES</p>
      </div>
    </>
  );
}
