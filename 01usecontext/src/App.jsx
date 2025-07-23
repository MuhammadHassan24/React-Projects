import UserContextProvider from './context/userContextProvider'
import Card from './components/Card'
import Profile from './components/Profile'


function App() {

  return (
    <>
      <div className='flex items-center place-content-center w-full h-screen'><div className='flex flex-col justify-center items-center  bg-slate-600 py-5 px-5 rounded-2xl w-fit  h-fit'><UserContextProvider>
        <h1>UseContext Example</h1>
        <Card />
        <Profile />
      </UserContextProvider></div></div>
    </>
  )
}

export default App
