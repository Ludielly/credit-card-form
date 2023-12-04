import React from "react";
import {ContactlessPayment, ShieldCheck} from "@phosphor-icons/react"
import visaLogo from "../assets/visa.svg"

export default function CreditCard({cardNumber, cardName, cardDate}) {
  return (
    <div className="flex flex-col gap-7 bg-slate-700 shadow-card px-6 py-2 border border-slate-600 rounded-lg w-[280px] h-[158px] relative">
      <div className="flex items-center justify-between">
        <img src={visaLogo} width={40} height={40} alt="Logo da VISA" />
        <ContactlessPayment weight="bold" size={20} />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <span className="tracking-[.18rem] text-white/80">{cardNumber}</span>
        <div className="flex items-center justify-between w-full gap-2">
          <span className="text-xs md:text-sm xl:text-base text-white/50">{cardName}</span>
          <span className="text-xs md:text-sm xl:text-base text-white/50 tracking-widest">{cardDate}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4 absolute -bottom-8 -translate-x-1/2 left-2/4 whitespace-nowrap">
        <ShieldCheck className="fill-green-400" weight="fill" size={22} />
        <span className="text-xs text-white/80 md:text-sm lg:text-base">Seus dados estão seguros</span>
      </div>
    </div>
  );
}
