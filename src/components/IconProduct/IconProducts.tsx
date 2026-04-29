import { ButtonIconProduct } from "./ButtonIconProduct";

import { SlScreenSmartphone } from "react-icons/sl";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";

export function IconProducts() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <ButtonIconProduct icon={<SlScreenSmartphone />} text="CELULARES" />
        <ButtonIconProduct icon={<LiaHeadphonesSolid />} text="ACESSÓRIOS" />
        <ButtonIconProduct icon={<MdOutlineLocalOffer />} text="OFERTAS" />
      </div>
    </div>
  );
}
