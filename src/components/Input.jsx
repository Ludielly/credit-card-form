import React from "react";
import { Question } from "@phosphor-icons/react";

export default function Input({
  inputId,
  label,
  icon,
  placeholder,
  handleChange,
  maxLenght,
  value,
}) {
  return (
    <div
      className={`flex flex-col gap-1 ${
        inputId === "3"
          ? "col-start-1 col-end-3"
          : inputId === "4"
          ? "col-start-3 col-end-4"
          : "col-start-1 col-end-4"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <label className="font-[700] text-xs md:text-sm lg:text-base" htmlFor={inputId}>
          {label}
        </label>
        {!icon ? undefined : (
          <div
            className="cursor-pointer"
            title="Valor de Verificação do Cartão (Card Verification Value). São os três números localizados no verso do cartão"
          >
            <Question weight="fill" />
          </div>
        )}
      </div>
      <input
        className="w-full bg-slate-900 placeholder:text-slate-600 text-slate-300 px-3 py-2 border border-slate-700 rounded focus:outline focus:outline-2 focus:outline-purple-600"
        type="text"
        id={inputId}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        maxLength={maxLenght}
      />
    </div>
  );
}
