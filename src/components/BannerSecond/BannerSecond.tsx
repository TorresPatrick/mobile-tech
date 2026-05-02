import Image from "next/image";
import bannerSecond from "@/public/ACESSÓRIOS.png";
import bannerSecond2 from "@/public/ACESSÓRIOS 2.png";

export function BannerSecond() {
  return (
    <>
      <div className="max-w-5xl mx-3 mt-2 lg:mx-auto lg:max-w-3xl">
        <Image
          src={bannerSecond}
          alt="banner acessório"
          className="rounded-2xl mb-2"
        />

        <Image
          src={bannerSecond2}
          alt="banner acessório"
          className="rounded-2xl mb-4"
        />
      </div>
    </>
  );
}
