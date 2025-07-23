import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumber] = useState(false);
  const [charcAllow, setCharactor] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charcAllow) str += "~`!@#$%^&*(){}[]><:";

    for (let i = 0; i < length; i++) {
      let charac = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charac);
    }
    setPassword(pass);
  }, [length, numberAllow, charcAllow, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charcAllow, passwordGenerator])

  return (
    <>
      <div className='place-content-center flex justify-center items-center h-screen'>
        <div className=' bg-gray-600 rounded-2xl flex flex-col justify-center items-center gap-4 px-4 py-10 '>
          <h1 className='text-3xl text-white font-bold'>Password Generator</h1>
          <div className=' overflow-hidden w-full h-8 flex justify-between rounded-sm'>
            <input className='bg-gray-200 w-full border-none outline-none px-3' type="text" value={password} readOnly ref={passwordRef} />
            <button onClick={copyPassword} className='bg-blue-600 px-2 text-white hover:text-black' >Copy</button>
          </div>
          <div className='flex gap-5'>
            <div className='flex flex-wrap justify-center items-center gap-3 text-white'>
              <input className='cursor-pointer' type="range" value={length} min={8} max={100} onChange={(e) => { setLength(e.target.value) }} />
              <label htmlFor="">Length : {length}</label>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-2 text-white'>
              <input type="checkbox" defaultChecked={numberAllow} id='numberInput' onChange={() => {
                setNumber((prev) => !prev)
              }} /> <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-2 text-white'>
              <input type="checkbox" min={8} max={100} defaultChecked={charcAllow} id='charactorInput' onChange={() => {
                setCharactor((prev) => !prev)
              }} /> <label htmlFor="charactorInput">Charactor</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
