import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertAm, setConvertAm] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertAm(amount * currencyInfo[to]);
  }

  return (
    <>
      <div className="h-screen bg-stone-900 flex justify-center items-center">
        <div className='bg-white/50 backdrop-blur-md rounded-xl px-3 py-3 w-2/5 '>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
            className="space-y-4" action="">
            <InputBox lable={"From"} amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
            <InputBox lable={"To"} amount={convertAm} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} />
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
