import Button from "../../Button"
import RowBox from "../../RowBox"
import Image from "./Image"
function FirstSection() {
    return (
        <div className='lg:px-20 sm:px-8 px-3 sm:py-16 py-10 flex sm:flex-row flex-col-reverse justify-between sm:gap-0 gap-10  '>
            <Image />
            <div className="lg:w-lg sm:w-[350px] flex flex-col justify-center items-start gap-8 ">
                <h1 className="sm:text-[38px] text-4xl font-bold text-[#201C44] leading-10">Let your business thrive under our supervision</h1>
                <p className="text-base"> Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.</p>
                <p className="text-base">We are making every business grow!</p>
                <div className="space-y-3">
                    <RowBox iconUrl={"src/assets/checkbox.svg"} text={"Super useful and easy to use interface"} bgColor={"#FAE0E1"} />
                    <RowBox iconUrl={"src/assets/checkbox.svg"} text={"Easiest way to grow your business in days"} bgColor={"#FAE0E1"} />
                </div>
                <Button text={"Contact Now"} className="bg-[#FAE0E1] p-3 text-sm  font-[600] sm:w-fit w-full" url={"src/assets/arrowicon.svg"} />
            </div>
        </div>
    )
}

export default FirstSection
