import Image from "next/image";
import { StaticImageData } from "next/image";

import { FiShoppingCart } from "react-icons/fi";

type ProductCardProps = {
  nameProduct: string;
  description: string;
  price: number;
  image: string | StaticImageData;
};

export function ProductCard({
  image,
  nameProduct,
  description,
  price,
}: ProductCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className=" px-2 py-1 ml-3 w-35 bg-[#fefefe] border-2 border-[#eff1f5] rounded-xl ">
        <div>
          <Image src={image} alt="Foto celular" />
          <h1 className="text-[12px] font-bold whitespace-nowrap">
            {nameProduct}
          </h1>
          <p className="text-[11px] font-light mb-2">{description}</p>

          <h3 className="text-azul-claro font-bold">{formatCurrency(price)}</h3>
          <p className="text-[11px]  mb-2">ou 10x de R$ {price / 10}</p>
          <div className="flex gap-3 justify-center items-center text-azul-claro font-semibold border border-azul-claro px-3 py-1 mb-2 rounded-lg">
            <button className="text-[14px]">VER MAIS </button>
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
