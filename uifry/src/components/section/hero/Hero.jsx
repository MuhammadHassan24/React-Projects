import HeroImage from './HeroImage'
import Button from '../../Button'
function Hero() {


    return (
        <div className='lg:px-20 sm:px-8 px-3 py-8 flex sm:flex-row flex-col justify-between gap-10 sm:gap-0 '>
            <div className='flex flex-col justify-center gap-8 max-w-2xl'>
                <h1 className=' text-[#201C44] sm:text-[55px] text-[34px] font-bold leading-none'>Launch a software businesses website today with us!</h1>
                <p className='lg:max-w-lg text-base'>Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.</p>
                <div className='flex items-center gap-5'>
                    <Button className="bg-[#FAE0E1] p-3 rounded text-sm  font-[600]" text={"Contact Now"} />
                    <Button className=' p-2 rounded border-[1px] border-[#FAE0E1] outline-[#FAE0E1]' url={"src/assets/arrowicon.svg"} />
                    <h1 className='text-[#131126] lg:text-base text-sm font-bold'>Book a Demo Today</h1>
                </div>
                <div className='flex items-center gap-7'>
                    <Button className='px-2 py-2 rounded bg-[#FAE0E1]' url={"src/assets/star.svg"} />
                    <h1 className='text-sm font-medium'>Rated 4.9 out of 1200 reviews</h1>
                </div>
            </div>

            <HeroImage />

        </div>
    )
}

export default Hero
