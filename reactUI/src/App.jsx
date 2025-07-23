import Header from "./components/Header"
import Dailog from "./components/Dailog"
import AppButton from "./components/AppButton"
import Drawer from "./components/Drawer"
import { useState } from "react";
import Select from "./components/Select";

function App() {

  const [isDailogOpen, setIsDailogOpen] = useState(false);
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 h-screen">

        {<Drawer IsDrawerOpen={IsDrawerOpen} onClose={() => setIsDrawerOpen(false)} />}
        <Header />

        <div className="w-full  bg-white dark:dark:bg-gray-900 px-10 py-8 flex justify-around items-center ">
          <AppButton text={"Dailog"} onClick={() => setIsDailogOpen(true)} />
          <AppButton text={"Drawer"} onClick={() => setIsDrawerOpen(true)} />
          <Select />
          <AppButton text={"PopOver"} />
        </div>
        {isDailogOpen && <Dailog onClose={() => setIsDailogOpen(false)} />}</div>
    </>
  )
}

export default App
