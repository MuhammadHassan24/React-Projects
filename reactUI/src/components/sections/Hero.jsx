import Header from '../Header'
import Button from '../Button'

function Hero() {
    return (
        <div className=
            {`w-full h-screen  bg-[url(/src/assets/heroBg.png)] bg-no-repeat bg-cover text-white `}>
            <Header />
            <div className='h-full w-full  flex flex-col justify-center items-center'>
                <div className='max-w-[520px] mt-16 flex flex-col justify-center items-center '>
                    <h1 className='  text-6xl font-extrabold text-[#0F172A]  text-center leading-none mb-20'>Welcome To <span className='text-[#5380EA]'>RR</span> Technologies</h1>
                    <p className='text-black text-center'>Are you facing difficulties with your website?
                        Do you have a website but lack traffic?
                        No need to worry.</p>
                    <Button text="Get Started" className=' mt-12 bg-[#0F172A] rounded-lg' />
                </div>
            </div>
        </div>
    )
}
export default Hero
