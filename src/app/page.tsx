import { register } from "swiper/element/bundle";
import { Banner } from "../components/Banner/Banner";
import { Header } from "../components/Header/Header";
import { IconItems } from "../components/IconProduct/IconItems";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { ProductCard } from "../components/Products/ProductCard";
import { BannerSecond } from "../components/BannerSecond/BannerSecond";
import { Footer } from "../components/Footer/Footer";
import { ProductsScroll } from "../components/ProductsScroll/ProductsScroll";

register();

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <IconItems />
      <div className="flex justify-between items-center m-3 text-[12px] font-bold max-w-5xl lg:mx-auto lg:text-[14px]">
        <p className="">PRODUTOS EM DESTAQUE</p>
        <Link href="#" className="flex items-center gap-1 text-[#0d50fa]">
          VER TODOS <IoIosArrowForward />
        </Link>
      </div>
      <ProductsScroll />
      <BannerSecond />
      <Footer />
    </div>
  );
}
