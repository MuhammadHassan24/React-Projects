
function HeroImage() {
    return (
        <>
            <div className="w-[450px] h-[450px] bg-[#FAE0E1] relative sm:flex hidden">
                <img className="absolute  -left-20 -bottom-0" src="src/assets/person1.png" alt="" />
                <img className="absolute h-72 top-2 -left-36" src="src/assets/chart1.png" alt="" />
                <img className="absolute top-0 -right-10" src="src/assets/arrow.png" alt="" />
            </div>
            <div className="w-[290px] h-[290px] bg-[#FAE0E1] relative ml-10 mr-1 sm:hidden flex">
                <img className="absolute -left-10 bottom-0 " src="src/assets/person1.png" alt="" />
                <img className="absolute size-20 top-3 -right-3" src="src/assets/arrow.png" alt="" />
            </div>
        </>

    )
}

export default HeroImage
