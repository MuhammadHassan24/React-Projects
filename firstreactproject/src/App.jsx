import { useState } from "react";
import Card from "./components/Card"


function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    if (counter == 20) {
      setCounter(counter = 20);
    }
  }
  const removeValue = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(counter = 0);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 items-center place-content-center">
        <h1 className="text-3xl font-bold">Counter Value : {counter}</h1>
        <button onClick={addValue} className=" h-7 bg-amber-200">Add : {counter}</button>
        <button onClick={removeValue} className=" h-7 bg-slate-800">Remove : {counter}</button>
      </div>
      <Card />
    </>
  )
}
export default App
