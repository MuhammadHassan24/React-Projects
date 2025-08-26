import RowBox from "./RowBox"

function Service() {
    return (
        <div className='lg:px-20 sm:px-8 px-3 sm:py-16 py-10'>
            <div className='bg-[#3C3679] px-10 py-16 flex sm:flex-row flex-col justify-evenly items-center sm:gap-0 gap-10'>
                <RowBox iconUrl={"src/assets/checkbox.svg"} text={"Super useful and easy to with over 100+ customisations!"} className="text-white w-54 " bgColor={"#FAE0E1"} />
                <RowBox iconUrl={"src/assets/timer.svg"} text={"Super useful and easy to with over 100+ customisations!"} className="text-white w-54 " bgColor={"#FAE0E1"} />
                <RowBox iconUrl={"src/assets/download.svg"} text={"Super useful and easy to with over 100+ customisations!"} className="text-white w-54" bgColor={"#FAE0E1"} />
            </div>
        </div>
    )
}

export default Service
