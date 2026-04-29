type ButtonIconProduct = {
  text: string;
  icon: React.ReactNode;
};

export function ButtonIconProduct({ text, icon }: ButtonIconProduct) {
  return (
    <div className="m-3">
      <div className="flex flex-col justify-center items-center bg-[#fefefe] border-2 border-[#eff1f5] rounded-xl w-30 px-3 py-2 shadow-sm">
        <div className="text-4xl text-[#226ffd]">{icon}</div>
        <h3 className="text-[12px] mt-1">{text}</h3>
      </div>
    </div>
  );
}
