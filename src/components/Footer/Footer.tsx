import { GoShieldCheck } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { LiaHeadsetSolid } from "react-icons/lia";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="bg-[#f1f3f7] mx-3 text-sm mb-3 p-2 max-w-5xl rounded-2xl lg:p-4 lg:mx-auto lg:flex lg:justify-between">
        <div className="flex justify-around items-center mb-2 ">
          <div className="flex items-center gap-2 ">
            <GoShieldCheck className="text-4xl lg:text-6xl" />
            <div>
              <h1 className="font-bold text-[12px] lg:text-lg text-azul-claro">
                Compra Segura
              </h1>
              <p className="text-[12px] lg:text-[14px]">
                Seus dados protegidos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:ml-5">
            <LiaCertificateSolid className="text-4xl lg:text-6xl" />
            <div>
              <h1 className="font-bold text-[12px] lg:text-lg text-azul-claro">
                Produtos Originais
              </h1>
              <p className="text-[12px] lg:text-[14px]">Garantia de fábrica</p>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <div className="flex items-center gap-2 lg:mr-5">
            <CiCreditCard1 className="text-4xl lg:text-6xl" />
            <div>
              <h1 className="font-bold text-[12px] lg:text-lg text-azul-claro">
                Parcele em até 10X
              </h1>
              <p className="text-[12px] lg:text-[14px]">No cartão de crédito</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LiaHeadsetSolid className="text-4xl lg:text-6xl" />
            <div>
              <h1 className="font-bold text-[12px] lg:text-lg text-azul-claro">
                Atendimento 24hrs
              </h1>
              <p className="text-[12px] lg:text-[14px]">Para te ajudar</p>
            </div>
          </div>
        </div>
      </footer>

      <p className="flex justify-center mb-2">
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href="/">MobileTech</Link>
      </p>
    </>
  );
}
