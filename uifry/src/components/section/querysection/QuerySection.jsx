import Accordion from '../../Accordion'
import Button from '../../Button'

function QuerySection() {
    return (
        <div className='py-16 lg:px-20 sm:px-8 px-3 space-y-10 '>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img src="src/assets/Icon.png" alt="" />
                <h1 className='sm:text-5xl text-4xl text-center font-bold text-[#201C44]'>Frequently asked questions</h1>
                <h1 className='sm:text-base text-sm'>Whats happening around the World.</h1>
            </div>
            <div className='space-y-5'>
                <Accordion query={"What is the best way to create a saas business today?"} anwser={"Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."} />
                <Accordion query={"What is the best way to create a saas business today?"} anwser={"Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."} />
                <Accordion query={"What is the best way to create a saas business today?"} anwser={"Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."} />
                <Accordion query={"What is the best way to create a saas business today?"} anwser={"Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."} />
                <Accordion query={"What is the best way to create a saas business today?"} anwser={"Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."} />
                <div className='flex justify-center items-center gap-5'>
                    <Button className="bg-[#FAE0E1] p-3 rounded text-sm font-[600]" text={"Contact Now"} />
                    <Button className=' p-2 rounded border-[1px] border-[#FAE0E1] outline-[#FAE0E1]' url={"src/assets/arrowicon.svg"} />
                    <h1 className='text-[#131126] lg:text-base text-sm font-bold'>Book a Demo Today</h1>
                </div>
            </div>

        </div>
    )
}

export default QuerySection
