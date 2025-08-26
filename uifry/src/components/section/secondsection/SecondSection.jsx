import Button from '../../Button'
import Image from './Image'

function SecondSection() {
    return (
        <div className='sm:py-16 py-10 lg:px-20 sm:px-8 px-3 flex sm:flex-row flex-col justify-between sm:gap-0 gap-10 '>
            <div className='lg:w-lg sm:w-sm flex flex-col justify-center items-start gap-8 '>
                <h1 className="sm:text-[38px] text-4xl font-bold text-[#201C44] leading-10">Let your business thrive under our supervision</h1>
                <p className="text-base"> Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.</p>
                <p className="text-base font-bold">We are making every business grow!</p>
                <div className='sm:w-auto space-y-5 '>
                    <input type="text" className='w-full px-3 p-3 rounded border-[1px] border-[#D0D0D0]' placeholder='Full Name' />
                    <input type="text" className='w-full px-3 p-3 rounded border-[1px] border-[#D0D0D0]' placeholder='Email Address' />
                    <Button text={"Contact Now"} className="bg-[#FAE0E1] rounded  p-3 text-sm font-[600] w-full gap-3" url={"src/assets/arrowicon.svg"} />
                </div>
            </div>
            <Image />
        </div>
    )
}

export default SecondSection
