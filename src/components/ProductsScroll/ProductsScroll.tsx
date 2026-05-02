import { ProductCard } from "../Products/ProductCard";

import image from "@/public/iphone 15 pro max.png";

export function ProductsScroll() {
  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar px-3 snap-x snap-mandatory lg:flex lg:justify-center">
      <div className=" snap-start">
        <ProductCard
          image={image}
          nameProduct="Iphone 15 Pro Max"
          description="256GB - Titânio Preto"
          price={8999}
        />
      </div>

      <div className=" snap-start">
        <ProductCard
          image={image}
          nameProduct="Iphone 15 Pro Max"
          description="256GB - Titânio Preto"
          price={8999}
        />
      </div>

      <div className=" snap-start">
        <ProductCard
          image={image}
          nameProduct="Iphone 15 Pro Max"
          description="256GB - Titânio Preto"
          price={8999}
        />
      </div>

      <div className="snap-start">
        <ProductCard
          image={image}
          nameProduct="Iphone 15 Pro Max"
          description="256GB - Titânio Preto"
          price={8999}
        />
      </div>
    </div>
    // <div className="flex">

    //   <ProductCard
    //     image={image}
    //     nameProduct="Iphone 15 Pro Max"
    //     description="256GB - Titânio Preto"
    //     price={8999}
    //   />

    //   <ProductCard
    //     image={image}
    //     nameProduct="Iphone 15 Pro Max"
    //     description="256GB - Titânio Preto"
    //     price={8999}
    //   />

    //   <ProductCard
    //     image={image}
    //     nameProduct="Iphone 15 Pro Max"
    //     description="256GB - Titânio Preto"
    //     price={8999}
    //   />

    //   <ProductCard
    //     image={image}
    //     nameProduct="Iphone 15 Pro Max"
    //     description="256GB - Titânio Preto"
    //     price={8999}
    //   />
    // </div>
  );
}
