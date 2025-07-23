import { useState } from "react";


function App() {

  const [color, setColor] = useState("grey");

  const changeColor = (bgColor) => {
    setColor(bgColor);
    console.log(`BG - ${bgColor}`)
  }
  return (
    <>
      <div className="h-screen w-full " style={{ backgroundColor: color }}>

        <div className=" fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-full px-3  py-3">
            <button className="bg-[red] px-4 outline-none py-1 text-black rounded-full" onClick={() => changeColor("red")}>Red</button>
            <button className="bg-[blue] px-4 outline-none py-1 text-black rounded-full" onClick={() => changeColor("blue")} >Blue</button>
            <button className="bg-[pink] px-4 outline-none py-1 text-black rounded-full" onClick={() => changeColor("pink")}>Pink</button>
            <button className="bg-[black] px-4 outline-none py-1 text-white rounded-full" onClick={() => changeColor("black")} >Black</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
