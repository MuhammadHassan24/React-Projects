import Footer from "./components/Footer"
import Header from "./components/Header"
import Marque from "./components/Marque"
import FirstSection from "./components/section/firstsection/FirstSection"
import Hero from "./components/section/hero/Hero"
import QuerySection from "./components/section/querysection/QuerySection"
import SecondSection from "./components/section/secondsection/SecondSection"
import ThirdSection from "./components/section/thirdsection/ThirdSection"
import SwiperUpdate from "./components/section/updatesection/SwiperUpdate"
import Service from "./components/Service"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Marque />
      <FirstSection />
      <Service />
      <SecondSection />
      <SwiperUpdate />
      <ThirdSection />
      <Service />
      <QuerySection />
      <Footer />
    </>
  )
}

export default App
