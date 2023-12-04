import { useState } from "react";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";

function App() {
  const [inputCardNumber, setInputCardNumber] = useState("");
  const [inputCardName, setInputCardName] = useState("");
  const [inputCardDate, setInputCardDate] = useState("");
  const [inputCardCVV, setInputCardCVV] = useState("");

  const [cardNumber, setCardNumber] = useState("•••• •••• •••• ••••");
  const [cardName, setCardName] = useState("Seu nome aqui");
  const [cardDate, setCardDate] = useState("••/••");

  const handleChange = (e, inputId) => {
    switch (inputId) {
      case "1":
        const inputNumber = e.target.value.replace(/[^0-9]/g, "");
        setInputCardNumber(inputNumber);
        setCardNumber(() => {
          if (inputNumber === "") {
            return "•••• •••• •••• ••••";
          }
          let updatedCardNumber = inputNumber
            .replace(/\s/g, "")
            .split("")
            .map((char, index) => (index < 16 ? char : ""))
            .join("");
          updatedCardNumber =
            updatedCardNumber
              .match(/.{1,4}/g)
              ?.join(" ")
              .substr(0, 19) || "";

          return updatedCardNumber;
        });
        break;
      case "2":
        const name = e.target.value;
        setInputCardName(name);
        setCardName(() => {
          if (name === "") {
            return "Seu nome aqui";
          }
          return name;
        });
        break;
      case "3":
        const date = e.target.value
          .replace(/[^0-9/]/g, "")
          .replace(/(\d{2})(\d{2})/, "$1/$2");
        setInputCardDate(date);
        setCardDate(date);
        break;
      case "4":
        setInputCardCVV(e.target.value.replace(/[^0-9]/g, ""));
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-full bg-slate-900 flex items-center justify-center text-slate-100 text-xs sm:text-sm lg:text-base">
      <div className="h-full w-full p-4 bg-slate-800 border border-slate-700 rounded-md md:w-auto md:h-auto md:py-6 lg:px-6 lg:py-8 lg:mx-4">
        <div className="flex flex-col items-center gap-11 lg:flex-row">
          <Form
            inputCardNumber={inputCardNumber}
            inputCardName={inputCardName}
            inputCardDate={inputCardDate}
            inputCardCVV={inputCardCVV}
            handleChange={handleChange}
          />
          <CreditCard
            cardNumber={cardNumber}
            cardName={cardName}
            cardDate={cardDate}
          />
        </div>
        <button className="w-full block bg-purple-700 rounded py-3 px-8 mt-6 font-bold">
          Adicionar cartão
        </button>
      </div>
    </div>
  );
}

export default App;
