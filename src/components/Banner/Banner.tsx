"use client";

import Image from "next/image";
import bannerIphone from "@/public/banner iphone 15.png";
import bannerIAcessorios from "@/public/banner acessorios 2.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";

export function Banner() {
  return (
    <div className="m-3">
      <div className="max-w-5xl mx-auto relative z-0">
        <Swiper
          className="relative z-0"
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
        >
          <SwiperSlide>
            <Image
              src={bannerIphone}
              alt="banner iphone"
              className="rounded-2xl w-full"
              priority
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={bannerIAcessorios}
              alt="banner acessórios"
              className="rounded-2xl w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
