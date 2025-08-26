import Image from './Image'
import Button from '../../Button'

function ThirdSection() {
    return (
        <div className='py-16 lg:px-20 sm:px-8  sm:flex hidden justify-between'>
            <div className="lg:w-lg sm:w-[400px] flex flex-col justify-center items-start gap-8 ">
                <h1 className="text-[38px] font-bold text-[#201C44] leading-10">Let your business thrive under our supervision</h1>
                <p className="text-base"> Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.</p>
                <p className="text-base">We are making every business grow!</p>
                <div className='flex lg:flex-row sm:flex-col lg:gap-10 gap-5 items-start'>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='h-10 w-10 p-2.5 bg-[#FAE0E1] rounded'>
                            <img src="src/assets/checkbox.svg" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-bold'>100+</h1>
                            <h1 className='text-base '>Successfull Projects</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='h-10 w-10 p-2.5 bg-[#FAE0E1] rounded'>
                            <img src="src/assets/checkbox.svg" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-bold'>978+</h1>
                            <h1 className='text-base '>Clients Today</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <Button className="bg-[#FAE0E1] p-3 rounded text-sm font-[600]" text={"Contact Now"} />
                    <Button className='h-full px-2 rounded border-[1px] border-[#FAE0E1] outline-[#FAE0E1]' url={"src/assets/arrowicon.svg"} />
                    <h1 className='text-[#131126] text-base font-bold'>Book a Demo Today</h1>
                </div>
            </div>
            <Image />

        </div>
    )
}

export default ThirdSection
