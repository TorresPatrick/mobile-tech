import Image from "next/image";
import img from "@/public/banner ipho 15.png";

export function Banner() {
  return (
    <div className="m-3">
      <div className="bg-linear-to-r from-[#010b17] via-[#091b32] to-[#102d52] rounded-2xl p-3 pb-0 pt-0 flex">
        <Image src={img} alt="foto" />
      </div>
    </div>
  );
}
