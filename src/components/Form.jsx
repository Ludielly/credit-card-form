import React from "react";
import Input from "./Input";

export default function Form({
  inputCardNumber,
  inputCardName,
  inputCardDate,
  inputCardCVV,
  handleChange,
}) {
  return (
    <form className="grid grid-cols-3 gap-x-4 gap-y-3 order-1 lg:order-none" action="">
      <Input
        label="Número do cartão"
        inputId="1"
        placeholder="Número do cartão sem espaçamento"
        handleChange={(e) => handleChange(e, "1")}
        value={inputCardNumber}
        maxLenght={16}
      />
      <Input
        label="Nome do titular"
        inputId="2"
        placeholder="Nome como está no cartão"
        handleChange={(e) => handleChange(e, "2")}
        value={inputCardName}
        maxLenght={25}
      />
      <Input
        label="Validade"
        inputId="3"
        placeholder="mm/aa"
        handleChange={(e) => handleChange(e, "3")}
        value={inputCardDate}
        maxLenght={4}
      />
      <Input
        label="CVV"
        inputId="4"
        placeholder="•••"
        icon
        handleChange={(e) => handleChange(e, "4")}
        value={inputCardCVV}
        maxLenght={3}
      />
    </form>
  );
}
