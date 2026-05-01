import { register } from "swiper/element/bundle";
import { Banner } from "../components/Banner/Banner";
import { Header } from "../components/Header/Header";
import { IconItems } from "../components/IconProduct/IconItems";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

register();

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <IconItems />
      <div className="flex justify-between items-center m-3 text-[12px] font-bold">
        <p className="">PRODUTOS EM DESTAQUE</p>
        <Link href="#" className="flex items-center gap-1 text-[#0d50fa]">
          VER TODOS <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
