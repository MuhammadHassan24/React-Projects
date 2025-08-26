
function Image() {
    return (
        <>
            <div className="w-[450px] h-[530px] relative bg-[#F6F6F9] sm:flex hidden">
                <img className="absolute bottom-0 " src="src/assets/person2.png" alt="" />
                <img className="absolute bottom-0 -right-40" src="src/assets/chart1.png" alt="" />
                <img className="absolute -top-10 left-10" src="src/assets/Group (1).png" alt="" />
                <img className="absolute -right-12 top-14" src="src/assets/line1.png" alt="" />
            </div>
            <div className="w-[280px] h-[380px]  bg-[#F6F6F9] relative ml-10 mr-3 sm:hidden flex ">
                <img className="absolute bottom-0 " src="src/assets/person2.png" alt="" />
                <img className="absolute  -bottom-10 -left-28" src="src/assets/chart1.png" alt="" />
                <img className="absolute size-12 top-10 -right-5" src="src/assets/Group (1).png" alt="" />
                <img className="absolute size-20 -left-10 top-20" src="src/assets/line1.png" alt="" />
            </div></>

    )
}

export default Image
